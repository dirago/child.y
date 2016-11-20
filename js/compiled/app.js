'use strict';

var rows = Array.from(document.getElementsByClassName('responsability-smile')),
    rowId = 0,
    recordedData = new Array(),
    submitBtn = document.querySelector('#submit-btn'),
    selectChoiceInput = document.querySelector('#selectChild'),
    main = document.querySelector('main')[0],
    date = new Date(),
    day = date.toLocaleDateString(),
    dayISO = toISODate(date);
// Je crée la variable "famille" puis la/les variable/s enfant/s dynamiquement
var relativeName = document.querySelector('#relative').innerText;
var family = new Family(relativeName);
var child = new Child();
console.log(family);
selectChoiceInput.addEventListener('change', function (e) {
    if (e.target.value != "nochoice") {
        child.name = e.target.value;
        console.log(child);
    }
});
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
// Validation des notes
submitBtn.addEventListener('click', function (evt) {
    var parent = evt.target.parentNode,
        errorElt = document.querySelector('#error');
    if (selectChild.value === "nochoice") {
        if (errorElt !== null) {
            parent.removeChild(errorElt);
        }
        var error = document.createElement('span');
        error.id = "error";
        error.className = "error-message";
        error.innerText = "Vous devez choisir l'enfant à noter !";
        parent.appendChild(error);
    } else {
        if (recordedData.length === rows.length - 1) {
            if (errorElt !== null) {
                parent.removeChild(errorElt);
            }
            var _error = document.createElement('span');
            _error.id = "error";
            _error.className = "error-message";
            _error.innerText = "Il manque une note !";
            parent.appendChild(_error);
        } else if (recordedData.length < rows.length) {
            if (errorElt !== null) {
                parent.removeChild(errorElt);
            }
            var _error2 = document.createElement('span');
            _error2.id = "error";
            _error2.className = "error-message";
            _error2.innerText = "Il manque plusieurs notes !";
            parent.appendChild(_error2);
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
                    addData(recordedData, child, parent, day);
                }, 1000);
            })();
        }
    }
});
function addData(data, child, container, day) {
    window.scroll(0, 0);
    document.querySelector('.subtitle').className = "hide";
    container.style.padding = "0";
    container.style.margin = "0";
    container.style.width = "100vw";
    if ($(window).width() > 1000) {
        container.style.height = "calc(100vh - 120px)";
        container.style.flexDirection = "row";
    } else {
        container.style.height = "1000px";
    }
    var recordedDay = data.map(function (el) {
        var note = new Note(day, child.name, el.item, el.note);
        return note;
    });
    var notesEnregistrees = recordedDay.map(function (el) {
        return parseInt(el.note);
    });
    var total = notesEnregistrees.reduce(function (a, b) {
        return a + b;
    });
    var moyenne = total / recordedDay.length;
    console.log('total :', total);
    console.log('moyenne :', moyenne);
    var percent = moyenne * 10 + 27;
    var percent2 = moyenne * 10 + 48;
    setTimeout(function () {
        var calendar = document.createElement('div');
        calendar.id = "calendar";
        container.appendChild(calendar);
        var divBar = document.createElement('div');
        divBar.className = "col";
        container.appendChild(divBar);
        deployCalendar(moyenne);
        setProgressBarElement(divBar, percent, percent2);
    }, 2000);
    // launchWeek(container, recordedDay, day, child);

    // Création de la progress bar
    // let chart = document.createElement('div');
    // chart.className = "animated fadeIn"
    // chart.style.fontSize = "92px";
    // chart.style.marginBottom = "30px";
    // if (moyenne < 0.5){chart.style.color="red"}
    // else if (moyenne < 1.5){chart.style.color="orange"}
    // else {chart.style.color="green"};
    // chart.innerText = moyenne + " / 2";
    // container.appendChild(chart);
}

function deployCalendar(m) {
    var calendar = new Calendar('#calendar');
    var nbs = Array.from(document.querySelectorAll('.day-number'));
    var weekToHide = document.querySelector('.month').children[0];
    weekToHide.className = "hide";
    for (var i = 0; i < 31; i++) {
        if (nbs[i].innerText == new Date().getDate()) {
            if (m < 0.2) {
                nbs[i].className = "day-number day-number--red strong";
                return;
            } else if (m < 1.5) {
                nbs[i].className = "day-number day-number--orange strong";
                return;
            } else {
                nbs[i].className = "day-number day-number--green strong";
                return;
            }
        }
        if (nbs[i].innerText < new Date().getDate()) {
            var random = Math.floor(Math.random() * 3 + 1);
            switch (random) {
                case 1:
                    nbs[i].className = "day-number day-number--orange";break;
                case 2:
                    nbs[i].className = "day-number day-number--red";break;
                case 3:
                    nbs[i].className = "day-number day-number--green";break;
                default:
                    "error";
            }
        }
    }
}

function launchWeek(container, data, day, child) {
    child.setNote(data, day);
    data.map(function (e) {
        return console.log(e);
    });
}

function setProgressBarElement(container, percent, percent2) {
    var name = document.createElement('h1');
    name.innerText = "Bilan de " + child.name;
    name.style.margin = "0 0 30px 0";
    container.appendChild(name);
    var progressBarTitle = document.createElement('h2');
    progressBarTitle.innerText = "Gagner un cadeau";
    progressBarTitle.className = "animated fadeIn start";
    container.appendChild(progressBarTitle);
    var progressBar = document.createElement('div');
    progressBar.className = "animated fadeIn progress-wrap progress";
    progressBar.setAttribute('percent', percent);
    progressBar.innerHTML = '<div class="progress-bar progress">' + percent + ' %</div>';
    container.appendChild(progressBar);
    var getPercent = progressBar.getAttribute('percent') / 100;
    console.log(progressBar.getAttribute('percent'));
    var getProgressWrapWidth = $('.progress-bar').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 1500;
    $('.progress-bar').stop().animate({
        left: progressTotal

    }, animationLength);

    var progressBarTitle2 = document.createElement('h2');
    progressBarTitle2.innerText = "Gagner une responsabilité";
    progressBarTitle2.className = "animated fadeIn start";
    container.appendChild(progressBarTitle2);
    var progressBar2 = document.createElement('div');
    progressBar2.className = "animated fadeIn progress-wrap2 progress";
    progressBar2.setAttribute('percent', percent2);
    progressBar2.innerHTML = '<div class="progress-bar2 progress">' + percent2 + ' %</div>';
    container.appendChild(progressBar2);
    var getPercent2 = progressBar2.getAttribute('percent') / 100;
    console.log(progressBar2.getAttribute('percent'));
    var getProgressWrapWidth2 = $('.progress-bar2').width();
    var progressTotal2 = getPercent2 * getProgressWrapWidth2;
    var animationLength2 = 2000;
    $('.progress-bar2').stop().animate({
        left: progressTotal2

    }, animationLength2);
}
// SIGNATURE PROGRESS
function moveProgressBar(bar) {}
function deployChart(data) {
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
}

function toISODate(date) {
    return date.toISOString().split('T')[0];
}