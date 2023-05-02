// require('dotenv').config();
// const api = process.env.SECRET_KEY;
const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
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
    // tokens: [{
    //     token: {
    //         type: String,
    //         require: true,
    //     }
    // }]
});
module.exports = mongoose.model('User', kisanRegister);
// kisanRegister.methods.generateAuthToken = async function () {
//     try {
//         const token = jwt.sign({ _id: this._id.toString() }, "Kisan_app_authentication");
//         this.tokens = this.tokens.concat({ token: token });
//         await this.save();
//         return token;
//     } catch (e) {
//         console.log(e);
//     }
// }
// kisanRegister.pre("save", async function (next) {
//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 10);
//         this.confirm_password = this.password;
//         //   this.confirm_password=await bcrypt.hash(this.confirm_password,10);
//         console.log(this.password);
//         console.log(this.confirm_password);
//         //      this.confirm_password=undefined;
//     }
//     next();
// });
// const NewKisanRegister = new mongoose.model("NewKisanRegister", kisanRegister);
// module.exports = NewKisanRegister;