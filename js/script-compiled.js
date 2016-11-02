"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Child = function Child(name) {
    _classCallCheck(this, Child);

    this.name = name;
};
"use strict";

// I want to isolate each line of smileys so will be independent
var smileyRows = Array.from(document.getElementsByClassName('responsability-smile')),
    j = 0;
// i create ids for each generated line of smiles
smileyRows.map(function (i) {
    if (i.id != null) {
        j++;
        return i.id = "a" + j;
    } else {
        j = 1;
        i.id = "a" + j;
    }
});
smileyRows.map(function (i) {
    var svgs = Array.from(document.querySelectorAll('#' + i.id + ' > svg'));
    svgs.map(function (i) {
        i.addEventListener('click', function (e) {
            svgs.map(function (i) {
                i.classList.remove(i.getAttribute('data-state'));
            });
            e.currentTarget.classList.add(e.currentTarget.getAttribute('data-state'));
            console.log(e.currentTarget.getAttribute('data-state'));
        });
    });
});
// var cxnBox = document.getElementsByClassName('log-panel--item')[0];
// var insBox = document.getElementsByClassName('log-panel--item')[1];
// cxnBox.addEventListener('mouseover', e => {e.target.innerText = "→"});
// cxnBox.addEventListener('mouseout', e => {e.target.innerText = e.target.dataset.text});
// insBox.addEventListener('mouseover', e => {e.target.innerText = "+"});
// insBox.addEventListener('mouseout', e => {e.target.innerText = e.target.dataset.text});
"use strict";
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parent = function Parent(name) {
    _classCallCheck(this, Parent);

    this.name = name;
};
"use strict";
