'use strict';

var cxnBox = document.getElementsByClassName('log-panel--item')[0];
var insBox = document.getElementsByClassName('log-panel--item')[1];
cxnBox.addEventListener('mouseover', e => {e.target.innerText = "→"});
cxnBox.addEventListener('mouseout', e => {e.target.innerText = e.target.dataset.text});
insBox.addEventListener('mouseover', e => {e.target.innerText = "+"});
insBox.addEventListener('mouseout', e => {e.target.innerText = e.target.dataset.text});
