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
    parentEmail:{
        type:String
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
      isSubAdmin:{
        type:Boolean,
        default:false
      },
    progress: [ProgressSchema],
    verified:{
        type:Boolean,
        default:false
    } ,
    formResults: [{
        formId: {
          type: Schema.Types.ObjectId,
          ref: 'Form', // Assuming you have a Test model
        },
        marks: {
            type: Number,
            required: true,
            max: 100, 
            min:0
          },
      }],
      testResults: [{
        testId: {
          type: Schema.Types.ObjectId,
          ref: 'Test', // Assuming you have a Test model
        },
        marks: {
            type: Number,
            required: true,
            max: 100, 
            min:0
          },
      }],
    
});

const User = mongoose.model("User",UserSchema);

module.exports = User;