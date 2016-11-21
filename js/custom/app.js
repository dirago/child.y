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
const family = new Family(relativeName);
var child = new Child();
console.log(family);
selectChoiceInput.addEventListener('change', e => {
    if (e.target.value != "nochoice"){
        child.name = e.target.value;
        console.log(child);
    }
});
// I create IDs for each generated line of smiles
rows.map(el => {
    if (el.id != null){
        rowId++;
        el.id = "r" + rowId;
    } else {
        rowId = 1;
        el.id = "r" + rowId;
    };
});
rows.map(row => {
    let svgs = Array.from(document.querySelectorAll('#' + row.id + ' > svg'));
    svgs.map(svg => {
        svg.addEventListener('click', evt => {
            svgs.map(svg => {
                svg.classList.remove(svg.getAttribute('data-color'));
                svg.setAttribute('data-selected', '')
            });
            let item = evt.currentTarget.getAttribute('data-item');
            let note = evt.currentTarget.getAttribute('data-note');
            evt.currentTarget.classList.add(evt.currentTarget.getAttribute('data-color'));
            evt.currentTarget.setAttribute('data-selected', true);
            setNotes();
        });
    });
});
function onlySelected(e){
    return e.getAttribute('data-selected') === "true";
};
function setNotes(){
    let svgs = rows.map(row => {
        return Array.from(document.querySelectorAll('#' + row.id + ' > svg'));
    });
    svgs.map(svg => {
        let filter = svg.filter(onlySelected);
        filter.map(el => {
            let check = recordedData.filter(function(data){
                return data.item === el.getAttribute('data-item');
            });
            if (check.length === 0){
                recordedData.push({
                    "item": el.getAttribute('data-item'),
                    "note": el.getAttribute('data-note')
                });
            } else {
                for (let i = 0; i < recordedData.length; i++){
                    if (recordedData[i].item === el.getAttribute('data-item')){
                        recordedData[i].note = el.getAttribute('data-note');
                    };
                };
            };
        });
    });
    return recordedData;
};
// Validation des notes
submitBtn.addEventListener('click', evt => {
    let parent = evt.target.parentNode,
        errorElt = document.querySelector('#error');
    if (selectChild.value === "nochoice") {
        if (errorElt !== null){parent.removeChild(errorElt);}
        let error = document.createElement('span');
        error.id = "error";
        error.className = "error-message";
        error.innerText = "Vous devez choisir l'enfant à noter !";
        parent.appendChild(error);
    } else {
        if (recordedData.length === rows.length - 1){
            if (errorElt !== null){parent.removeChild(errorElt);}
            let error = document.createElement('span');
            error.id = "error";
            error.className = "error-message";
            error.innerText = "Il manque une note !";
            parent.appendChild(error);
        } else if (recordedData.length < rows.length) {
            if (errorElt !== null){parent.removeChild(errorElt);}
            let error = document.createElement('span');
            error.id = "error";
            error.className = "error-message";
            error.innerText = "Il manque plusieurs notes !";
            parent.appendChild(error);
        } else {
            let childs = Array.from(parent.childNodes);
            childs.map(el => {
                el.className += " animated fadeOut";
            });
            setTimeout(function(){
                childs.map(child =>{
                    parent.removeChild(child)
                })
            },1000);
            setTimeout(function(){
                addData(recordedData, child, parent, day)
            }, 1000);
        }
    }
});
function addData(data, child, container, day){
    window.scroll(0,0);
    document.querySelector('.subtitle').className = "hide";
    container.style.padding = "0";
    container.style.margin = "0";
    container.style.width = "100vw";
    if ($(window).width() > 1000){
        container.style.height = "calc(100vh - 120px)";
        container.style.flexDirection = "row";
    } else {
        container.style.height = "1000px";
    }
    var recordedDay = data.map( el =>{
        let note = new Note(day, child.name, el.item, el.note);
        return note;
    });
    let notesEnregistrees = recordedDay.map((el) => parseInt(el.note));
    let total = notesEnregistrees.reduce((a,b) => a+b);
    let moyenne = total / recordedDay.length;
    console.log('total :', total);
    console.log('moyenne :', moyenne);
    let percent = (moyenne * 10) + 27;
    let percent2 = (moyenne * 10) + 48;
    setTimeout(function(){
        let calendar = document.createElement('div');
        calendar.id = "calendar";
        container.appendChild(calendar);
        let divBar = document.createElement('div');
        divBar.className = "col";
        container.appendChild(divBar)
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

function deployCalendar(m){
    var calendar = new Calendar('#calendar');
    let nbs = Array.from(document.querySelectorAll('.day-number'));
    let weekToHide = document.querySelector('.month').children[0];
    weekToHide.className = "hide";
    for (let i = 0; i < 31; i++) {
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
            let random = Math.floor(Math.random() * (3) + 1)
            switch (random){
                case 1: nbs[i].className = "day-number day-number--orange"; break;
                case 2: nbs[i].className = "day-number day-number--red"; break;
                case 3: nbs[i].className = "day-number day-number--green"; break;
                default: "error";
            }
        }
    }
}

function launchWeek(container, data, day, child){
    child.setNote(data, day);
    data.map(e => console.log(e));
}


function setProgressBarElement(container, percent, percent2){
    let name = document.createElement('h1');
    name.innerText = "Bilan de " + child.name;
    name.style.margin = "0 0 30px 0";
    container.appendChild(name);

    let bar = new ProgressBar(percent, "Gagner un cadeau", "progress-wrap", "progress-bar");
    bar.render(container, 1500);
    let bar2 = new ProgressBar(percent2, "Gagner une responsabilité", "progress-wrap2", "progress-bar2");
    bar2.render(container, 2000);
}


function deployChart(data){
    var ctx = document.getElementById("myChart");
    let tidy, obey, courtesy, school, share;
    data.map( el => {
        if (el.item === "tidy"){tidy = el.note;};
        if (el.item === "obey"){obey = el.note;};
        if (el.item === "courtesy"){courtesy = el.note;};
        if (el.item === "school"){school = el.note;};
        if (el.item === "share"){share = el.note;};
    });
}


function toISODate(date){
    return date.toISOString().split('T')[0];
}


class ProgressBar {

    constructor(percent, text, wrapClass, barClass) {
        this.percent = percent;
        this.wrapClass = wrapClass;
        this.barClass = barClass;
        this.title = document.createElement('h2');
        this.title.innerText = text;
        this.title.className = "animated fadeIn start";
        this.bar = document.createElement('div');
        this.bar.setAttribute('percent', percent);
        this.bar.className = "animated fadeIn "+this.wrapClass+" progress";
        this.bar.innerHTML = '<div class="'+this.barClass+' progress">'+percent+' %</div>';
    }

    render(container, animationLength){
        container.appendChild(this.title);
        container.appendChild(this.bar);
        let getPercent = (this.bar.getAttribute('percent') / 100);
        console.log(this.bar.getAttribute('percent'));
        let getProgressWrapWidth = $('.'+this.barClass).width();
        let progressTotal = (getPercent * getProgressWrapWidth);
        $('.'+this.barClass).stop().animate({
            left: progressTotal
        }, animationLength);
    }

}
