const container = document.querySelector("#container"); // Get DOM nodes.
const buttons = document.querySelector("#selectors");
const sizeBtn = document.querySelector("#sizer");
const clearBtn = document.querySelector("#clear");
const blackBtn = document.querySelector("#black");
const rainbowBtn = document.querySelector("#rainbow");
const colorBtn = document.querySelector("#colorPicker");
const eraseBtn = document.querySelector("#eraser");

const backgroundColor = "white"; // Set colors
let brushColor = "black";
let colorPickerValue ="#910000";
const rainbowColorsArr = ["#629677", "#495D63", "#FF6B6B", "#F9DB6D", "#A1C6EA"]

const gridSizeArr = [10, 15, 20, 25, 30]; // Initialize grid
let gridSize = gridSizeArr[0];
createGrid(gridSize);

sizeBtn.addEventListener("click", () => { // Change grid size, based on the next size in the array.
    gridSize = nextGridSize();
    deleteGrid();
    createGrid(gridSize);
})

blackBtn.addEventListener("click", () => {brushColor = "black";});
rainbowBtn.addEventListener("click", () => {brushColor = "rainbow";});
colorBtn.addEventListener("click", () => {brushColor = colorPickerValue;});
eraseBtn.addEventListener("click", () => {brushColor = "white";});

clearBtn.addEventListener("click", () => { // Clear grid
    const cells = document.querySelectorAll(".cells");
    cells.forEach(cell => {changeBackgroundColor(cell, backgroundColor)});
})

function nextGridSize () {
    const currentIndex = gridSizeArr.indexOf(gridSize);
    if (currentIndex < gridSizeArr.length-1) {return gridSizeArr[currentIndex + 1];}
    else {return gridSizeArr[0];}
}

function deleteGrid () {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function createGrid (sizeOfGrid) {
    createRows(sizeOfGrid);
    createCells(sizeOfGrid);
    const cells = document.querySelectorAll(".cells");
    cells.forEach(cell => {changeBackgroundColor(cell, backgroundColor)});
}

function createRows (numOfRows) { // createGrid helper function
    for (let i = 0; i < numOfRows; i++) {
        const row = document.createElement("div");
        row.classList = "rows";
        container.appendChild(row);
    }
}

function createCells (numOfCells) { // createGrid helper function
    const rows = document.querySelectorAll(".rows");
    rows.forEach(row => {
        for (let j = 0; j < numOfCells; j++) {
            const cell = document.createElement("div");
            cell.classList = "cells";
            row.appendChild(cell);
        }
    }) 
}

container.addEventListener("mouseover", (event) => { // Detect mouse location and call changeBackgroundColor helper function
    const cell = event.target;
    if (cell.classList.contains("cells")) {
        changeBackgroundColor(cell, brushColor);
    }
});

function changeBackgroundColor (cell, newColor) {
    if (newColor === "rainbow") {cell.style.backgroundColor = getRainbowColor()}
    else {cell.style.backgroundColor = newColor;}
}

function getRainbowColor () {
    const randomIndex = Math.floor(Math.random() * 5); // Get a random index number 0-4
    return rainbowColorsArr[randomIndex];
}

colorPicker.addEventListener("input", (event) => { // Detect Color Picker change
    colorPickerValue = event.target.value;
    brushColor = colorPickerValue;
}, false);
