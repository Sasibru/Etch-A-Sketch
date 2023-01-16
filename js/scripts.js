"use strict"

const gridContainer = document.getElementById("gridContainer");
let gridSlider = document.querySelector("#sliderRange");
let sliderValue = document.querySelector("#value");
sliderValue.textContent = gridSlider.value;
let newGridBtn = document.querySelector("#newGridBtn");
let columnsAndRows = 16;

gridSlider.addEventListener("input", (e) => {
    columnsAndRows = sliderValue.textContent = +e.target.value;
    clearGrid();
});

function createGrid(rows, columns) {
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-columns", columns);
    for(let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
    };
};

function clearGrid(){
    gridContainer.innerHTML = "";
    changeGridSize();
};

function changeGridSize() {
    createGrid(columnsAndRows, columnsAndRows);
};






window.onload = () => {
    createGrid(columnsAndRows, columnsAndRows);
};