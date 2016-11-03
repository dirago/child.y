window.onload = function(){
    // I want to isolate each line of smileys so will be independent
    let rows = Array.from(document.getElementsByClassName('responsability-smile')),
        rowId = 0;
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
        var svgs = Array.from(document.querySelectorAll('#' + row.id + ' > svg'));
        svgs.map(svg => {
            svg.addEventListener('click', evt => {
                svgs.map(svg => {
                    svg.classList.remove(svg.getAttribute('data-color'));
                    // svg.setAttribute('data-selected') = false;
                    console.log(svg);
                });
                let item = evt.currentTarget.getAttribute('data-item');
                let note = evt.currentTarget.getAttribute('data-note');
                console.log('item selectionné :', item);
                console.log('notation :', note);
                evt.currentTarget.classList.add(evt.currentTarget.getAttribute('data-color'));
                evt.target.dataset.selected = "true";
            });
        });
    });
    let afficheNotes = function(){
            let arr = [];

            arr.push()
    };
};
