let drawingSection = document.querySelector(".drawing-section");
drawingSection.style.gridTemplateRows = "repeat(16, 1fr)"
drawingSection.style.gridTemplateColumns = "repeat(16, 1fr)"

for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.style.border = "1px solid black";
    drawingSection.appendChild(newDiv);
}
