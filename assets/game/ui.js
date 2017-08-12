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
  $('#registration').hide()
  $('#login').show()
}

// const onSignupFailure = function (error) {
  // console.error(error)
// }

const onSignupFailure = (error) => {
  if (error.status === 400) {
    console.log(error)
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
  // hide change-password
  $('#passChange').hide()
  // hide login
  $('#login').hide()
  // hide register
  $('#registration').hide()
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

const updateGameStatesSuccess = function (index, value) {
  console.log(app.gameID)
  console.log('testing update game states success')
}

const updateGameStatesFail = function (index, value) {
  console.log(app.gameID)
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
  $('#registration').show()
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

const onGetGameSuccess = function (data) {
  console.log('got game')
  console.log('user' + app.user.id)
  app.game = data.game

  //$('#board').show()
}

const onGetGameFail = function () {
  console.log('got game failed')
}

const onViewSuccess = function (data) {
  // app.game.id = data.game.id
  // app.game.over = data.game.over
  console.log(data.games.length)
  // assign variable to game data array
  let games = data.games
  let totalNumber = games.length
  $('main').prepend('<div class="row" style="text-align: center; color: black"> <p>You have played ' + totalNumber + ' Games!!</p></div>')
  // hide view button and change password form
  // $('#view-games').hide()
  // $('#change-password').hide()
  // append table of games to page
  // $('main').append('<div class="row"> <table> <tr> <th> Game ID </th> <th> Over </th> </tr>')
  //loop through each game and print out the id and whether it is over
  games.forEach(function(game) {
    // $('main').append('<tr> <td> <a href="javascript:" class="get-game-id" id="' + game.id + '">' + game.id + ' </a> </td> <td>' + game.over + '</td></tr>')
    // assign click handler to dynamically added links
    $('.get-game-id').on('click', function() {
      event.preventDefault()
      //gameEvents.getGameById()
    })
  })
    //$(this).attr('id', game.id)
    //$('main').append('</table> </div>')
}

// if view games fails
const onViewError = function () {
  console.error(error)
  // show error on main page
  $('main').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + error + ' </p></div>')
}
module.exports = {
  // onLoadSuccess,
  // onLoadError,
  onViewSuccess,
  onViewError,
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
