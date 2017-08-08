'use strict'

let app = require('../app.js')
let user

const displayErrorMessage = (errorText) => {
  $('#display-error').text('')
  $('#display-error').show()
  $('#display-error').text(errorText || 'Unknown error')
  $('#display-error').delay(3000).fadeOut()
}

const onSignupSuccess = function () {
  console.log('Signup Successful!')
  // $('#registration').hide()
  // $('#login').show()
}

// const onSignupFailure = function (error) {
  // console.error(error)
// }

const onSignupFailure = (error) => {
  if (error.status === 400) {
    console.log('There was problem signing up, please try again!')
  } else {
    setMessage()
  }
}

const onSigninSuccess = function (data) {
  console.log(app)
  app.user = data.user
  console.log('sign in successful')
  $('#board').show()
}

// const onSigninFailure = function (error) {
  // console.log('Sign in failed')
// }

const onSigninFailure = (error) => {
  if (error.status === 401) {
    $('main').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Invalid username or password.' + ' </p></div>')
    console.log('Invalid username or password.')
  } else {
    displayErrorMessage()
  }
}

const updateGameStatesSuccess = function (data) {
  app.user = data.user
  console.log('testing update game states success')
  store.games = id.games
}

const updateGameStatesFail = function (data) {
  app.user = data.user
  console.log('testing update game states fail')
}

const onResetSuccess = function () {
  console.log('Password Reset Successfully')
  // $('#content').load('http://localhost:7165/index.html')
}

const onResetFailure = (error) => {
  if (error.status === 400) {
    console.log('Invalid password.')
  } else {
    displayErrorMessage()
  }
}

const onLogoutSuccess = function () {
  app.user = null
  console.log('User Logged Out')
  $('#board').hide()
  // $('#reset div').hide()
  // $('.gameBoard').hide()
}

const onLogoutFailure = function (error) {
}

const onGameSuccess = function () {
  // $('#play-game').hide()
  // $('#board').show()
  // $('#game-buttons').show()

  // console.log("Game Created!")
}

const onGameFail = function (error) {
}

const onSuccessAllUsers = function (data) {
  console.table(data.games)
}

const onErrorAllUsers = function (response) {
  console.error(response)
}

const newGameCreated = (data) => {
  console.log('createGameSuccess from ui.js ran!')
  // $('.box').text('')
  // $('#gameArea').show()
  // $('.banner-id').text("Let's Play!")
  console.log(data)
  //store.game = data.game
}

const onGetGameSuccess = function () {
  console.log('got game')
  console.log('user' + app.user.id)
  //$('#board').show()
}

const onGetGameFail = function () {
  console.log('got game failed')
}

module.exports = {
  // onLoadSuccess,
  // onLoadError,
  onGetGameSuccess,
  onGetGameFail,
  onSuccessAllUsers,
  onErrorAllUsers,
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onResetSuccess,
  onResetFailure,
  onLogoutSuccess,
  onLogoutFailure,
  onGameSuccess,
  updateGameStatesSuccess,
  updateGameStatesFail,
  displayErrorMessage,
  onGameFail
}
