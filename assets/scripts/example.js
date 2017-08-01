'use strict'

// Player X will start the game
let playerToken = 'x'
// let countX = 0
const playerTokenWin = 0
let count = 0
let oWin = 0
let xWin = 0

// Within any element with class `.gameBoard`, listen for clicks on any element
// with a class `.square`.
// an event listener attached to the global object will call its handler prior to a listener that has been attached to the element itself.
$('.gameBoard').on('click', ".square:not('.square-x, .square-o')", function (event) {
  // alert('Hello World!') -- testing click event
  // adding a class defined in our css to the currentTarget and square-x and square-o is defined in my css.
  const $square = $(event.currentTarget)
  $square.addClass('square-' + playerToken)
  // $square.is('square-' + playerToken) /* might take out */
  if (checkIfPlayerWon('square-' + playerToken)) {
    setMessage(playerToken + 'has Won!')
    // if ($('#playerTokenWin').text(playerTokenWin)
    // count = xWin++
    // $('#playerTokenWin').text(xWin)
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

const checkIfPlayerWon = function (symbol) {
  if ($('#r1').hasClass('square-x') && $('#r2').hasClass('square-x') && $('#r3').hasClass('square-x')) {
    return true //  return xWin
  } else {
    return false
  }
}

function startNewGame () {
  location.reload(true)
}

module.exports = true
