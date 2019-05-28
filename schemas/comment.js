const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema; 
const commentSchema = new Schema({
    cid: {
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
    cwriter: {
        type: ObjectId,
        required: true,
        ref: 'User',
        ref: 'Enterprise',
    },
    comdate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    boardno: {
        type: Number,
        required: true,
        ref: 'Board',
    }
});

module.exports = mongoose.model('comment', commentSchema);