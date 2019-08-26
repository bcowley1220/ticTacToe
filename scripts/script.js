"use strict";

//! Query Selectors
let wrapper = document.querySelector("#wrapper");
let p1TC = document.querySelector("#p1TC");
let p2TC = document.querySelector("#p2TC");
// ! Event Listeners
wrapper.addEventListener("click", wrapperClickHandler);

// ! Variables
let playerOne = "X";
let playerOneMoves = [];
let playerOneScore = 0;
let playerTwoScore = 0;
let playerTwo = "O";
let playerTwoMoves = [];
let playerOneTurnCount = 0;
let playerTwoTurnCount = 0;
let winConditions = [
  [1, 2, 3],
  [3, 2, 1],
  [1, 4, 7],
  [7, 4, 1],
  [3, 6, 9],
  [9, 6, 3],
  [7, 8, 9],
  [9, 8, 7],
  [4, 5, 6],
  [6, 5, 4],
  [7, 5, 3],
  [3, 5, 7],
  [2, 5, 8],
  [8, 5, 2],
  [1, 5, 9],
  [9, 5, 1]
];

function whoWon(winConditions, array, player, playerScore) {
  console.log(winConditions[0]);
  // console.log(array);
  for (let i = 0; i < winConditions.length; i++) {
    if (JSON.stringify(winConditions[i]) === JSON.stringify(array)) {
      console.log(`${player} wins!`);
      // console.log(`${player} score: ${playerScore}`);
      playerScore++;
      console.log(`${player} score: ${playerScore}`);
      return playerScore;
    }
  }
}

function playerTurns() {
  if (playerOneTurnCount <= playerTwoTurnCount) {
    event.target.innerHTML = playerOne;
    playerOneTurnCount++;
    p1TC.innerHTML = `PlayerOne Turns: ${playerOneTurnCount}`;
    playerOneMoves.push(parseInt(event.target.id, 10));
    whoWon(winConditions, playerOneMoves, playerOne, playerOneScore);
  } else {
    event.target.innerHTML = playerTwo;
    playerTwoMoves.push(parseInt(event.target.id, 10));
    playerTwoTurnCount++;
    p2TC.innerHTML = `PlayerTwo Turns: ${playerTwoTurnCount}`;
    whoWon(winConditions, playerTwoMoves, playerTwo, playerTwoScore);
  }
}

// ! Click Handlers
function wrapperClickHandler(event) {
  playerTurns(event)''
}
