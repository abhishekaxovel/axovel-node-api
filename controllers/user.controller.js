const User = require('../models/user.model');
const Bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');

};


exports.user_create = function (req, res, next) {
    console.log('before bycrypt password', req.body.userData.password);
    req.body.userData.password = Bcrypt.hashSync(req.body.userData.password, 8);
    console.log('data here', req.body);
    user = new User.User(req.body.userData);
    user.save(function (err) {
        console.log('user created...', user);
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    });
};


exports.user_details = function (req, res, next) {
    user = User.User;
    user.find(req.body).then(userDoc => {
      if(userDoc) {
        return res.status(200)
          .json(userDoc);
      }else {
        return res.status(404)
          .json({message: "No users found"});
      }
    },err => {
      return next(err);
    });
};


exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};


exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

