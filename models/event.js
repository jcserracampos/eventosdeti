import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    dateCreated: {
        type: Date
    }
})

export default eventSchema;