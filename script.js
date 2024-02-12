let sketchPad = document.querySelector('#pad');
let col = document.querySelectorAll('col');

createCell(20);

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



let newPad = document.querySelector('#new');

newPad.addEventListener("click", () => remOldGetNew());
function remOldGetNew() {
    clearUsedCells();
    let toRemove = document.querySelectorAll('.rows')
    for (let i = 0; i < toRemove.length; i++){
        sketchPad.removeChild(toRemove[i]);      
    }    
    let m = prompt("Choose number of squares per side.(<=100)","16");
    if(m>100){
        alert("Choose again,must be less than or equal to 100.")
    } else{
        createCell(m);
    }
        
}


let reset = document.querySelector('#reset');
reset.addEventListener('click',() => clearUsedCells());

function clearUsedCells(){
    let cellList = document.querySelectorAll('.used');
    for(let i = 0; i < cellList.length; i++){    
        cellList[i].setAttribute('class', 'cells');
    }
}
