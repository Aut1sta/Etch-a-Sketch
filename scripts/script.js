const gridContainer = document.querySelector('#grid-container');
const blackBtn = document.querySelector('#blackBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const clearBtn = document.querySelector('#clearBtn');
const sizeInput = document.querySelector('#sizeInput');
let pencilColor = 'var(--primary-dark)';
// Create Grid

function createGrid(num){
    for(let i = 1; i <= num ** 2; i++){
        let size = 400/num;
        let cell = document.createElement('div');
        cell.style.cssText = `height: ${size}; width: ${size}`;
        gridContainer.style.cssText = `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr)`;
        gridContainer.append(cell);
    }
}

createGrid(16)

// Changing grid background color
gridContainer.addEventListener('mouseover', changeColor)

function changeColor(event){
    event.target.style.backgroundColor = pencilColor
}

function blackColor(){
    pencilColor = 'var(--primary-dark)'
}

function eraser(){
    pencilColor = 'var(--secundary-light)'
}

// Clear function

function clearGrid(){
    let gridItem = gridContainer.children;
    for(let i = 0; i < gridItem.length; i++){
        gridItem[i].style.backgroundColor = 'var(--secundary-light)'
    }
}

// Delete grid

function deleteGrid(){
    let gridItem = gridContainer.children;
    for(let i = 0; i <= gridItem.length; i++){
        gridItem[i].remove()
    }
}

// Events

blackBtn.addEventListener('click', blackColor)
eraserBtn.addEventListener('click', eraser)
clearBtn.addEventListener('click', clearGrid)