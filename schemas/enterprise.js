const mongoose = require('mongoose');

const { Schema } = mongoose;
const enterpriseSchema = new Schema({
    Ename: {
        type: String,
        required: true,
    },
    Epassword: {
        type: String,
        required: true,
    },
    Ephoneno: {
        type: Number,
        required: true,
    },
    Rname: {
        type: String,
        required: true,
    },
    Rmobile: {
        type: Number,
        required: true,
    },
    Rphoneno: {
        type: Number,
        required: true,
    },
    Remail: {
        type: String,
        required: true,
        unique: true,
    },
    Egupload: {
        type: String,
        required: true,
    },
    EwalletAddress: {
        type: String,
        required: true,
    },
    Eimg: {
        type: String,
    }
});

module.exports = mongoose.model('Enterprise', enterpriseSchema);