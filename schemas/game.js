const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId }} = Schema;
const gameSchema = new Schema({
    Gname: {
        type: String,
        required: true,
    },
    Gmemory: {
        type: String,
        required: true,
    },
    GGraphic: {
        type: String,
        required: true,
    },
    GOSys: {
        type: String,
        required: true,
    },
    Gprocessor: {
        type: String,
        required: true,
    },
    Gstorage: {
        type: String,
        required: true,
    },
    GDirectX: {
        type: String,
        required: true,
    },
    GFile: {
        type: String,
        required: true,
    },
    Gid: {
        type: Number,
        required: true,
        unique: true,
    },
    Gdescript: {
        type: String,
        required: true,
    },
    Guploader: {
        type: ObjectId,
        required: true,
        ref: 'User',
        ref: 'Enterprise',
    },
    Gdate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    Gnumber: {
        type: String,
        required: true, 
    },
    Gprice: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Game', gameSchema);