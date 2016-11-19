let loginBtn = document.querySelector('#login'),
    signinBtn = document.querySelector('#signin'),
    body = document.body,
    header = document.querySelector('header'),
    nbChilds = 1; // Par défaut

function createPopUp(currentElement, parent, nextChild){
    let containerPopup = document.createElement('div');
    containerPopup.className = "popup-container animated fadeIn";
    containerPopup.id = "container-popup";
    parent.insertBefore(containerPopup, nextChild);
    if (currentElement.id === "login"){
        let loginPopup = document.createElement('div');
        loginPopup.className = "popup-content animated fadeIn";
        loginPopup.id = "loginPopup";
        containerPopup.appendChild(loginPopup);
        let close = document.createElement('p');
        close.className = "btn-close";
        close.innerText = "X";
        loginPopup.appendChild(close);
        close.addEventListener('click', e => {
            body.removeChild(containerPopup);
        })
        createForm(loginPopup);
    } else {
        let signinPopup = document.createElement('div');
        signinPopup.className = "popup-content animated fadeIn";
        signinPopup.id = "signinPopup";
        containerPopup.appendChild(signinPopup);
        let close = document.createElement('p');
        close.className = "btn-close";
        close.innerText = "X";
        signinPopup.appendChild(close);
        close.addEventListener('click', e => {
            body.removeChild(containerPopup);
        })
        createForm(signinPopup);
    }
}

function createForm(parent){
    if (parent.id === "loginPopup") {
        // Titre
        let title = document.createElement('h2');
        title.innerText = "Se connecter";
        parent.appendChild(title);
        // Formulaire
        let form = document.createElement('form');
        form.className = "form form-logIn";
        form.action = "check_account.php";
        form.method = "POST";
        form.innerHTML = '<div class="form-row"><input type="text" name="mail" placeholder="Adresse e-mail" required><input type="password" name="password" placeholder="Mot de passe" required></div>';
        let sendBtn = document.createElement('input');
        sendBtn.type = "submit";
        sendBtn.value = "Valider";
        parent.appendChild(form);
        parent.appendChild(sendBtn);
        sendBtn.addEventListener('click', function(){form.submit()})
    } else {
        // Titre
        let title = document.createElement('h2');
        title.innerText = "Inscrivez-vous";
        parent.appendChild(title);
        // Formulaire
        let form = document.createElement('form');
        form.className = "form form-signIn";
        form.action = "create_account.php";
        form.method = "POST";
        form.innerHTML = '<div class="form-row"><input type="text" name="mail" placeholder="Adresse e-mail" required><input type="password" name="password" placeholder="Mot de passe" required></div>';
        form.innerHTML += '<div class="form-row"><input type="text" name="lastname" placeholder="Nom de famille" required></div>';
        form.innerHTML += '<div class="form-row"><p id="plus" class="plus" onclick="addChild(this); return false">+</p><h3 id="childTitle">Enfant</h3></div>'
        form.innerHTML += '<input id="hiddenInput" type="hidden" name="nbChilds" value="'+ nbChilds +'">';
        form.innerHTML += '<div class="form-row"><input type="text" name="nameChild1" placeholder="Enfant ' + nbChilds + '" onkeypress="addChildKey(event)" required></div>';
        let sendBtn = document.createElement('input');
        sendBtn.type = "submit";
        sendBtn.value = "Valider";
        parent.appendChild(form);
        parent.appendChild(sendBtn);
        sendBtn.addEventListener('click', function(){form.submit()})
    }
}

function addChild(self){
    nbChilds++;
    let hiddenInput = document.querySelector('#hiddenInput');
    hiddenInput.value = nbChilds;
    let input = document.createElement('input');
    input.name = "nameChild" + nbChilds;
    input.type = "text";
    input.placeholder = "Enfant " + nbChilds;
    input.onkeypress = "addChildKey(event)"
    let form = self.parentNode.parentNode;
    if (isOdd(nbChilds)){
        let div = document.createElement('div');
        div.className = "form-row";
        form.appendChild(div);
        form.lastChild.appendChild(input);
    } else {
        document.querySelector('#childTitle').innerText = "Enfants"
        form.lastChild.appendChild(input);
    }
}

function addChildKey(e){
    if(e.keyCode === 13) {
        nbChilds++;
        let hiddenInput = document.querySelector('#hiddenInput');
        hiddenInput.value = nbChilds;
        let input = document.createElement('input');
        input.name = "nameChild" + nbChilds;
        input.type = "text";
        input.placeholder = "Enfant " + nbChilds;
        input.onkeypress = function(){addChildKey(event)};
        let form = e.target.parentNode.parentNode;
        if (isOdd(nbChilds)){
            let div = document.createElement('div');
            div.className = "form-row";
            form.appendChild(div);
            form.lastChild.appendChild(input);
            input.focus();
        } else {
            document.querySelector('#childTitle').innerText = "Enfants"
            form.lastChild.appendChild(input);
            input.focus();
        }
    } else {
        return false;
    }
}

function isOdd(nb) {return nb % 2 ? true : false}

loginBtn.addEventListener('click', e => {
    createPopUp(e.target, body, header);
});

signin.addEventListener('click', e => {
    createPopUp(e.target, body, header);
});
