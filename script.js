let div = document.querySelector(".container");




for (let i = 0; i < 16; i++) {
    var row = document.createElement("div");
    row.className = `row row${i + 1}`;
    div.appendChild(row);
    for (let j = 0; j < 16; j++) {
        var square = document.createElement("div");
        square.className = `square square${j + 1}`;
        row.appendChild(square);
    }
}

let boxes = document.querySelectorAll(".square");

[...boxes].forEach(box => {
    box.addEventListener("mouseover", () => {
        box.classList.add("hover");
    });
});

