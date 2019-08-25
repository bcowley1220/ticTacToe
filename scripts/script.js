"use strict";

// ! Click Handlers
function wrapperClickHandler(event) {
  console.log(event.target.id);
  let cell = event.target.id;
  if (playerOneTurnCount <= playerTwoTurnCount) {
    event.target.innerHTML = playerOne;
    // let cell = event.target.id;
    console.log(`we are pushing ${cell} into playerOneMoves`);
    playerOneTurnCount++;
    console.log(playerOneTurnCount);
    playerOneMoves.push(parseInt(event.target.id, 10));
    console.log(`Player One Moves: ${playerOneMoves}`);
    winConditions.forEach(function(win) {
      if (win === playerOneMoves) {
        console.log("player one wins");
      }
    });
  } else {
    event.target.innerHTML = playerTwo;
    console.log(`we are pushing ${cell} into playerTwoMoves`);
    playerTwoMoves.push(parseInt(event.target.id, 10));
    console.log(`Player Two Moves: ${playerTwoMoves}`);
    playerTwoTurnCount++;
    console.log(playerTwoTurnCount);
  }
}

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

// function whoWins() {
//   for (let win of winConditions) {
//     if (playerOneMoves || playerTwoMoves === win) {
//       console.log("Game is over.");
//     }
//   }
// }
