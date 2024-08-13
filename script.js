let div = document.querySelector(".container");




for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.className = `row row${i+1}`;
    div.appendChild(row);
    for (let j = 0; j < 16; j++) {
        let square = document.createElement("div");
        square.className = `square square${j+1}`;
        row.appendChild(square);
    }
}
