const LogIn = require('../models/logIn.model');
const User = require('../models/user.model');
const Bcrypt = require('bcrypt');


exports.user_log_in = function (req, res, next) {
    console.log('data here', req.body);
    const email = req.body.logIn.email;
    var password = req.body.logIn.password;

    // const password = Bcrypt.compareSync(req.body.logIn.password, req.body.logIn.password);
    // Bcrypt.compareSync(req.body.logIn.password, user.password);
    // console.log('password', req.body.logIn.password);

    req.body.logIn.password = Bcrypt.compareSync(req.body.logIn.password, password);
    if (req.body.logIn.password) {
        console.log("Password correct");
    } else {
        console.log("Password wrong");
    }
    console.log('password', req.body.logIn.password);
    user = User.User;   
    user.findOne({email: email, password: password}, function(err, user) {
      if(err) return next(err);
      if(!user) return res.send('Not logged in!');
      req.body.user = email;
      req.body.user = password;
      return res.send('Logged In!');
   })

};

    exports.is_user_log_in = function isLoggedIn (req, res, next) {
        if (!(req.body && req.body.user)) {
        return res.send('Not logged in!');
        }
        next();
    };


    exports.is_user_log_out = function (req, res, next) {
        req.body.user = null;
     };









