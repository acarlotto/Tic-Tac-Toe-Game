'use strict'
const gameEvents = require('../game/events')
const gameApi = require('../game/api')
// Player X will start the game always
let playerToken = 'x'
let count = parseInt($(this).data('click')) || 0
let xWin = 1
let oWin = 1
let over
// let games won = game
// let board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']

/* $('.square').on('click', function (index, value, over) {
const $square = $(event.currentTarget)
// let index = $(event.target.id).index()
let cell = ('square-' + playerToken)
console.log(cell)
  if (square === 'r1') {
    const index = 0
    console.log(index)
    let over = false
    // let value = ('square-' + playerToken)
    // console.log(('square-' + playerToken))
    // let value = $('#r1').append(value)
    // $('#value').val(playerToken)
    // $('#index').val(+$(this).attr('id'))
    gameEvents.updateGameStates(index, value, over)
  } else if (square === 'r2') {
    let value = $('#r2').val()
    let index = 1
    let over = over
    gameEvents.updateGameStates(index, value, over)
    // $('#value').val(playerToken)
    // $('#index').val(+$(this).attr('id'))
  }
}) */

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
  // const cell = event.target.id
  // console.log(event.target.id)
  const index = $('.square').index(this)
  // console.log($('.square').index(this))
  const value = ('square-' + playerToken)
  // console.log('square-' + playerToken)
// Swap current player's token and check for win.
  if (playerToken === 'x') {
    playerToken = 'o'
    setMessage(playerToken + '\'s Turn')
  } else if (playerToken === 'o') {
    playerToken = 'x'
    setMessage(playerToken + '\'s Turn')
  }
  checkIfPlayerWon()
  gameEvents.updateGameStates(index, value)
})

/* $('.square').on('click', function (cell, over) {
const $square = $(event.currentTarget)
// let index = $(event.target.id).index()
//let cell = ('square-' + playerToken)
  if (cell === 'r1') {
    let index = 0
    console.log(event.target.id)
    let over = false
    let value =
    //console.log(('square-' + playerToken))
    // let value = $('#r1').append(value)
    // $('#value').val(playerToken)
    // $('#index').val(+$(this).attr('id'))
    gameEvents.updateGameStates(index, value, over)
  } else if (cell === 'r2') {
    let value = $('#r2').val()
    let index = 1
    let over = over
    gameEvents.updateGameStates(index, value, over)
    // $('#value').val(playerToken)
    // $('#index').val(+$(this).attr('id'))
  }
})
// }) */
/*
const updateGame = function (cell, over) {
  if (cell === 'r1') {
    console.log('test')
    value = $('#r1').html('')
    let test = $(event.target.id).index()
    console.log(test)
    index = 0
    over = over
    // $('#value').val(playerToken)
    // $('#index').val(+$(this).attr('id'))
    gameEvents.updateGameStates(index, value, over)
  } else if (cell === 'r2') {
    value = $('#r2').html('')
    index = 1
    over = over
    // $('#value').val(playerToken)
    // $('#index').val(+$(this).attr('id'))
    gameEvents.updateGameStates(index, value, over)
  }
} // change
*/
const checkIfPlayerWon = function (symbol) {
  if ($('#r1').hasClass('square-x') && $('#r2').hasClass('square-x') && $('#r3').hasClass('square-x') ||
    $('#r4').hasClass('square-x') && $('#r5').hasClass('square-x') && $('#r6').hasClass('square-x') ||
    $('#r7').hasClass('square-x') && $('#r8').hasClass('square-x') && $('#r9').hasClass('square-x') ||
    $('#r1').hasClass('square-x') && $('#r5').hasClass('square-x') && $('#r9').hasClass('square-x') ||
    $('#r3').hasClass('square-x') && $('#r5').hasClass('square-x') && $('#r7').hasClass('square-x') ||
    $('#r1').hasClass('square-x') && $('#r4').hasClass('square-x') && $('#r7').hasClass('square-x') ||
    $('#r2').hasClass('square-x') && $('#r5').hasClass('square-x') && $('#r8').hasClass('square-x') ||
    $('#r3').hasClass('square-x') && $('#r6').hasClass('square-x') && $('#r9').hasClass('square-x')) {
    // updateGame()
    setMessage('Player X has won the game. Start a new game')
    $('.gameBoard').removeClass('disable')
    $('.square').removeClass('square-o')
    $('.square').removeClass('square-x')
    $('.gameBoard').hide()
    $('#xWin').text(xWin)
    calculateWinsX()
    over = true
    $('#over').val('true')
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
    setMessage('Player O has won the game. Start a new game')
    $('.gameBoard').removeClass('disable')
    $('.square').removeClass('square-o')
    $('.square').removeClass('square-x')
    $('.gameBoard').hide()
    $('#oWin').text(oWin)
    calculateWinsO()
    over = true
    $('#over').val('true')
    count = 0
    playerToken = 'x'
    return ('square-o')
  } else if (count === 9) {
    // updateGame()
    $('#over').val('true')
    setMessage('Tie Game!')
    $('.gameBoard').removeClass('disable')
    $('.square').removeClass('square-o')
    $('.square').removeClass('square-x')
    $('.gameBoard').hide()
    over = true
    count = 0
    playerToken = 'x'
    setMessage('tie game')
  }
}

const setMessage = function (msg) {
  document.getElementById('message').innerText = msg
}

$('#play-game').click(function () {
  $('.square').addClass('.square:before')
  // $('#message').addClass('#message:before')
  $('.gameBoard').removeClass('disable')
  $('.square').removeClass('square-o')
  $('.square').removeClass('square-x')
  $('#message').removeClass('message')
  // $('.xwin_times').removeClass('xWin')
  // $('.owin_times').removeClass('oWin')
  count = 0
  playerToken = 'x'
  setMessage('x\'s Turn')
})

$('#log-out').click(function () {
  // $('#oWin').addClass('owin_times')
  // $('.square').addClass('.square:before')#message:before
  $('#oWin').removeClass('oWin')
  // $('#message').addClass('message:before')
  $('#message').removeClass('message')
  // $('#message').removeClass('message:before')
})

module.exports = {
  // checkIfPlayerWon
  // recordMoves
  // updateGame
}
