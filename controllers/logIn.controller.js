const LogIn = require('../models/logIn.model');
const User = require('../models/user.model')


exports.user_log_in = function (req, res, next) {
    console.log('data here', req.body);

    const email = req.body.logIn.email;
    const password = req.body.logIn.password;
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









