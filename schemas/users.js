const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    birth: {
        type: Date,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    gupload: {
        type: String,
        require: true,
    },
    gbuylist: {
        type: String,
        required: true,
    },
    walletAddress: {
        type: String,
    },
    img: {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);