const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    tel: {
        type: Number,
        require: true
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;