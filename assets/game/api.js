const app = require('../app.js')

const loadLogPage = function () {
  // return $('#content').load('')
    /* $.ajax({
    url: '',
    method: 'GET',
    success: function () {
      $('#container').load('')
    }
  }) */
}

const loadRegPage = function () {
  // return $('#content').load('')
  /* $.ajax({
    url: '',
    method: 'GET'
  }) */
}

const loadGamePage = function () {
  return $('#content').load('')
}

const addUser = function (data) {
  // console.log(data)
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
  })
}

const userLogin = function (data) {
  /* let userInfo = {
      Hello : "Hello World"
  } */
  // console.log(userInfo)
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data: {
      "credentials" : {
        "email": data.credentials.email,
        "password": data.credentials.password
    }
  }
  })
}

const passwordReset = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data
  })
}

const userLogout = function () {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

// not sure what this is supposed to do
const getGame = function () {
  // console.log ("Hello")
  // console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'POST',
    success: function (response) {
      console.log(response)
    }
    // ail: function (error) {
      // console.log(error)
      // console.log("Please Log in")
    // }
  })
}

const index = function () {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET'
  })
}

const show = function (id) {
  return $.ajax({
    url: app.host + '/games/' + id,
    method: 'GET'
  })
}

const createGame = function (data) {
  console.log('createGame from api.js ran!')
  console.log(app.user)
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token // app.user.token
    },
    data
  })
  .then((response) => { // found in issue tracker
    console.log('Response is ', response)
    app.game.id = response.game.id
  })
}

const moves = function (index, value, over) {
  console.log(app.game.id)
  // let index = event.target.id
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games/' + app.game.id, // was just id and then app.game.id (didn't work)
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token // store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value // $(event.target.id).append(cell)
        },
        'over': over
      }
    }
  })
}

const gameViews = function () {
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  index,
  show,
  loadLogPage,
  loadRegPage,
  loadGamePage,
  addUser,
  userLogin,
  passwordReset,
  userLogout,
  getGame,
  createGame,
  moves,
  gameViews
}
