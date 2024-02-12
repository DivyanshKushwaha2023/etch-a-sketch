let sketchPad = document.querySelector('#pad');


function createGrid (n) {
    for (let i = 0; i < n*n; i++){
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        sketchPad.appendChild(cell);
        cell.addEventListener('mouseover',() =>
        cell.setAttribute('class', 'used'))
        
    }
}
createGrid(16);


let newGrid = document.querySelector('#new');

newGrid.addEventListener("click", () => remOldGetNew());
function remOldGetNew() {
    let toRemove = document.querySelectorAll('.cell')
    for (let i = 0; i < toRemove.length; i++){
        sketchPad.removeChild(toRemove[i]);      
    }    
    let m = prompt("Choose number of grids(<= 100).","16");
    createGrid(m);
}


let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    let cellList = document.querySelectorAll('.used');
    for(let i = 0; i < cellList.length; i++){    
        cellList[i].setAttribute('class', 'cell');
    }
})
