
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
            // console.log('item selectionné :', item);
            // console.log('notation :', note);
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
        childs.map(el => {el.className += " animated fadeOut";});
        setTimeout(function(){childs.map(child =>{parent.removeChild(child)})},1000);
        setTimeout(function(){addData(recordedData, sacha, parent)}, 1000);
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
    let childName = document.createElement('h1');
    childName.innerText = "Semaine de " + child.name;
    childName.className = "animated fadeInDown"
    container.appendChild(childName);
    let notes = document.createElement('h2');
    notes.innerText = "Moyenne du jour";
    notes.className = "animated fadeIn";
    container.appendChild(notes);
    let notesEnregistrees = recordedDay.map((el) => parseInt(el.note));
    let total = notesEnregistrees.reduce((a,b) => a+b);
    let moyenne = total / recordedDay.length;
    let chart = document.createElement('div');
    chart.className = "animated fadeIn"
    chart.style.fontSize = "92px";
    chart.style.marginBottom = "30px";
    if (moyenne < 0.5){chart.style.color="red"}
    else if (moyenne < 1.5){chart.style.color="orange"}
    else {chart.style.color="green"};
    chart.innerText = moyenne + " / 2";
    container.appendChild(chart);
    // deployChart(recordedDay);
    let progressBarTitle = document.createElement('h2');
    progressBarTitle.innerText = "Progression du but fixé";
    progressBarTitle.className = "animated fadeIn"
    container.appendChild(progressBarTitle);
    let progressBar = document.createElement('div');
    progressBar.className = "animated fadeIn progress-wrap progress";
    progressBar.setAttribute('percent', '10');
    progressBar.innerHTML = '<div class="progress-bar progress"></div>';
    container.appendChild(progressBar);
    show();
}
function show(){
    // on page load...
    moveProgressBar();
    // on browser resize...
    // $(window).resize(function() {
    //     moveProgressBar();
    // });
};
// SIGNATURE PROGRESS
function moveProgressBar() {
  console.log("moveProgressBar");
    var getPercent = (document.querySelector('.progress-wrap').getAttribute('percent') / 100);
    console.log(document.querySelector('.progress-wrap').getAttribute('percent'));
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 2500;

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
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
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
            data: [
                tidy,
                obey,
                courtesy,
                school,
                share
            ],
            backgroundColor: [
                "rgba(255,99,99,.9)",
                "rgba(75,193,193,.5)",
                "rgba(255,206,85,.5)",
                "rgba(231,233,237,.5)",
                "rgba(54,162,235,.5)"
            ]
        }],
        labels: [
            "Ranger",
            "Obéïr",
            "Politesse",
            "Ecole",
            "Partage"
        ]
        },
        options: {
            elements: {
                arc: {
                    borderColor: "#000000"
                }
            },
            responsive: true,
            maintainAspectRatio: true,
            ticks: {
                max: 3,
                min: 0,
                stepSize: 0.5
            }
        }
    });
}
