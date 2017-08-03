'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gameEvents = require('./game')

$(() => {
  $('#sign-up').on('submit', gameEvents.onsignUp)
})
// use require without a reference to ensure a file is bundled
/* const gameEvents = require('./game.js')
$() => {
  // click handlers for buttons and forms
  $('$register').on('click', gameEvents.loadRegsitration)
  $('$registration').on(submit, gameEvents.registeredUser)
}) */
