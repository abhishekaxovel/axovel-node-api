const LogIn = require('../models/logIn.model');
const User = require('../models/user.model');
const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.user_log_in = function (req, res, next) {
    console.log('data here', req.body);
    const email = req.body.logIn.email;
    const password = req.body.logIn.password;
    user = User.User;
    user.findOne({email: email}, function(err, user) {
    if(err) return next(err);
    if(user){
        let role = user.role;
        let email = user.email;
        Bcrypt.compare(password, user.password).then (function(data){
            console.log('data here', data);
            if(data){
                console.log('success', data);
                return res.status(200)
                .json({token: jwt.sign({ data: data, role: role, user}, 'APIs', {
                        expiresIn: 60 * 24 // expires in 24 hours
                })}); 
            }else{
                console.log('not correct', data);
                return res.status(200) 
                .json(data);
            }
         });
        }
    })  
};

    exports.is_user_log_in = function isLoggedIn (req, res, next) {
        if (!(req.body && req.body.user)) {
        return res.send('Not logged in!');
        }
        next();
    };


    exports.is_user_log_out = function (req, res, next) {
        console.log('user log out');
        req.body.user = null;
     };









