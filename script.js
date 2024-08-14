let div = document.querySelector(".container");

let btn = document.querySelector(".pick");
let tilesPerSide = 16;

btn.addEventListener('click', () => {
    deleteGrid();
    while (true) {
        tilesPerSide = prompt("Choose number of tiles per side...(max: 100, min: 16)", " 16");
        if ((tilesPerSide <= 100) && (tilesPerSide >= 16)) {
            break;
        }
    }
    createGrid(tilesPerSide);
})


for (let i = 0; i < tilesPerSide; i++) {
    let row = document.createElement("div");
    row.className = `row row${i + 1}`;
    div.appendChild(row);
    for (let j = 0; j < tilesPerSide; j++) {
        let square = document.createElement("div");
        square.className = `square square${j + 1}`;
        square.setAttribute("style", `border: 2px solid #FBE094; width:${700 / tilesPerSide}px; height:${700 / tilesPerSide}px; padding: 0;`)
        row.appendChild(square);
    }
}



let boxes = document.querySelectorAll(".square");

[...boxes].forEach(box => {
    box.addEventListener("mouseover", () => {
        box.classList.add("hover");
    });
});


function createGrid(tilesPerSide) {
    for (let i = 0; i < tilesPerSide; i++) {
        var row = document.createElement("div");
        row.className = `row row${i + 1}`;
        div.appendChild(row);
        for (let j = 0; j < tilesPerSide; j++) {
            var square = document.createElement("div");
            square.className = `square square${j + 1}`;
            square.setAttribute("style", `border: 2px solid #FBE094; width:${700 / tilesPerSide}px; height:${700 / tilesPerSide}px; padding: 20px; padding:0;`)
            row.appendChild(square);
        }
    }
    let boxes = document.querySelectorAll(".square");

    [...boxes].forEach(box => {
        box.addEventListener("mouseover", () => {
            box.classList.add("hover");
        });
    });
}

function deleteGrid() {
    let rows = document.querySelectorAll(".row");
    [...rows].forEach(row => {
        row.remove();
    });
}

