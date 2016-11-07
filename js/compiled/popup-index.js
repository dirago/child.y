'use strict';

var loginBtn = document.querySelector('#login'),
    signinBtn = document.querySelector('#signin'),
    body = document.body,
    header = document.querySelector('header');

loginBtn.addEventListener('click', function (e) {
    // container popup
    createContainerPopUp(body, header);
    // popup
    createPopUp(containerPopupElement);
    // form popup
    var form = document.createElement('form');
    form.className = "form form-connexion";
    form.innerHTML = '<input type="text" name="login">';
    form.innerHTML = '<input type="password" name="password">';
    loginPopup.appendChild(form);

    containerPopup.addEventListener('click', function (e) {
        e.preventDefault();
        containerPopup.className = "popup animated fadeOut";
        setTimeout(function () {
            body.removeChild(containerPopup);
        }, 2000);
    });
});

signin.addEventListener('click', function (e) {
    // container popup
    createPopUp(body, header);
    // popup
});

function createContainerPopUp(parent, nextChild) {
    var createdContainerPopup = document.createElement('div');
    createdContainerPopup.className = "popup-container animated fadeIn";
    createdContainerPopup.id = "container-popup";
    parent.insertBefore(createdContainerPopup, nextChild);
    var containerPopupElement = document.querySelector('#container-popup');
}
function createPopUp(parent) {
    var popup = document.createElement('div');
    popup.className = "popup-content animated fadeIn";
    popup.id = "popup";
    parent.appendChild(loginPopup);
    var popupElement = document.querySelector('#popup');
    return popupElement;
}