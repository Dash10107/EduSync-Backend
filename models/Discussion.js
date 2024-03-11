const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./User");
const discussionSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: User, // Reference to the User model for the student
    },
    studentName: {
        type: String,
        required: true,
      },
    content: {
      type: String,
      required: true,
    },
    date: {
        type: Date,
        default: Date.now,
      },
  }, {
    timestamps: true, // Add timestamps for when the message was created
  });

  module.exports = discussionSchema;