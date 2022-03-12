let gridSize = 16;
let drawingSection = document.querySelector(".drawing-section");
drawingSection.style.gridTemplateRows = "repeat(" + gridSize + ", 1fr)";
drawingSection.style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)";
for (let i = 0; i < (gridSize * gridSize); i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "drawing-div");
    drawingSection.appendChild(newDiv);
}


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function clearGrid() {
    drawingSection.innerHTML = "";
}

function changeGrid(size) {
    clearGrid();
    drawingSection.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    drawingSection.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";

    for (let i = 0; i < gridSize * gridSize; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "drawing-div");
        drawingSection.appendChild(newDiv);
        divs = document.querySelectorAll(".drawing-div");
    }

    for (let i = 0; i < (gridSize * gridSize); i++) {
        divs[i].addEventListener("mouseover", changeBlack);
        divs[i].addEventListener("mousedown", changeBlack);
    }

}

let divs = document.querySelectorAll(".drawing-div");

for (let i = 0; i < (gridSize * gridSize); i++) {
    divs[i].addEventListener("mouseover", changeBlack);
    divs[i].addEventListener("mousedown", changeBlack);
}



function changeBlack(e) {
    if (e.type === "mouseover" && !mouseDown)
        return;
    
    //if they're both active, change the color to black.
    e.target.style.backgroundColor = "black";
}



const clearButton = document.querySelector(".clear-mode");
clearButton.addEventListener("click", () => {
    for (let i = 0; i < gridSize * gridSize; i++) {
        divs[i].style.backgroundColor = "white";
    }
})


// slider js taken from w3 schools example sliders
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value + "x" + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value + "x" + slider.value;
    gridSize = this.value;
    changeGrid(this.value);
}

// window.onload = () => {
//     setupGrid(gridSize);
// }