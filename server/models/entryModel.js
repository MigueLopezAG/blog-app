const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        require: true
    },
    author:{
        type: String,
        trim: true,
        require: true
    },
    content:{
        type: String,
        trim: true,
        require: true
    }
}, { timestamps: true });

const Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;