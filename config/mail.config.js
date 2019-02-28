const nodemailer = require('nodemailer');
const config = require('./config');
var transport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: config.mail.nodemailer_auth_user,
    pass: config.mail.nodemailer_auth_password
  }
});

module.exports = transport;