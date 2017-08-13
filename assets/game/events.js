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

const loadGame = function (event) {
  event.preventDefault()
  gameApi.loadGamePage()
  .then(gameUi.onSigninSuccess)
  .catch(gameUi.onSigninFailure)
}

// event handler for registration form
const registerUser = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // Test that the passwords match
  if (data.credentials.password !== data.credentials.password_confirmation) {
    gameUi.onSignupFailure("passwords don't match")
  // console.log(data)
  } else {
    gameApi.addUser(data)
  .then(gameUi.onSignupSuccess)
  .catch(gameUi.onSignupFailure)
  }
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
  const data = getFormFields(this)
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

// this is get game
const playGame = function (event) {
  event.preventDefault()
  // console.log('getGame is running!')
  gameApi.getGame()
  .then(gameUi.onGetGameSuccess)
  .catch(gameUi.onGetGameFail)
}

const updateGameStates = function (index, value, over) {
  // event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('on updateGameState')
  gameApi.moves(index, value, over)
  .then(gameUi.updateGameStatesSuccess)
  .catch(gameUi.updateGameStatesFail)
  // console.log($('#r1').hasClass('square- + playerToken'))
  // console.log($('#r1').val())
}

/* const onGetUsers = function (event) {
  event.preventDefault()
  gameApi.index()
    .then(gameUi.onSuccess)
    .catch(gameUi.onError)
}*/

const onGetUser = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  // what is data??
  const games = data.games
// how can we ensure the user input an id?
  if (games.id.length > 0) {
    // console.log(games.length)
    gameApi.show(games.id)
      .then(gameUi.onSuccess)
      .catch(gameUi.onError)
  } else {
    // console.error('Please provide a user id!')
  }
}

const totalGamesPlayed = function (event) {
  event.preventDefault()
  gameApi.getIndex()
    .then((response) => {
      store.games = response.games
      // $('#setMessage').text('You battled ' + store.games.length + ' many times.')
      return store.games.length
    })
    .then(gameUi.success)
    .catch(gameUi.failure)
}

const viewGames = function () {
  event.preventDefault()
  gameApi.gameViews()
  .then(gameUi.onViewSuccess)
  .catch(gameUi.onViewError)
}

module.exports = {
  // onGetUser,
  // onGetUsers,
  // loadRegistration,
  // loadLogin,
  viewGames,
  registerUser,
  loginUser,
  loadGame,
  logoutUser,
  resetPassword,
  playGame,
  newGame,
  totalGamesPlayed,
  updateGameStates
}
