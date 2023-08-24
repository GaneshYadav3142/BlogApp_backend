const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  username: String,
  title: String,
  content: String,
  category: String,
  date: { type: Date, default: Date.now },
  userID: String,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
