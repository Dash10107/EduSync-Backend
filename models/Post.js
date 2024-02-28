const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: {
    type: String, // For text content
  },
  title:{
    type: String, // For text content
  },
  fileUrl: {
    type: String, // For image URL
  },

});
module.exports = postSchema;