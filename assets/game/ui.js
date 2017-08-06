'use strict'

let app = require('../app.js')
let user

//let user = {}
//use file to log success and error messages
/*const onLoadSuccess = function () {
  console.log ('Page loaded successfully')
}*/

/*const onLoadError = function (error) {
  console.error(error)
}*/

const onSignupSuccess = function () {
  console.log("Signup Successful!")
  $('#content').load('http://localhost:7165/login.html')
  $('#registration').hide()
  $('#login').show()
}

const onSignupFailure = function (error) {
  $('main').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + error + ' </p></div>')
  //console.error(error)
}

const onSigninSuccess = function (data) {
  console.log(app)
  app.user = data.user
  //console.log (app.user)
  //console.log("Signin Successful!")
  $('#login').hide()
  $('#play-game').show()

  //$('#content').load('http://localhost:7165/loggedin.html')

}

const onSigninFailure = function (error) {
  $('main').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + error + ' </p></div>')
}

const onResetSuccess = function () {
  $('main').prepend('<div class="row"> Password Reset Successfully </div>')
  //$('#content').load('http://localhost:7165/index.html')
}

const onResetFailure = function (error) {
  $('main').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + error + ' </p></div>')
}

const onLogoutSuccess = function () {
  app.user = null
  $('main').prepend('<div class="row"> Logged out successfully </div>')
  $('#board').hide()
  $('#pause').hide()
  $('#play-again').hide()
  $('#log-out').hide()
  $('#register').show()
  $('#login-link').show()
  $('#play-game').show()

  $('#content').load('http://localhost:7165/index.html')
}

const onLogoutFailure = function (error) {
  $('main').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + error + ' </p></div>')
}

const onGameSuccess = function () {
  $('#play-game').hide()
  $('#board').show()
  $('#game-buttons').show()

  // console.log("Game Created!")
}

const onGameFail = function (error) {
  $('main').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + error + ' </p></div>')
}

const onSuccessAllUsers = function (data) {
  console.table(data.games)
}

const onErrorAllUsers = function (response) {
  console.error(response)
}
module.exports = {
  // onLoadSuccess,
  // onLoadError,
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
  onGameFail
}
