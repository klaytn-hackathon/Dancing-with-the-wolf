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
<<<<<<< HEAD
        type: String,
=======
<<<<<<< HEAD
        type: String,
=======
        type: Number,
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76
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
<<<<<<< HEAD
        type: String,
=======
<<<<<<< HEAD
        type: String,
=======
        type: Number,
>>>>>>> c48eda53ad005d633d9044db3dec7fc6061f34cb
>>>>>>> 64e6fa1e6fe17873696d16bacd61932ffd09da76
        required: true,
    },
    gupload: {
        type: String,
    },
    gbuylist: {
        type: String,
    },
    walletAddress: {
        type: String,
    },
    img: {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);