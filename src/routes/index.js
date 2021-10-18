const express = require('express')
const users = require('./users')
const path = require('path');

module.exports = app => {
  app.use(
    express.urlencoded({ extended: false }),
    express.json(),
    express.static(path.join(__dirname + '/../../Views')),
    users
  )
}