// New grid button
const newGridButton = document.querySelector("#newGridButton");
newGridButton.addEventListener('click', () => {

    const squaresPerSides = prompt("Number of squares per side in the new grid: ")

    while(squaresPerSides > 100) {
        squaresPerSides = prompt("Please enter a number less than 100: ")
    }

    document.querySelector('.canvas').remove();
    createCanvas(squaresPerSides)
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