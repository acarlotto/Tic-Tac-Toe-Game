'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
// const app = require('./app.js')
const config = require('./config.js')

$(() => {
  setAPIOrigin(location, config)
})

const gameEvents = require('./game') // was ('./game')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
$(() => {
  $('#signUp').on('submit', gameEvents.signUp)
  $('#signIn').on('submit', gameEvents.signIn)
  $('#user-search').on('submit', gameEvents.onGetUsers)
})
