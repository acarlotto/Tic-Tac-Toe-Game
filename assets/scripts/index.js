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
$(() => {
  $('#registration').on('submit', gameEvents.registerUser)
  $('#login').on('submit', gameEvents.loginUser)
  $('#log-out').on('click', gameEvents.logoutUser)
  $('#passChange').on('submit', gameEvents.resetPassword)
  $('#reset').on('click', gameEvents.newGame)
})
