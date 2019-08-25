"use strict";

//! Query Selectors
let wrapper = document.querySelector("#wrapper");

// ! Event Listeners
wrapper.addEventListener("click", wrapperClickHandler);

// ! Variables
let playerOne = "X";
let playerOneMoves = [];
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
function whoWon(winConditions, playerOneMoves) {
  for (let i = 0; i < winConditions.length; i++) {
    if (i === playerOneMoves) {
      console.log("playerone wins");
    } else {
      console.log("not yet");
    }
  }
  console.log("whoWon is working");
}

// winConditions.forEach(function(win) {
//   if (win.value === playerOneMoves) {
//     console.log("player one wins");
//   }
// });

// ! Click Handlers
function wrapperClickHandler(event) {
  let cell = event.target.id;

  if (playerOneTurnCount <= playerTwoTurnCount) {
    event.target.innerHTML = playerOne;
    console.log(`we are pushing ${cell} into playerOneMoves`);
    playerOneTurnCount++;
    playerOneMoves.push(parseInt(event.target.id, 10));
    console.log(`Player One Moves: ${playerOneMoves}`);
    whoWon(winConditions, playerOneMoves);
  } else {
    event.target.innerHTML = playerTwo;
    console.log(`we are pushing ${cell} into playerTwoMoves`);
    playerTwoMoves.push(parseInt(event.target.id, 10));
    console.log(`Player Two Moves: ${playerTwoMoves}`);
    playerTwoTurnCount++;
  }
}
