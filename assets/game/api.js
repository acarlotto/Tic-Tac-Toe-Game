'use strict'

const app = require('../app.js')
const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);

const addUser = function (data) {
  //console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    //headers: { 'header': 'Content-Type: application/json' },
    method: 'POST',
    data: {
      "credentials" : {
        "email": data.credentials.email,
        "password": data.credentials.password,
        "password_confirmation": data.credentials.password
      }
    }
    //crossDomain: true
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: app.host + '/users',
    method: 'GET'
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data,
  });
};

module.exports = {
  addUser,
  signIn,
  signOut,
  changePassword,
};
