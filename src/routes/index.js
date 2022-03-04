const express = require('express')
const users = require('./users')
const terms = require('./termos')
const termos = require('./termos')
const notifications = require('./notifications')
const path = require('path');
const cors = require('cors')

module.exports = app => {
  app.use(
    express.urlencoded({ extended: false }),
    express.json(),
    cors(),
    express.static(path.join(__dirname + '/../../../Views')),
    users,
    terms,
    termos,
    notifications
  )
}
