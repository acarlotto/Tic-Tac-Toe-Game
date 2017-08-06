'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields')

const signIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.signIn(data)
    .then(gameUi.signInSuccess)
    .catch(gameUi.failure)
}

// event handler for registration form
const registerUser = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  gameApi.addUser(data)
  .then(gameUi.onSignupSuccess)
  .catch(gameUi.onSignupFailure)
}

const onGetUsers = function (event) {
  event.preventDefault()

  gameApi.index()
    .then(gameUi.onSuccess)
    .catch(gameUi.onError)
}

module.exports = {
  registerUser,
  signIn,
  onGetUsers
}
