let drawingSection = document.querySelector(".drawing-section");
drawingSection.style.gridTemplateRows = "repeat(16, 1fr)"
drawingSection.style.gridTemplateColumns = "repeat(16, 1fr)"

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "drawing-div");
    newDiv.style.border = "1px solid black";
    drawingSection.appendChild(newDiv);
}

const divs = document.querySelectorAll(".drawing-div");

for (let i = 0; i < 256; i++) {
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
    for (let i = 0; i < 256; i++) {
        divs[i].style.backgroundColor = "white";
    }
})

