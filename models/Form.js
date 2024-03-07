const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formSchema = new Schema({

  title: {
    type: String,
    required: true,
  },
  questions: [{
    questionText: {
      type: String,
      required: true,
    },
    options: [String],
    answer: String, // Adding a field for the answer
  }],
  results: [{
    studentId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    marks: {
      type: Number,
      required: true,
      max: 100, 
      min:0
    },
  }],
  
});



module.exports = formSchema;
