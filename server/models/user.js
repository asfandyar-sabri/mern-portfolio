const mongoose = require('mongoose');

const users = new mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "phone": {
        type: Number,
        required: true
    },
    "work": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
    "cpassword": {
        type: String,
        required: true
    }
})

const user = mongoose.model('users', users)

module.exports = user