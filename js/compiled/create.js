"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createContainerPopUp = createContainerPopUp;
function createContainerPopUp(parent, nextChild) {
    var containerPopup = document.createElement('div');
    containerPopup.className = "popup-container animated fadeIn";
    containerPopup.id = "container-popup";
    parent.insertBefore(containerPopup, nextChild);
    var containerPopupElement = document.querySelector('#container-popup');
    return containerPopupElement;
};