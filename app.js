// HTML Elements
const cellDivs = document.querySelectorAll('.game-cell');
const marbleDivs = document.querySelectorAll('.marble');


// game variables
let gameIsLive = true;
let moves = [];

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
