const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/demoProject")

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    lastName: {
        type: String
    },
    mobileNo: {
        type: String
    },
    gender: {
        type: String
    },
}, {
    timestamps: true
});

const userModel = mongoose.model("user", userSchema)
module.exports = userModel