'use strict'
// remove signIn and signOut
const app = require('../app.js')

// remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
}

/* const onSignupSuccess = (data) => {
  app.user = data.user
  console.log(data)
} */

const onSignupSuccess = function () {
  console.log('Signup Successful!')
  // $('#content').load('http://localhost:7165/login.html')
  $('#registration').hide()
  $('#login').show()
}

// remove me before code-along
const signOutSuccess = () => {
  app.user = null
  console.log(app)
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onSignupSuccess,
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
}
