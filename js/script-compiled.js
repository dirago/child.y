"use strict";

window.onload = function () {
    // I want to isolate each line of smileys so will be independent
    var rows = Array.from(document.getElementsByClassName('responsability-smile')),
        rowId = 0;
    // I create IDs for each generated line of smiles
    rows.map(function (el) {
        if (el.id != null) {
            rowId++;
            el.id = "r" + rowId;
        } else {
            rowId = 1;
            el.id = "r" + rowId;
        };
    });
    rows.map(function (row) {
        var svgs = Array.from(document.querySelectorAll('#' + row.id + ' > svg'));
        svgs.map(function (svg) {
            svg.addEventListener('click', function (evt) {
                svgs.map(function (svg) {
                    svg.classList.remove(svg.getAttribute('data-color'));
                    svg.setAttribute('data-selected', '');
                });
                var item = evt.currentTarget.getAttribute('data-item');
                var note = evt.currentTarget.getAttribute('data-note');
                console.log('item selectionné :', item);
                console.log('notation :', note);
                evt.currentTarget.classList.add(evt.currentTarget.getAttribute('data-color'));
                evt.currentTarget.setAttribute('data-selected', true);
                afficheNotes();
            });
        });
    });
    function afficheNotes() {
        var svgs = rows.map(function (row) {
            return Array.from(document.querySelectorAll('#' + row.id + ' > svg'));
        });
        svgs.map(function (svg) {
            var filter = svg.filter(onlySelected);
            console.log(filter);
            filter.map(function (el) {
                console.log("L'item " + el.getAttribute('data-item'), "va avec la note " + el.getAttribute('data-note'));
            });
        });
    };

    function onlySelected(elt) {
        return elt.getAttribute('data-selected') === "true";
    };
};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Child = function Child(name) {
    _classCallCheck(this, Child);

    this.name = name;
};

;

var sacha = new Child('Sacha');
console.log(sacha);
// var cxnBox = document.getElementsByClassName('log-panel--item')[0];
// var insBox = document.getElementsByClassName('log-panel--item')[1];
// cxnBox.addEventListener('mouseover', e => {e.target.innerText = "→"});
// cxnBox.addEventListener('mouseout', e => {e.target.innerText = e.target.dataset.text});
// insBox.addEventListener('mouseover', e => {e.target.innerText = "+"});
// insBox.addEventListener('mouseout', e => {e.target.innerText = e.target.dataset.text});
"use strict";
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parent = function Parent(role, name) {
    _classCallCheck(this, Parent);

    this.role = role;
    this.name = name;
};

;

var papa = new Parent('Daddy', 'Raphaël');
console.log(papa);
