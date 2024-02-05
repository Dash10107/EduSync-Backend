const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticeSchema = new Schema({
  title: {
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
  // You can add other fields as needed, like admin/subadmin ID, etc.
});

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;
