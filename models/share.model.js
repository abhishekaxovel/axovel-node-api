const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema({
   postId: String,
   postType: String,
   postPercentage: Number,
   competers: [
        {userId: String, userName: String, userVote: Number}
   ],
   totalVotes: Number
});

let userSchema = new Schema({
    userId: String,
    userName: String,
    userEmail: String,
    userPhone: Number,
    userGender: String,
    userAge: Number,
    userAddress: String,
    userState: String,
    userCountry: String,
    userProfileImage: String,
    userDescription: String
});

let signUpSchema = new Schema({
    userId: String,
    userName: String,
    userEmail: String,
    userPhone: Number,
    userPassword: String
})

Vote = mongoose.model('Vote', voteSchema, 'vote');
User = mongoose.model('User', userSchema, 'user');
SignUp = mongoose.model('SignUp', signUpSchema, 'signUp');

module.exports = {
    Vote: Vote,
    User: User,
    SignUp: SignUp
};