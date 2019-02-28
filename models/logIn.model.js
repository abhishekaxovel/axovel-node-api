const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LogInSchema = new Schema({
   
    email: String,
    password: String
});

LogIn = mongoose.model('LogIn', LogInSchema, 'users');
// Export the model
module.exports = {
    LogIn: LogIn
};