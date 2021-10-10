const express = require('express')
const users = require('./users')
const terms = require('./terms')
const path = require('path');
const cors = require('cors')

module.exports = app => {
  app.use(
    express.urlencoded({ extended: false }),
    express.json(),
    cors(),
    express.static(path.join(__dirname + '/../../../Views')),
    users,
    terms
  )
}