const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bootcamp", {});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : String,
    password : String
});

const User = mongoose.model("user", userSchema);

module.exports = User;