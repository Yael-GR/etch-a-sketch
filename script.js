const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;
const container = document.querySelector("#container");
console.log(container);

createGrid(GRID_WIDTH, GRID_HEIGHT);

function createGrid (width, height) {
    createRows(height);
    createCells(width);
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