'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
// const app = require('./app.js')
const config = require('./config.js')

$(() => {
  setAPIOrigin(location, config)
})

const gameEvents = require('../game/events')
const game = require('./game') // was ('./game')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// On document ready
$(() => {
  $('#registration').on('submit', gameEvents.registerUser)
  $('#login').on('submit', gameEvents.loginUser)
  $('#log-out').on('click', gameEvents.logoutUser)
  $('#passChange').on('submit', gameEvents.resetPassword)
  $('#reset').on('click', gameEvents.newGame)
  $('#get-game').on('submit', gameEvents.onGetUser)
  $('#update-game-state').on('submit', gameEvents.updateGameStates)
  $('#view-games').on('click', gameEvents.viewGames)
  $('#play-game').on('click', gameEvents.playGame)
  // $('#passChangeButton').on('click', gameEvents.resetPassword)

  $(document).ready(function () {
    $('.gameBoard').hide() // enter the class or id of the particular html element which you wish to hide.
    $('#view-games').hide()
    $('#play-game').hide()
    $('#log-out').hide()
    $('#reset').hide()
    $('#message').show()
    $('#view-games').on('click', gameEvents.viewGames)
    $('#passChange').hide()
    $('#passChangeButton').hide()
  })
  // $('#content').on(submit, gameEvents.loadGame) // might have to delete
  // $('#update').on('submit', gameEvents.updateGameStates)
})

$('#passChangeButton').click(function () {
  $('#passChange').show()
})
