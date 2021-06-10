// HTML Elements
const cellDivs = document.querySelectorAll('.game-cell');
const marbleDivs = document.querySelectorAll('.marble');
const switchDiv = document.querySelector('.switch-mode');

// game variables
let gameIsLive = true;
let fillBoardMode = true;
let filled = [];
let presets = [[3, 4, 18, 19, 20]];

// intialisation of variables
for (var i = 0; i < 7; i++) {
    var temp_arr = new Array(7);
    for (var j = 0; j < 7; j++) {
        temp_arr[j] = false;
        cellDivs[7 * i + j].classList.add(7 * i + j);
    }
    filled[i] = temp_arr;
}

// event handlers
const handleReset = () => {
    console.log('reset');
}


const handleCellClick = (e) => {
    if (!gameIsLive) {
        return;
    }

    const classList = e.target.classList;


    if (fillBoardMode) {
        if (classList[1] == 'active') {

            handleFillRequest(classList[2]);
        }
        return;
    }
}

const handleFillRequest = (cellNumber) => {
    var cell = cellDivs[cellNumber];
    // check if already filled, remove if so
    if (cell.hasChildNodes()) {
        filled[Math.floor(cellNumber / 7)][cellNumber % 7] = false;
        cell.removeChild(cell.childNodes[0]);
        return;
    }
    // creating marble element
    var marb = document.createElement("div");
    marb.className = "marble";
    marb.id = "m" + cellNumber;
    marb.draggable = "true";
    marb.addEventListener('dragstart', function (ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    });
    marb.addEventListener('click', handleMarbleClick);
    // adding to cell
    filled[Math.floor(cellNumber / 7)][cellNumber % 7] = true;
    cell.appendChild(marb);
    return;
}

const handleMarbleClick = (e) => {
    var par = e.target.parentElement;
    var cellNumber = par.classList[2];
    filled[Math.floor(cellNumber / 7)][cellNumber % 7] = false;
    par.removeChild(par.childNodes[0]);
}

const handleSwitch = (e) => {
    fillBoardMode = !fillBoardMode;
}

const fillPreset = (list) => {
    for (let index in list) {
        handleFillRequest(list[index]);
    }
}

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick);
}

for (const marbleDiv of marbleDivs) {
    marbleDiv.addEventListener('click', handleMarbleClick);
}

switchDiv.addEventListener('click', handleSwitch);

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
