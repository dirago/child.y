let relativeName = document.querySelector('#relative').innerText;
let childFirstname = document.querySelector('#child').innerText;
const child = new Child(childFirstname);
console.log(child);
const family = new Family(relativeName);
console.log(family);
// I want to isolate each line of smileys so will be independent
var rows = Array.from(document.getElementsByClassName('responsability-smile')),
    rowId = 0,
    recordedData = new Array(),
    submitBtn = document.querySelector('#submit-btn'),
    main = document.querySelector('main')[0];
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
            addData(recordedData, child, parent)
        }, 1000);
    }
});
function addData(data, child, container){
    let date = new Date();
    let day = date.toLocaleDateString();
    window.scroll(0,0);
    setTimeout(function(){
        document.querySelector('.subtitle').style.display = "none";
        container.style.width = "100vw";
        container.style.margin = "0";
        container.style.padding = "40px";
    }, 1000);
    var recordedDay = data.map( el =>{
        let note = new Note(day, child.name, el.item, el.note);
        return note;
    });
    let childTitle = document.createElement('h1');
    childTitle.innerText = "Semaine de " + child.name;
    childTitle.className = "animated fadeInDown"
    container.appendChild(childTitle);
    launchWeek(container, recordedDay, day, child);
    // let notes = document.createElement('h2');
    // notes.innerText = "Moyenne du jour";
    // notes.className = "animated fadeIn";
    // container.appendChild(notes);
    // let notesEnregistrees = recordedDay.map((el) => parseInt(el.note));
    // let total = notesEnregistrees.reduce((a,b) => a+b);
    // let moyenne = total / recordedDay.length;
    // // Création de la progress bar
    // let chart = document.createElement('div');
    // chart.className = "animated fadeIn"
    // chart.style.fontSize = "92px";
    // chart.style.marginBottom = "30px";
    // if (moyenne < 0.5){chart.style.color="red"}
    // else if (moyenne < 1.5){chart.style.color="orange"}
    // else {chart.style.color="green"};
    // chart.innerText = moyenne + " / 2";
    // container.appendChild(chart);
    // let percent = moyenne * 10;
    // console.log(percent);
    // setProgressBarElement(container, percent);
}



function launchWeek(container, data, day, child){
    let note = child.setNote(data, day);
    console.log(note);
    data.map(e => console.log(e));
}




function setProgressBarElement(container, percent){
    var progressBarTitle = document.createElement('h2');
    progressBarTitle.innerText = "Progression du but fixé";
    progressBarTitle.className = "animated fadeIn"
    container.appendChild(progressBarTitle);
    var progressBar = document.createElement('div');
    progressBar.className = "animated fadeIn progress-wrap progress";
    progressBar.setAttribute('percent', percent);
    progressBar.innerHTML = '<div class="progress-bar progress"></div>';
    container.appendChild(progressBar);
    moveProgressBar(progressBar);
}
// SIGNATURE PROGRESS
function moveProgressBar(bar) {
    var getPercent = (bar.getAttribute('percent') / 100);
    console.log(bar.getAttribute('percent'));
    var getProgressWrapWidth = bar.width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 2500;
    $('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
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
