// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  _id: { type: Number, required: true, unique: true},  
  isbn: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  book_title: { type: String, required: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
