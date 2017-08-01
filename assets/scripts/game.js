'use strict'

// Player X will start the game
let playerToken = 'x'
// let countX = 0
const playerTokenWin = 0
let count = 0
let xWin = 0
let oWin = 0

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
    alert('X Wins!') //  return xWin
    count = 0
    xWin++
  } else {
    return false
  }
}

const checkIfPlayerWonO = function (symbol) {
  if ($('#r1').hasClass('square-o') && $('#r2').hasClass('square-o') && $('#r3').hasClass('square-o')) {
    alert('oWin') //  return xWin
  } else {
    return false
  }
}

/* THIS IS THE POSSIBLE SOLUTION TO CHECK FOR TIE const checkForTie = function () {
  if ($('#r1').hasClass('square-') && $('#r2').hasClass('square-') && $('#r3').hasClass('square-') &&
  $('#r4').hasClass('square-') && $('#r5').hasClass('square-') && $('#r6').hasClass('square-') && $('#r7').hasClass('square-') &&
  $('#r8').hasClass('square-') && $('#r9').hasClass('square-')) {
    alert('Tie Game') //  return xWin
  } else {
    return false
  }
} */

/* let winner = function () {
 if(!winner) {
   //check to see if there is a tie
   if(numMoves == 9)
      status.innerHTML = 'Tie Game!';
 } else {
   gameOver = true
} */

document.querySelector('.startNewGame').addEventListener('click', function () {
  'use strict'
  window.location.reload()
}, true)
// Start the game
// window.onload = _startGame()

module.exports = true
