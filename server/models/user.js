const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String, require: true,unique: true
    },
    salt: {
        type: String, require: true
    },
    password: {
        type: String, require: true
    },
    instructor: {
        type: Boolean, require: false
    }


});

const User = mongoose.model("User", userSchema);

module.exports = User;