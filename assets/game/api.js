const app = require('../app.js')

const loadLogPage = function () {
  // return $('#content').load('http://localhost:7165/login.html')
    /* $.ajax({
    url: 'http://localhost:7165/login.html',
    method: 'GET',
    success: function () {
      $('#container').load('http://localhost:7165/login.html')
    }
  }) */
}

const loadRegPage = function () {
  // return $('#content').load('http://localhost:7165/register.html')
  /* $.ajax({
    url: 'http://localhost:7165/register.html',
    method: 'GET'
  }) */
}

const loadGamePage = function () {
  return $('#content').load('http://localhost:7165/board.html')
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
const getGame = function (data) {
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
    // data
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
      Authorization: 'Token token=' + app.user.token// app.user.token
    },
    data
  })
  .then((response) => {
    console.log('Response is ', response)
    app.gameID = response.gameID
  })
}

/* const passwordReset = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data
  })
} */

// delete if game breaks
// const updateGame = function () {
  // return  $.ajax({
  //  url: app.host + '/games/' + id,
    // method: 'PATCH'
//   })
// }

/* const updateMoves = function (index, value, over) {
  console.log('updateGameState from api.js ran!')
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
} */

const updateMoves = function (index, value, over) {
  console.log('updateGameState from api.js ran!')
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games/' + store.game.id, // was just id
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token// app.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
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
  updateMoves
}
