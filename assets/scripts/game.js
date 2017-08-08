'use strict'

const gameEvents = require('../game/events')

// Player X will start the game always
let playerToken = 'x'
let over
let value
let index
let count = parseInt($(this).data('click')) || 0
let xWin = 1
let oWin = 1

const updateGame = function (cell, over) {
  if (cell === '#r1') {
    value = $('#r1').on('click').html()
    index = 0
    over = true
    // gameEvents.updateGameStates(index, value, over)
    // $('#update-game-state').on('submit', gameEvents.updateGameStates)
  } else if (cell === 'r2') {
    value = $('#r2').html()
    index = 1
    over = true
    gameEvents.updateGameStates(index, value, over)
  }
}

const calculateWinsX = function () {
  xWin = xWin + 1
  return xWin
}

const calculateWinsO = function () {
  oWin = oWin + 1
  return oWin
}

$('.square').on('click', function () {
  count = (count + 1)
  $(this).data('click', count)
})

$('.gameBoard').on('click', ".square:not('.square-x, .square-o')", function (event) {
  const $square = $(event.currentTarget)
  $square.addClass('square-' + playerToken)
// Swap current player's token and check for win.
  if (playerToken === 'x') {
    playerToken = 'o'
    setMessage(playerToken + '\'s Turn')
  } else if (playerToken === 'o') {
    playerToken = 'x'
    setMessage(playerToken + '\'s Turn')
  }
  checkIfPlayerWon()
})

const checkIfPlayerWon = function (symbol) {
  if ($('#r1').hasClass('square-x') && $('#r2').hasClass('square-x') && $('#r3').hasClass('square-x') ||
     $('#r4').hasClass('square-x') && $('#r5').hasClass('square-x') && $('#r6').hasClass('square-x') ||
     $('#r7').hasClass('square-x') && $('#r8').hasClass('square-x') && $('#r9').hasClass('square-x') ||
     $('#r1').hasClass('square-x') && $('#r5').hasClass('square-x') && $('#r9').hasClass('square-x') ||
     $('#r3').hasClass('square-x') && $('#r5').hasClass('square-x') && $('#r7').hasClass('square-x') ||
     $('#r1').hasClass('square-x') && $('#r4').hasClass('square-x') && $('#r7').hasClass('square-x') ||
     $('#r2').hasClass('square-x') && $('#r5').hasClass('square-x') && $('#r8').hasClass('square-x') ||
     $('#r3').hasClass('square-x') && $('#r6').hasClass('square-x') && $('#r9').hasClass('square-x')) {
    updateGame()
    setMessage('Player X has won the game. Start a new game')
    $('.gameBoard').removeClass('disable')
    $('.square').removeClass('square-o')
    $('.square').removeClass('square-x')
    $('#xWin').text(xWin)
    calculateWinsX()
    over = true
    count = 0
    playerToken = 'x'
    return ('square-x')
  } else if ($('#r1').hasClass('square-o') && $('#r2').hasClass('square-o') && $('#r3').hasClass('square-o') ||
     $('#r4').hasClass('square-o') && $('#r5').hasClass('square-o') && $('#r6').hasClass('square-o') ||
     $('#r7').hasClass('square-o') && $('#r8').hasClass('square-o') && $('#r9').hasClass('square-o') ||
     $('#r1').hasClass('square-o') && $('#r5').hasClass('square-o') && $('#r9').hasClass('square-o') ||
     $('#r3').hasClass('square-o') && $('#r5').hasClass('square-o') && $('#r7').hasClass('square-o') ||
     $('#r1').hasClass('square-o') && $('#r4').hasClass('square-o') && $('#r7').hasClass('square-o') ||
     $('#r2').hasClass('square-o') && $('#r5').hasClass('square-o') && $('#r8').hasClass('square-o') ||
     $('#r3').hasClass('square-o') && $('#r6').hasClass('square-o') && $('#r9').hasClass('square-o')) {
    updateGame()
    setMessage('Player O has won the game. Start a new game')
    $('.gameBoard').removeClass('disable')
    $('.square').removeClass('square-o')
    $('.square').removeClass('square-x')
    $('#oWin').text(oWin)
    calculateWinsO()
    over = true
    count = 0
    playerToken = 'x'
    return ('square-o')
  } else if (count === 9) {
    updateGame()
    over = true
    setMessage('Tie Game')
    $('.gameBoard').removeClass('disable')
    $('.square').removeClass('square-o')
    $('.square').removeClass('square-x')
    count = 0
    playerToken = 'x'
    setMessage('tie game')
  }
}

const setMessage = function (msg) {
  document.getElementById('message').innerText = msg
}

$('#reset').click(function () {
  $('.square').addClass('.square:before')
  $('#message').addClass('#message:before')
  $('.gameBoard').removeClass('disable')
  $('.square').removeClass('square-o')
  $('.square').removeClass('square-x')
  $('#message').removeClass('message')
  count = 0
  playerToken = 'x'
  setMessage('x\'s Turn')
})

module.exports = {
  updateGame
}
