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


exports.update_password = function (req, res, next) {
    console.log('update value', req.body);
    forgot = User.User;
    req.body.forgot.password = Bcrypt.hashSync(req.body.forgot.password, 8);
    console.log('Updated password', req.body.password);
    forgot.findOneAndUpdate({uId: req.body.forgot.uId},{password: req.body.forgot.password}).then( user =>{
        if(req.body.forgot.password){
             console.log('password', req.body.forgot.password);
             return res.status(200) 
             .json(message = 'password updated');
        }
    })
 };

exports.forgot_password = function (req, res, next) {
   forgot = User.User;
   forgot.findOne({email: req.body.forgot.email}).then( user =>{
       if(user.password){
            let uId = user.uId;
            console.log('pass', user.password);
            let link = 'http://localhost:3200/users/update_password' + '/?' + uId;
            return res.status(200) 
            .json(link);
       }
   })
//     err => {
//        console.log('err' , err);
//        return next (err)
//    }
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









