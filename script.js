const container = document.querySelector("#container"); // Get DOM nodes.
const startBtn = document.querySelector("#start");

let gridSize = 16;
createGrid(gridSize);

startBtn.addEventListener("click", () => {
   do {
    gridSize = Math.round(prompt("Please enter your desired grid size:"));
   } while (typeof gridSize != "number");
   clearGrid();
   createGrid(gridSize);
})

function createGrid (sizeOfGrid) {
    createRows(sizeOfGrid);
    createCells(sizeOfGrid);
}

function createRows (numOfRows) {
    for (let i = 0; i < numOfRows; i++) {
        const row = document.createElement("div");
        row.classList = "rows";
        container.appendChild(row);
    }
}

function createCells (numOfCells) {
    const rows = document.querySelectorAll(".rows");
    rows.forEach(row => {
        for (let j = 0; j < numOfCells; j++) {
            const cell = document.createElement("div");
            cell.classList = "cells";
            row.appendChild(cell);
        }
    }) 
}

function clearGrid () {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

container.addEventListener("mouseover", (event) => {
    const cell = event.target;
    if (cell.classList.contains("cells")) {
        changeBackgroundColor(cell, "black");
    }
});

function changeBackgroundColor (cell, newColor) {
    cell.style.backgroundColor = newColor;
}