
    // I want to isolate each line of smileys so will be independent
    var rows = Array.from(document.getElementsByClassName('responsability-smile')),
        rowId = 0,
        recordedData = new Array();
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
