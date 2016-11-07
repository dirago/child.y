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