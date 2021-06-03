// HTML Elements
const cellDivs = document.querySelectorAll('.game-cell');

// game variables
let gameIsLive = true;

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
    if (classList.length == 2 && classList[2] == 'active') {
        classList.add('selected');
    }
}

// event listeners 
// for (const cellDiv of cellDivs) {
//     cellDiv.addEventListener('click', handleCellClick);
// }
for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick);
}
