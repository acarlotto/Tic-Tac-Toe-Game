'use strict'

// Player X will start the game
let playerToken = 'x'
// let countX = 0
const playerTokenWin = 0
let count = parseInt($(this).data('click')) || 0
let xWin = 1
let oWin = 1

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

// let scores = [0, 0]
$('.gameBoard').on('click', ".square:not('.square-x, .square-o')", function (event) {
  const $square = $(event.currentTarget)
  $square.addClass('square-' + playerToken)

  if (checkIfPlayerWon('square-' + playerToken)) {
    setMessage('Yay!' + playerToken + 'has won the game. Start a new game')
  } else if (checkIfPlayerWon === 'square-x') {
    setMessage('User X has won! Start a new game.')
  } else if (checkIfPlayerWon === 'square-o') {
    setMessage('User O has won! Start a new game.')
  } else if (playerToken === 'x') {
    playerToken = 'o'
    setMessage(playerToken + '\'s Turn')
  } else {
    playerToken = 'x'
    setMessage(playerToken + '\'s Turn')
  }
})
// Swap current player's token

const checkIfPlayerWon = function (symbol) {
  if ($('#r1').hasClass('square-x') && $('#r2').hasClass('square-x') && $('#r3').hasClass('square-x') ||
     $('#r4').hasClass('square-x') && $('#r5').hasClass('square-x') && $('#r6').hasClass('square-x') ||
     $('#r7').hasClass('square-x') && $('#r8').hasClass('square-x') && $('#r9').hasClass('square-x') ||
     $('#r1').hasClass('square-x') && $('#r5').hasClass('square-x') && $('#r9').hasClass('square-x') ||
     $('#r3').hasClass('square-x') && $('#r5').hasClass('square-x') && $('#r7').hasClass('square-x') ||
     $('#r1').hasClass('square-x') && $('#r4').hasClass('square-x') && $('#r7').hasClass('square-x') ||
     $('#r2').hasClass('square-x') && $('#r5').hasClass('square-x') && $('#r8').hasClass('square-x') ||
     $('#r3').hasClass('square-x') && $('#r6').hasClass('square-x') && $('#r9').hasClass('square-x')) {
    $('#xWin').text(xWin)
    calculateWinsX()
    count = 0
    return ('square-x')
  } else if ($('#r1').hasClass('square-o') && $('#r2').hasClass('square-o') && $('#r3').hasClass('square-o') ||
     $('#r4').hasClass('square-o') && $('#r5').hasClass('square-o') && $('#r6').hasClass('square-o') ||
     $('#r7').hasClass('square-o') && $('#r8').hasClass('square-o') && $('#r9').hasClass('square-o') ||
     $('#r1').hasClass('square-o') && $('#r5').hasClass('square-o') && $('#r9').hasClass('square-o') ||
     $('#r3').hasClass('square-o') && $('#r5').hasClass('square-o') && $('#r7').hasClass('square-o') ||
     $('#r1').hasClass('square-o') && $('#r4').hasClass('square-o') && $('#r7').hasClass('square-o') ||
     $('#r2').hasClass('square-o') && $('#r5').hasClass('square-o') && $('#r8').hasClass('square-o') ||
     $('#r3').hasClass('square-o') && $('#r6').hasClass('square-o') && $('#r9').hasClass('square-o')) {
  // alert('O Wins!') //  return xWin
    $('#oWin').text(oWin)
    calculateWinsO()
    count = 0
    return ('square-o')
  } else if (count === 9) {
    alert('Tie Game')
    $('.square').addClass('.square:before')
    $('.square').removeClass('disable')
    $('.square').removeClass('square-o')
    $('.square').removeClass('square-x')
    count = 0
  }
}
const setMessage = function (msg) {
  document.getElementById('message').innerText = msg
}

$('#reset').click(function () {
  $('.square').addClass('.square:before')
  $('.square').removeClass('disable')
  $('.square').removeClass('square-o')
  $('.square').removeClass('square-x')
  count = 0
})

module.exports = true
