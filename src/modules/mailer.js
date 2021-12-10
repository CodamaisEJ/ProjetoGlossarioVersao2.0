const path = require('path');

const nodemailer = require('nodemailer');

const hbs = require('nodemailer-express-handlebars');

const { HOST, PORT, USER, PASSWORD } = require('../config/mail.json');

console.log(HOST, PORT, USER, PASSWORD) 

const transport = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    auth: {
      user: USER,
      pass: PASSWORD
    }
});

transport.use('compile', hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./src/resources/mail/')
    }, // Template engine
    viewPath: path.resolve('./src/resources/mail/'),  // Path to template
    extName: '.html'               // File extension
}))

console.log(__dirname)
console.log(path.resolve('./src/resources/mail/'))

module.exports = transport;