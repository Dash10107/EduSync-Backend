const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  testName: {
    type: String,
    required: true,
  },
  testScores: [{
    studentId: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Assuming studentId refers to the User model
      required: true,
    },
    marks: {
      type: Number,
      required: true,
      max: 100, 
      min:0
    },
  }],
  
});

module.exports = testSchema;

