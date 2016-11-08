"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = function () {
    function Note(date, child, item, note) {
        _classCallCheck(this, Note);

        this.date = date;
        this.child = child;
        this.item = item;
        this.note = note;

        // this.combo = [
        //     {this.item = this.note}
        // ];
    }

    _createClass(Note, [{
        key: "getDate",
        value: function getDate() {
            return this.date;
        }
    }]);

    return Note;
}();