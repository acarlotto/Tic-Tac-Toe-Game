'use strict'

// Player X will start the game
let playerToken = 'x'
// let countX = 0
const playerTokenWin = 0
let oWin = 0
let xWin = 0

$('.gameBoard').on('click', ".square:not('.square-x, .square-o')", function (event) {
  const $square = $(event.currentTarget)
  $square.addClass('square-' + playerToken)

  if (checkIfPlayerWonX('square-' + playerToken)) {
    setMessage('X' + 'has Won!')
  } else if (checkIfPlayerWonO('square-' + playerToken)) {
    setMessage('O' + 'has Won!')
  } else if (playerToken === 'x') {
    playerToken = 'o'
    setMessage(playerToken + '\'s Turn')
  } else {
    playerToken = 'x'
    setMessage(playerToken + '\'s Turn')
  }
})
// Swap current player's token

const setMessage = function (msg) {
  document.getElementById('message').innerText = msg
}

const checkIfPlayerWonX = function (symbol) {
  if ($('#r1').hasClass('square-x') && $('#r2').hasClass('square-x') && $('#r3').hasClass('square-x')) {
    return xWin //  return xWin
  } else {
    return false
  }
}

const checkIfPlayerWonO = function (symbol) {
  if ($('#r1').hasClass('square-o') && $('#r2').hasClass('square-o') && $('#r3').hasClass('square-o')) {
    return oWin //  return xWin
  } else {
    return false
  }
}

/* let winner = function () {
 if(!winner) {
   //check to see if there is a tie
   if(numMoves == 9)
      status.innerHTML = 'Tie Game!';
 } else {
   gameOver = true
} */

function startNewGame () {
  location.reload(true)
}

module.exports = true
