const express = require('express')
const users = require('./users')
const path = require('path');
var cors = require('cors')

module.exports = app => {
  app.use(
    express.urlencoded({ extended: false }),
    express.json(),
    cors(),
    express.static(path.join(__dirname + '/../../../Views')),
    users
  )
}