'use strict'

let app = require('../app.js')
let user

// const displayErrorMessage = (errorText) => {
  // $('#display-error').text('')
  // $('#display-error').show()
  // $('#display-error').text(errorText || 'Unknown error')
  // $('#display-error').delay(3000).fadeOut()
// }

const onSignupSuccess = function () {
  console.log('Signup Successful!')
  $('#registration').hide()
  $('#login').show()
  $('#message').show()
  $('#board').hide()
  $('message').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed up. Login. </p></div>')
}

// const onSignupFailure = function (error) {
  // console.error(error)
// }

const onSignupFailure = (error) => {
  // if (error.status === 400) {
    console.log(error)
    console.log('There was problem signing up, please try again!')
    $('message').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match. Try again!' + ' </p></div>')

  // } else if {
  //  setMessage()
}
// }

const onSigninSuccess = function (data) {
  console.log(app)
  app.user = data.user
  console.log('sign in successful')
  // $('#board').show()
  // hide change-password
  // hide login
  $('#login').hide()
  // hide register
  $('#registration').hide()
  $('#board').hide() // enter the class or id of the particular html element which you wish to hide.
  $('#view-games').hide()
  $('#play-game').show()
  $('#reset').hide()
  $('#message').show()
  $('#log-out').show()
  $('#passChange').hide()
  $('#passChangeButton').show()
}

// const onSigninFailure = function (error) {
  // console.log('Sign in failed')
// }

const onSigninFailure = (error) => {
  if (error.status === 401) {
    $('message').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Invalid username or password.' + ' </p></div>')
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
  $('message').prepend('<div class="row" style="text-align: center; color: red"> <p>Password Reset Successfully</p></div>')
  // $('#content').load('http://localhost:7165/index.html')
}

const onResetFailure = function () {
  $('message').prepend('<div class="row" style="text-align: center; color: red"> <p>Invalid Password.</p></div>')
}

const onLogoutSuccess = function () {
  app.user = null
  console.log('User Logged Out')
  $('#board').hide()
  // show login
  $('#login').show()
// show passChange
  $('#passChange').hide()
  // show registration
  $('#registration').show()
  $('#reset').hide()
  $('#view-games').hide()
  $('#play-game').hide()
  $('#log-out').hide()
  $('.play').hide()
  $('#message').hide()
  $('#passChangeButton').hide()
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

// const playGameAfterLogin = function {
  // $('#board').show()
// }

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
  $('#board').show()
  $('#registration').hide()
  $('#reset').show()
  $('#view-games').show()
  $('#play-game').show()
  $('#log-out').show()
  // $('#message').hide()
  // $('#passChange').show()
  // $('#main').hide()
}

const onGetGameFail = function () {
  console.log('got game failed')
}

const onViewSuccess = function (data) {
  // app.game.id = data.game.id
  // app.game.over = data.game.over
  console.log(data.games.length)
  console.log(data.games)
  // assign variable to game data array
  let games = data.games
  let totalNumber = games.length
  $('message').prepend('<div class="row" style="text-align: center; color: black"> <p>You have played ' + totalNumber + ' Games!!</p></div>')
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

const getPassChange = function () {
  $('#passChange').show()
}

// if view games fails
const onViewError = function () {
  console.error(error)
  // show error on main page
  $('message').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + error + ' </p></div>')
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
  // displayErrorMessage,
  onGameFail
}
