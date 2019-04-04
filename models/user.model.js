const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    uId: String,
    firstname: String,
    lastname: String,
    role: String,
    email: String,
    address: String,
    mobile: String,
    country: String,
    password: String
});

User = mongoose.model('User', UserSchema, 'users');
// Export the model
module.exports = {
    User: User
};