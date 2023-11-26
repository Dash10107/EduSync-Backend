const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProgressSchema = require("./Progress");
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false, // Default to false for regular users
      },
    progress: [ProgressSchema], 
});

const User = mongoose.model("User",UserSchema);

module.exports = User;