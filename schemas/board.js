const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema; 
const boardSchema = new Schema({
    boardid: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    writer: {
        type: ObjectId,
        required: true,
        ref: 'User',
        ref: 'Enterprise',
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    step: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Board', boardSchema);