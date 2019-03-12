const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());


// routes
const user = require('./routes/user.route'); 


// email

// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'abhishek1512s@gmail.com',
//       pass: ''
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
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });




// var mailer = require("nodemailer");
// var smtpTransport = mailer.createTransport("SMTP",{
//     service: "Gmail",
//     auth: {
//         user: "abhishek1512s@gmail.com",
//         pass: "9122975008"
//     }
// });
// var mail = {
//     from: "Abhishek kumar <abhishek1512s@gmail.com>",
//     to: "abhishek.axovel@gmail.com",
//     subject: "Send Email Using Node.js",
//     text: "Node.js New world for me",
//     html: "<b>Node.js New world for me</b>"
// }
// smtpTransport.sendMail(mail, function(error, response){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Message sent: " + response.message);
//     }

//     smtpTransport.close();
// });






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

let port = 4500;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});