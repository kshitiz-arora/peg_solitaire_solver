// HTML Elements
const cellDivs = document.querySelectorAll('.game-cell');
const marbleDivs = document.querySelectorAll('.marble');


// game variables
let gameIsLive = true;
let filled = [];
for (var i = 0; i < 7; i++) {
    var temp_arr = new Array(7);
    for (var j = 0; j < 7; j++) {
        temp_arr[j] = false;
    }
    filled[i] = temp_arr;
}

// event handlers
const handleReset = () => {
    console.log('reset');
}


const handleCellClick = (e) => {
    console.log('clicked');
    if (!gameIsLive) {
        return;
    }
    const classList = e.target.classList;
    classList.add('from');

const addMarbles = (list) => {
    
}

}

// event listeners 
// for (const cellDiv of cellDivs) {
//     cellDiv.addEventListener('click', handleCellClick);
// }
// for (const cellDiv of cellDivs) {
//     cellDiv.addEventListener('click', handleCellClick);
// }

for (const marbleDiv of marbleDivs) {
    marbleDiv.addEventListener('click', handleCellClick);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    console.log(ev.target.childNodes);
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


// var para = document.createElement("div");
// para.className = "marble";
// para.id="m1"; 
// para.draggable="true";
// //para.ondragstart="drag(event)";
// para.addEventListener('ondragstart', function() {drag(ev)}, true);
// var node = document.createTextNode("This is new.");
// para.appendChild(node);
// var element = document.getElementById("div1");
// element.appendChild(para);