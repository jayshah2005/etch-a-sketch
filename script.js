function createCanvas() {
    const div = document.createElement("div");
    div.className = 'canvas'
    for(column = 0; column < 16; column++) {
        createRow(div)
    }
    document.body.appendChild(div);
}

function createRow(parent) {
    const div = document.createElement("div");
    div.className = 'canvasRow'
    for(row = 0; row < 16; row++){
        createDiv(div);
    }
    parent.appendChild(div);
}

function createDiv(parent) {
    const div = document.createElement("div");
    div.className = 'canvasDiv'
    parent.appendChild(div);
}

createCanvas();