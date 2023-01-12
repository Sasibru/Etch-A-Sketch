"use strict"

const gridContainer = document.getElementById("gridContainer");
let gridSlider = document.querySelector("#sliderRange");
let sliderValue = document.querySelector("#value");
sliderValue.textContent = gridSlider.value;

gridSlider.addEventListener("input", (event) => {
    sliderValue.textContent = event.target.value
  });

function createRows(rows, columns) {
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-columns", columns);
    for(let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
    };
};

createRows(16, 16);