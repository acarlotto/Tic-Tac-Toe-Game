'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const signIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.signIn(data)
    .then(gameUi.signInSuccess)
    .catch(gameUi.failure)
}

const signUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.signUp(data)
  .then(gameUi.signUpSuccess)
  .catch(gameUi.failure)
}

const onGetUsers = function (event) {
  event.preventDefault()

  gameApi.index()
    .then(gameUi.onSuccess)
    .catch(gameUi.onError)
}

module.exports = {
  signIn,
  signUp,
  onGetUsers
}
