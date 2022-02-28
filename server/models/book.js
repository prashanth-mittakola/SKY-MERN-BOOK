const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true,
        maxlength:50
    },
    author:{
        type:String,
        trim:true,
        required:true,
        maxlength:50
    },
    description:{
        type:String,
        trim:true,
        required:true,
        maxlength:50
    },
},{timestamps:true});

module.exports = mongoose.model("Book",bookSchema);