'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Child = function () {
    function Child(name, id) {
        _classCallCheck(this, Child);

        this.name = name;
        // this.id = id;
        this.day;
    }

    _createClass(Child, [{
        key: 'setNote',
        value: function setNote(data, day) {
            this.day = {
                'day': day,
                'notes': data
            };
            var req = new XMLHttpRequest();
            req.onload = function () {
                console.log(this.responseText);
            };
            req.open('POST', '../../add_data.php', true);
            var form = new FormData();
            form.append('test', 'test');
            req.send(form);
        }
    }, {
        key: 'checkData',
        value: function checkData(day) {
            this;
        }
    }]);

    return Child;
}();

;