const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
    name: String,
    content: String
}, {
    timestamps: true
});
   

const note= mongoose.model("note",noteSchema)
module.exports = note;