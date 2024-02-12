let sketchPad = document.querySelector('#pad');
let col = document.querySelectorAll('col');

createCell(16);

function createCell(n){
    //for rows
    for (let i = 0; i < n; i++){
        let rows = document.createElement('div');
        rows.setAttribute('class', 'rows');
        sketchPad.appendChild(rows);
        //for cells per rows
        for(let j = 0; j < n; j++){
            let cells = document.createElement('div');
            cells.setAttribute('class', 'cells')
            rows.appendChild(cells);
            cells.addEventListener('mouseover',() =>
            cells.setAttribute('class', 'used'))
        }
    }
}



let newGrid = document.querySelector('#new');

newGrid.addEventListener("click", () => remOldGetNew());
function remOldGetNew() {
    clearUsed();
    let toRemove = document.querySelectorAll('.rows')
    for (let i = 0; i < toRemove.length; i++){
        sketchPad.removeChild(toRemove[i]);      
    }    
    let m = prompt("Choose number of cells per row.","16");
    createCell(m);
}


let reset = document.querySelector('#reset');
reset.addEventListener('click',() => clearUsed());

function clearUsed(){
    let colList = document.querySelectorAll('.used');
    for(let i = 0; i < colList.length; i++){    
        colList[i].setAttribute('class', 'cells');
    }
}
