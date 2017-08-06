const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields')
// event handlers in this file

// event handler for register button
const loadRegistration = function (event) {
  event.preventDefault()
  $('#registration').show()
  $('#register').hide()
  $('#login-link').hide()
  $('#play-game').hide()
  //.then(gameUi.onLoadSuccess)
  //.catch(gameUi.onLoadError)
  //TODO Figure out how to catch and report errors when using Ajax load function
}

//event handler for login button
const loadLogin = function (event) {
  event.preventDefault()
  $('#login').show()
  $('#register').hide()
  $('#login-link').hide()
  $('#play-game').hide()
  //.then(gameUi.onLoadSuccess)
  //.catch(gameUi.onLoadError)
  //TODO Figure out how to catch and report errors when using Ajax load function
}

const loadGame = function (event) {
  event.preventDefault()
  gameApi.loadGamePage()
  //TODO Figure out how to catch and report errors when using Ajax load function
}

//event handler for registration form
const registerUser = function (event) {
  const data = getFormFields(this)
  //console.log(data)
  event.preventDefault()
  gameApi.addUser(data)
  .then(gameUi.onSignupSuccess)
  .catch(gameUi.onSignupFailure)

}

//event handler for login form
const loginUser = function (event) {
  //console.log(data)
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.userLogin(data)
  .then(gameUi.onSigninSuccess)
  .catch(gameUi.onSigninFailure)
}

const resetPassword = function (event) {
  //console.log()
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.passwordReset(data)
  .then(gameUi.onResetSuccess)
  .catch(gameUi.onResetFailure)
}

const logoutUser = function (event) {
  //const data = getFormFields(this)
  event.preventDefault()
  gameApi.userLogout()
  .then(gameUi.onLogoutSuccess)
  .catch(gameUi.onLogoutFailure)
}

const playGame = function (event) {
  //console.log("Working")
  event.preventDefault()
  gameApi.getGame()
  .then(gameUi.onGameSuccess)
  .catch(gameUi.onGameFail)
}

/*const playGame = function (event) {
}*/

module.exports = {
  loadRegistration,
  loadLogin,
  registerUser,
  loginUser,
  loadGame,
  logoutUser,
  resetPassword,
  playGame
}
