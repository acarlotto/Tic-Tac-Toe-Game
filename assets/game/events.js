const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields')
// event handlers in this file

// event handler for register button
// const loadRegistration = function (event) {
  // event.preventDefault()
// }

// event handler for login button
// const loadLogin = function (event) {
  // event.preventDefault()
  // }

const loadGame = function (event) {
  event.preventDefault()
  gameApi.loadGamePage()
  // TODO Figure out how to catch and report errors when using Ajax load function
}

// event handler for registration form
const registerUser = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.addUser(data)
  .then(gameUi.onSignupSuccess)
  .catch(gameUi.onSignupFailure)
}

// event handler for login form
const loginUser = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.userLogin(data)
  .then(gameUi.onSigninSuccess)
  .catch(gameUi.onSigninFailure)
}

const resetPassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.passwordReset(data)
  .then(gameUi.onResetSuccess)
  .catch(gameUi.onResetFailure)
}

const logoutUser = function (event) {
  // const data = getFormFields(this)
  event.preventDefault()
  gameApi.userLogout()
  .then(gameUi.onLogoutSuccess)
  .catch(gameUi.onLogoutFailure)
}

const newGame = function (event) {
  event.preventDefault()
  gameApi.createGame()
    .then(gameUi.newGameCreated)
    .catch(gameUi.newGameFail)
}

const playGame = function (event) {
  event.preventDefault()
  gameApi.getGame()
  .then(gameUi.onGameSuccess)
  .catch(gameUi.onGameFail)
}

const onGetUsers = function (event) {
  event.preventDefault()
  gameApi.index()
    .then(gameUi.onSuccess)
    .catch(gameUi.onError)
}

const onGetUser = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  // what is data??
  const games = data.games
// how can we ensure the user input an id?
  if (games.id.length > 0) {
    gameApi.show(games.id)
      .then(gameUi.onSuccess)
      .catch(gameUi.onError)
  } else {
    console.error('Please provide a user id!')
  }
}

const updateGameStates = function (index, value, over) {
  event.preventDefault()
  const data = getFormFields(event.target)

  console.log(data)

  gameApi.updateMoves(index, value, over)
  .then(gameUi.updateGameStatesSuccess)
  .catch(gameUi.updateGameStatesFail)
}

module.exports = {
  onGetUser,
  onGetUsers,
  // loadRegistration,
  // loadLogin,
  registerUser,
  loginUser,
  loadGame,
  logoutUser,
  resetPassword,
  playGame,
  newGame,
  updateGameStates
}
