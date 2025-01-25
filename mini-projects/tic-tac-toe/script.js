/** @format */

let currentPlayer = "X";
let array = Array(9).fill(null);
const container = document.querySelector(".container");
const grid = document.querySelector("#grid");
function handleClick(el) {
  if (array[Number(el.id)]) return;
  array[Number(el.id)] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "0" : "X";
}

function checkWinner() {
  if (
    (array[0] !== null && array[0] === array[1] && array[1] === array[2]) ||
    (array[3] !== null && array[3] === array[4] && array[3] === array[5]) ||
    (array[6] !== null && array[6] === array[7] && array[6] === array[8]) ||
    (array[0] !== null && array[0] === array[3] && array[0] === array[6]) ||
    (array[1] !== null && array[1] === array[4] && array[1] === array[7]) ||
    (array[2] !== null && array[2] === array[5] && array[2] === array[8]) ||
    (array[0] !== null && array[0] === array[4] && array[0] === array[8]) ||
    (array[2] !== null && array[2] === array[4] && array[2] === array[6])
  ) {
    const h1 = document.createElement("h1");
    h1.innerText = `Player ${currentPlayer} wins!`;

    // container.innerHTML = "<h1> Player X winds </h1>";
    // container.prepend(h1);
    container.replaceChild(h1, grid);
    setTimeout(() => {
      restoreGrid();
    }, 3000);

    return;
  }
  if (!array.includes(null)) {
    const h1 = document.createElement("h1");
    h1.innerText = "It's a tie!";
    container.replaceChild(h1, grid);
    setTimeout(() => {
      restoreGrid();
    }, 3000);
  }
}
function restoreGrid() {
  location.reload();
}
