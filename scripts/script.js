"use strict";

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

function whoWon(winConditions, array, player, playerScore, playerSP) {
  console.log(winConditions[0]);
  for (let i = 0; i < winConditions.length; i++) {
    if (JSON.stringify(winConditions[i]) === JSON.stringify(array)) {
      alert(`${player} wins!`);
      playerScore++;
      console.log(`${player} score: ${playerScore}`);
      playerSP.innerHTML = `${player} Score ${playerScore}`;
      // return playerScore;
      confirm("play again"){

      };
    }
  }
}

function playerTurns() {
  if (playerOneTurnCount <= playerTwoTurnCount) {
    if (event.target.classList.contains("clicked")) {
      alert("try again wanker");
    } else {
      event.target.innerHTML = playerOne;
      event.target.classList.add("clicked");
      playerOneTurnCount++;
      p1TC.innerHTML = `PlayerOne Turns: ${playerOneTurnCount}`;
      playerOneMoves.push(parseInt(event.target.id, 10));
      whoWon(winConditions, playerOneMoves, playerOne, playerOneScore, p1S);
    }
  } else {
    console.log(event.target.id);
    if (event.target.classList.contains("clicked")) {
      alert("try again wanker");
    } else {
      event.target.innerHTML = playerTwo;
      event.target.classList.add("clicked");
      playerTwoTurnCount++;
      p2TC.innerHTML = `PlayerTwo Turns: ${playerTwoTurnCount}`;
      playerTwoMoves.push(parseInt(event.target.id, 10));
      whoWon(winConditions, playerTwoMoves, playerTwo, playerTwoScore, p2S);
    }
  }
}

//! Query Selectors
let wrapper = document.querySelector("#wrapper");
let p1TC = document.querySelector("#p1TC");
let p2TC = document.querySelector("#p2TC");
let p1S = document.querySelector("#p1S");
let p2S = document.querySelector("#p2S");
let clicked = document.querySelectorAll(".clicked");
let boxes = document.querySelectorAll(".box");
document
  .querySelectorAll(".box")
  .forEach(box => box.addEventListener("click", boxesClickHandler));
// ! Event Listeners

// ! Click Handlers

function boxesClickHandler(event) {
  event.preventDefault();
  console.log("boxes are working");
  playerTurns(event);
}

//Todo:
//! Finish confirm function and reset the game board
//! Set up remove event listener on completion of game
//! Add in a tie option
