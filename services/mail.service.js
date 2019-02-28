var transport = require('../config/transport-mail');
var ejs = require('ejs');
var jwt = require('jsonwebtoken');

sendVerificationCode = function(fromMail, toMail, code, callback) {
  ejs.renderFile(__dirname + '/../views/register-mail.ejs', {email: toMail, someCode: code}, function(err, str) {
    if(err) callback(err);
    // setup email data with unicode symbols
    let mailOptions = {
      from: fromMail, // sender address
      to: toMail, // list of receivers
      subject: 'Email From AtsAcademy', // Subject line
      html: str
    };

    console.log(mailOptions)

    // send mail with defined transport object
    transport.sendMail(mailOptions, (error, info) => {
      callback(error, info);
    });
  });
}

sendTokenForgotPassword = function(fromMail, toMail, baseUrl, callback){
  const someCode = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  const payload = {
    'email': toMail,
    'otp': someCode
  }
  var token = jwt.sign(payload, 'secretkey', {
    expiresIn: '10m'
  });
  ejs.renderFile(__dirname + '/../views/reset-password-mail.ejs', {email: toMail, token: token, baseUrl: baseUrl}, function(err, str) {
    if(err) callback(err);
    // setup email data with unicode symbols
    let mailOptions = {
      from: fromMail, // sender address
      to: toMail, // list of receivers
      subject: 'Reset Password', // Subject line
      html: str
    }

    console.log(mailOptions)

    // send mail with defined transport object
    transport.sendMail(mailOptions, (error, info) => {
      callback(error, info);
    });
  });
}



sendNotificationMail = function(fromMail, toMailArr, notification, callback) {

  console.log(toMailArr);
  ejs.renderFile(__dirname + '/../views/notification-mail.ejs', {title: notification.notificationTitle, message: notification.notificationBody }, function(err, str) {
    if(err) callback(err);

    let mailOptions = {
      from: fromMail,
      to: toMailArr,
      subject: 'Notification from AtsAcademy',
      html: str
    }

    console.log(mailOptions);

    transport.sendMail(mailOptions, (error, info) => {
      callback(error, info);
    });
  });
}


function sendWelcomeMail(fromMail, toMail, callback) {
  ejs.renderFile(__dirname + '/../views/welcome-mail.ejs', {email: toMail}, function(err, str) {
    if(err) callback(err);
    // setup email data with unicode symbols
    let mailOptions = {
      from: fromMail, // sender address
      to: toMail, // list of receivers
      subject: 'Email From AtsAcademy', // Subject line
      html: str
    };

    console.log(mailOptions)

    // send mail with defined transport object
    transport.sendMail(mailOptions, (error, info) => {
      callback(error, info);
    });
  });
}





sendUserApprovalMail = function(fromMail, toMail,authCreds,callback){
  ejs.renderFile(__dirname + '/../views/user-approval-mail.ejs',{email:toMail,username: authCreds.userId},function(err,str){
  if(err) callback(err);

  let mailOptions = {
    from: fromMail,
    to: toMail,
    subject: 'New user approval',
    html : str
  }
  console.log(mailOptions);

  transport.sendMail(mailOptions, (error, info) => {
    callback(error, info);
    });
  });
}



module.exports = {
  sendVerificationCode: sendVerificationCode,
  sendTokenForgotPassword: sendTokenForgotPassword,
  sendPartnersOfferMail: sendPartnersOfferMail,
  sendWelcomeMail: sendWelcomeMail,
  sendNotificationMail: sendNotificationMail,
  sendOnboardingUserMail: sendOnboardingUserMail,
  sendUserApprovalMail : sendUserApprovalMail
}
