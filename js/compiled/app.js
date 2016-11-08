'use strict';

// I want to isolate each line of smileys so will be independent
var rows = Array.from(document.getElementsByClassName('responsability-smile')),
    rowId = 0,
    recordedData = new Array(),
    submitBtn = document.querySelector('#submit-btn'),
    main = document.querySelector('main')[0];
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
            // console.log('item selectionné :', item);
            // console.log('notation :', note);
            evt.currentTarget.classList.add(evt.currentTarget.getAttribute('data-color'));
            evt.currentTarget.setAttribute('data-selected', true);
            setNotes();
        });
    });
});
function onlySelected(e) {
    return e.getAttribute('data-selected') === "true";
};
function setNotes() {
    var svgs = rows.map(function (row) {
        return Array.from(document.querySelectorAll('#' + row.id + ' > svg'));
    });
    svgs.map(function (svg) {
        var filter = svg.filter(onlySelected);
        filter.map(function (el) {
            var check = recordedData.filter(function (data) {
                return data.item === el.getAttribute('data-item');
            });
            if (check.length === 0) {
                recordedData.push({
                    "item": el.getAttribute('data-item'),
                    "note": el.getAttribute('data-note')
                });
            } else {
                for (var i = 0; i < recordedData.length; i++) {
                    if (recordedData[i].item === el.getAttribute('data-item')) {
                        recordedData[i].note = el.getAttribute('data-note');
                    };
                };
            };
        });
    });
    return recordedData;
};
submitBtn.addEventListener('click', function (evt) {
    var parent = evt.target.parentNode,
        errorElt = document.querySelector('#error');
    if (recordedData.length === rows.length - 1) {
        if (errorElt !== null) {
            parent.removeChild(errorElt);
        }
        var error = document.createElement('span');
        error.id = "error";
        error.className = "error-message";
        error.innerText = "Il manque une note !";
        parent.appendChild(error);
    } else if (recordedData.length < rows.length) {
        if (errorElt !== null) {
            parent.removeChild(errorElt);
        }
        var _error = document.createElement('span');
        _error.id = "error";
        _error.className = "error-message";
        _error.innerText = "Il manque plusieurs notes !";
        parent.appendChild(_error);
    } else {
        (function () {
            var childs = Array.from(parent.childNodes);
            childs.map(function (el) {
                el.className += " animated fadeOut";
            });
            setTimeout(function () {
                childs.map(function (child) {
                    parent.removeChild(child);
                });
            }, 1000);
            setTimeout(function () {
                addData(recordedData, sacha, parent);
            }, 1000);
        })();
    }
});
function addData(data, child, container) {
    var date = new Date();
    var day = date.toLocaleDateString();
    container.style.width = "100vw";
    var recordedDay = data.map(function (el) {
        var note = new Note(day, child.name, el.item, el.note);
        return note;
    });
    var childName = document.createElement('h1');
    childName.innerText = "Semaine de " + child.name;
    childName.className = "animated fadeInDown";
    container.appendChild(childName);
    var notes = document.createElement('h2');
    notes.innerText = "Moyenne du jour";
    notes.className = "animated fadeIn";
    container.appendChild(notes);
    var chart = document.createElement('div');
    chart.className = "canvas";
    chart.innerHTML = '<canvas id="myChart" width="400" height="400"></canvas>';
    container.appendChild(chart);
    listenCanvas(recordedDay);
}
function listenCanvas(data) {
    var ctx = document.getElementById("myChart");
    var tidy = void 0,
        obey = void 0,
        courtesy = void 0,
        school = void 0,
        share = void 0;
    data.map(function (el) {
        if (el.item === "tidy") {
            tidy = el.note;
        };
        if (el.item === "obey") {
            obey = el.note;
        };
        if (el.item === "courtesy") {
            courtesy = el.note;
        };
        if (el.item === "school") {
            school = el.note;
        };
        if (el.item === "share") {
            share = el.note;
        };
    });
    console.log(tidy);
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            datasets: [{
                data: [tidy, obey, courtesy, school, share],
                backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"]
            }],
            labels: ["Ranger", "Obéïr", "Politesse", "Ecole", "Partage"]
        },
        options: {
            elements: {
                arc: {
                    borderColor: "#000000"
                }
            },
            responsive: true,
            maintainAspectRatio: true
        }
    });
}