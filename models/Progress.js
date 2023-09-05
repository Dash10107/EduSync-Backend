const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgressSchema = new Schema({
  moduleId: {
    type: Number,
    required: true,
  },
  chapterId: {
    type: Number,
    required: true,
  },
  subchapterId: {
    type: String,
    required: true,
  },
  correctPercentage: {
    type: Number,
    required: true,
  },
});

module.exports = ProgressSchema;
