const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
const postSchema = require("./Post");
const formSchema = require("./Form");
const testSchema = require("./Test");
const discussionSchema = require("./Discussion");

const classroomSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: User, // Reference to the User model for the faculty member
    },
    students: [{
      type: Schema.Types.ObjectId,
      ref: User, // Reference to the User model for students
    }],

    posts: [postSchema],
    forms: [formSchema],
     test: [testSchema],
     discussions: [discussionSchema], // Add discussions array
  });

  const Classroom = mongoose.model('Classroom', classroomSchema);

  module.exports = Classroom;