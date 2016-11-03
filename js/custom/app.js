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
        let svgs = Array.from(document.querySelectorAll('#' + row.id + ' > svg'));
        svgs.map(svg => {
            svg.addEventListener('click', evt => {
                svgs.map(svg => {
                    svg.classList.remove(svg.getAttribute('data-color'));
                });
                let item = evt.currentTarget.getAttribute('data-item');
                console.log('item :', item);
                evt.currentTarget.classList.add(evt.currentTarget.getAttribute('data-color'));
                console.log(evt.currentTarget.getAttribute('data-color'));
            });
        });
    });
        // let svgInObj = document.getElementById('test').contentDocument;
        // svgInObj.addEventListener('click', e => {
        //     console.log(e.currentTarget.childNodes[0].getAttribute('data-color'));
        // });
};
