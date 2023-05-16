const mongoose = require("mongoose");
const kisanRegister = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    contact: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('User', kisanRegister);