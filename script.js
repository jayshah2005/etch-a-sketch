// New grid button
const newGridButton = document.querySelector("#newGridButton");
newGridButton.addEventListener('click', () => {
    document.querySelector('.canvas').remove();
    createCanvas(prompt("Number of squares per side in the new grid: ", 16))
})

// Hover events
function giveEvent(div) {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red'
    })
}

// Functions to create canvas a canvas in the backend
function createCanvas(squaresPerSides) {
    const div = document.createElement("div");
    div.className = 'canvas'
    for(column = 0; column < squaresPerSides; column++) {
        createRow(div, squaresPerSides)
    }
    document.querySelector('#body').appendChild(div);
}

function createRow(parent, squaresPerSides) {
    const div = document.createElement("div");
    div.className = 'canvasRow'
    for(row = 0; row < squaresPerSides; row++){
        createDiv(div, squaresPerSides);
    }
    parent.appendChild(div);
}

function createDiv(parent, squaresPerSides) {
    const sideLenght = 500/squaresPerSides;
    const div = document.createElement("div");
    div.className = 'canvasDiv'
    div.style.height = `${sideLenght}px`;
    div.style.width = `${sideLenght}px`;
    giveEvent(div);
    parent.appendChild(div);
}

createCanvas(16);