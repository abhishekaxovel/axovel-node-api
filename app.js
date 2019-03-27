const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());


// routes
const user = require('./routes/user.route'); 


// email

// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;

// const oauth2Client = new OAuth2(
//     "939678498853-j376lpsnrras6ncaiuporjlubi875o07.apps.googleusercontent.com", // ClientID
//     "y976R3Muxyr4V38y--J2iFqf", // Client Secret
//     "https://developers.google.com/oauthplayground" // Redirect URL
// );

// oauth2Client.setCredentials({
//     refresh_token: "1/3EvYz-oNVmMfEYwfv5pkMlgOxprtGyZ4faAUwigy6Aw"
// });
// const tokens = oauth2Client.refreshAccessToken()
// const accessToken = tokens.credentials.access_token

// const smtpTransport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//          type: "OAuth2",
//          user: "abhishek.axovel@gmail.com", 
//          clientId: "939678498853-j376lpsnrras6ncaiuporjlubi875o07.apps.googleusercontent.com",
//          clientSecret: "y976R3Muxyr4V38y--J2iFqf",
//          refreshToken: "1/3EvYz-oNVmMfEYwfv5pkMlgOxprtGyZ4faAUwigy6Aw",
//          accessToken: accessToken
//     }
// });

// const mailOptions = {
//     from: "abhishek.axovel@gmail.com",
//     to: "abhishek1512s@gmail.com",
//     subject: "Node.js Email with Secure OAuth",
//     generateTextFromHTML: true,
//     html: "<b>test</b>"
// };


// smtpTransport.sendMail(mailOptions, (error, response) => {
//     error ? console.log(error) : console.log(response);
//     smtpTransport.close();
// });

// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 587,
//     auth: {
//         user: 'abhishek1512s@gmail.com',
//         pass: ''
//     }
//   });
//   var mailOptions = {
//     from: 'abhishek1512s@gmail.com',
//     to: 'abhishek.axovel@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'hello axovel....'
//   };
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log('errorrrr...',error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });



// Set up mongoose connection
const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://axovel:axovel@123@ds123619.mlab.com:23619/axovel';
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);

// local mongoDB connection
mongoose.connect('mongodb://localhost:27017/axovel');

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', user);

let port = 3200;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});