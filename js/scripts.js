"use strict"

const gridContainer = document.getElementById("gridContainer");
const gridSlider = document.querySelector("#sliderRange");
const sliderValue = document.querySelector("#value");
sliderValue.textContent = gridSlider.value;
const uChooseColorBtn = document.getElementById("uChooseColorBtn");
const randomColorBtn = document.getElementById("randomColorBtn");
const greyScaleColorBtn = document.getElementById("greyScaleColorBtn");
const colorWell = document.getElementById("colorWell");
let colorWellValue = "#ff0000";
let columnsAndRows = 16;
let mouseClick = false;
let activeMode = "uChooseColor";
document.body.onmousedown = () => (mouseClick = true)
document.body.onmouseup = () => (mouseClick = false)

function currentMode(newMode) {
    chosenMode(newMode);
    activeMode = newMode;
}

uChooseColorBtn.onclick = () => currentMode("uChooseColor");
greyScaleColorBtn.onclick = () => currentMode("greyScaleColor");
randomColorBtn.onclick = () => currentMode("randomColor");
eraserBtn.onclick = () => currentMode("eraser");

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

document.querySelector('button.opener')
  .addEventListener('click', 
    e => document.querySelector('.btn-invisible').click()

);

colorWell.onchange = e => {
    colorWellValue = e.target.value;
};


function chosenMode(newMode) {

};

window.onload = () => {
    createGrid(columnsAndRows, columnsAndRows);
};