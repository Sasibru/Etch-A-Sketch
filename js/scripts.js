"use strict"

const gridContainer = document.getElementById("gridContainer");
const gridSlider = document.querySelector("#sliderRange");
// const sliderValue = document.querySelector("#value");
const sliderValueText = document.querySelector("#sliderValueText");
const uChooseColorBtn = document.getElementById("uChooseColorBtn");
const randomColorBtn = document.getElementById("randomColorBtn");
const clearBtn = document.getElementById("clearBtn");
const eraserBtn = document.getElementById("eraserBtn");
const colorWell = document.getElementById("colorWell");
let colorWellValue = "#ff0000";
const eraserValue = "#ffffff";
let columnsAndRows = 16;
let mouseClick = false;
let activeMode = "uChooseColor";

document.body.onmousedown = () => (mouseClick = true);
document.body.onmouseup = () => (mouseClick = false);

uChooseColorBtn.onclick = () => currentMode("uChooseColor");
clearBtn.onclick = () => clearGrid();
randomColorBtn.onclick = () => currentMode("randomColor");
eraserBtn.onclick = () => currentMode("eraser");

gridSlider.addEventListener("input", (e) => {
    columnsAndRows = gridSlider.textContent = +e.target.value;
    sliderValueText.textContent = `${gridSlider.value} x ${gridSlider.value}`;
    clearGrid();
});

function currentMode(newMode) {
    activeMode = newMode;


    if(activeMode === "uChooseColor"){
        uChooseColorBtn.classList.add("active");
        randomColorBtn.classList.remove("active");
        eraserBtn.classList.remove("active");
    }else if(activeMode === "randomColor") {
        randomColorBtn.classList.add("active");
        uChooseColorBtn.classList.remove("active");
        eraserBtn.classList.remove("active");
    }else if(activeMode === "eraser") {
        eraserBtn.classList.add("active");
        uChooseColorBtn.classList.remove("active");
        randomColorBtn.classList.remove("active");
    };
};

function createGrid(rows, columns) {
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-columns", columns);
    for(let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", chosenMode)
        cell.addEventListener("mousedown", chosenMode)
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

colorWell.onchange = (e) => {
    colorWellValue = e.target.value;
};


function chosenMode(newMode) {
    if(newMode.type === "mouseover" && !mouseClick) return

    if(activeMode === "uChooseColor"){
        newMode.target.style.backgroundColor = colorWellValue;
    }else if(activeMode === "randomColor") {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        newMode.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    }else if(activeMode === "eraser") {
        newMode.target.style.backgroundColor = eraserValue;
    }

};

window.onload = () => {
    createGrid(columnsAndRows, columnsAndRows);
    uChooseColorBtn.classList.add("active");
};