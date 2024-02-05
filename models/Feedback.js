// feedbackModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  subAdminId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming User model for subadmins
    required: true,
  },
  feedbackMessage: {
    type: String,
    required: true,
  }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback