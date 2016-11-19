'use strict';

var loginBtn = document.querySelector('#login'),
    signinBtn = document.querySelector('#signin'),
    body = document.body,
    header = document.querySelector('header'),
    nbChilds = 1; // Par défaut

function createPopUp(currentElement, parent, nextChild) {
    var containerPopup = document.createElement('div');
    containerPopup.className = "popup-container animated fadeIn";
    containerPopup.id = "container-popup";
    parent.insertBefore(containerPopup, nextChild);
    if (currentElement.id === "login") {
        var loginPopup = document.createElement('div');
        loginPopup.className = "popup-content animated fadeIn";
        loginPopup.id = "loginPopup";
        containerPopup.appendChild(loginPopup);
        var close = document.createElement('p');
        close.className = "btn-close";
        close.innerText = "X";
        loginPopup.appendChild(close);
        close.addEventListener('click', function (e) {
            body.removeChild(containerPopup);
        });
        createForm(loginPopup);
    } else {
        var signinPopup = document.createElement('div');
        signinPopup.className = "popup-content animated fadeIn";
        signinPopup.id = "signinPopup";
        containerPopup.appendChild(signinPopup);
        var _close = document.createElement('p');
        _close.className = "btn-close";
        _close.innerText = "X";
        signinPopup.appendChild(_close);
        _close.addEventListener('click', function (e) {
            body.removeChild(containerPopup);
        });
        createForm(signinPopup);
    }
}

function createForm(parent) {
    if (parent.id === "loginPopup") {
        (function () {
            // Titre
            var title = document.createElement('h2');
            title.innerText = "Se connecter";
            parent.appendChild(title);
            // Formulaire
            var form = document.createElement('form');
            form.className = "form form-logIn";
            form.action = "check_account.php";
            form.method = "POST";
            form.innerHTML = '<div class="form-row"><input type="text" name="mail" placeholder="Adresse e-mail" required><input type="password" name="password" placeholder="Mot de passe" required></div>';
            var sendBtn = document.createElement('input');
            sendBtn.type = "submit";
            sendBtn.value = "Valider";
            parent.appendChild(form);
            parent.appendChild(sendBtn);
            sendBtn.addEventListener('click', function () {
                form.submit();
            });
        })();
    } else {
        (function () {
            // Titre
            var title = document.createElement('h2');
            title.innerText = "Inscrivez-vous";
            parent.appendChild(title);
            // Formulaire
            var form = document.createElement('form');
            form.className = "form form-signIn";
            form.action = "create_account.php";
            form.method = "POST";
            form.innerHTML = '<div class="form-row"><input type="text" name="mail" placeholder="Adresse e-mail" required><input type="password" name="password" placeholder="Mot de passe" required></div>';
            form.innerHTML += '<div class="form-row"><input type="text" name="lastname" placeholder="Nom de famille" required></div>';
            form.innerHTML += '<div class="form-row"><p id="plus" class="plus" onclick="addChild(this); return false">+</p><h3 id="childTitle">Enfant</h3></div>';
            form.innerHTML += '<input id="hiddenInput" type="hidden" name="nbChilds" value="' + nbChilds + '">';
            form.innerHTML += '<div class="form-row"><input type="text" name="nameChild1" placeholder="Enfant ' + nbChilds + '" onkeypress="addChildKey(event)" required></div>';
            var sendBtn = document.createElement('input');
            sendBtn.type = "submit";
            sendBtn.value = "Valider";
            parent.appendChild(form);
            parent.appendChild(sendBtn);
            sendBtn.addEventListener('click', function () {
                form.submit();
            });
        })();
    }
}

function addChild(self) {
    nbChilds++;
    var hiddenInput = document.querySelector('#hiddenInput');
    hiddenInput.value = nbChilds;
    var input = document.createElement('input');
    input.name = "nameChild" + nbChilds;
    input.type = "text";
    input.placeholder = "Enfant " + nbChilds;
    input.onkeypress = "addChildKey(event)";
    var form = self.parentNode.parentNode;
    if (isOdd(nbChilds)) {
        var div = document.createElement('div');
        div.className = "form-row";
        form.appendChild(div);
        form.lastChild.appendChild(input);
    } else {
        document.querySelector('#childTitle').innerText = "Enfants";
        form.lastChild.appendChild(input);
    }
}

function addChildKey(e) {
    if (e.keyCode === 13) {
        nbChilds++;
        var hiddenInput = document.querySelector('#hiddenInput');
        hiddenInput.value = nbChilds;
        var input = document.createElement('input');
        input.name = "nameChild" + nbChilds;
        input.type = "text";
        input.placeholder = "Enfant " + nbChilds;
        input.onkeypress = function () {
            addChildKey(event);
        };
        var form = e.target.parentNode.parentNode;
        if (isOdd(nbChilds)) {
            var div = document.createElement('div');
            div.className = "form-row";
            form.appendChild(div);
            form.lastChild.appendChild(input);
            input.focus();
        } else {
            document.querySelector('#childTitle').innerText = "Enfants";
            form.lastChild.appendChild(input);
            input.focus();
        }
    } else {
        return false;
    }
}

function isOdd(nb) {
    return nb % 2 ? true : false;
}

loginBtn.addEventListener('click', function (e) {
    createPopUp(e.target, body, header);
});

signin.addEventListener('click', function (e) {
    createPopUp(e.target, body, header);
});