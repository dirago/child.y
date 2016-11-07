
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
    let childName = document.createElement('h1');
    childName.innerText = sacha.name;
    childName.className = "animated fadeIn"
    container.appendChild(childName);
}
