// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://seanphilipcruz:Zxcasdqwe123@books.blrziov.mongodb.net/?retryWrites=true&w=majority&appName=books', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Define the Book schema and model
const bookSchema = new mongoose.Schema({
  _id: Number,
  book_title: String,
  book_author: String,
  book_isbn: String,
});

const Book = mongoose.model('Book', bookSchema);

// Routes

// 1. Get all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Get book by ISBN
app.get('/books/isbn/:isbn', async (req, res) => {
  try {
    const book = await Book.findOne({ book_isbn: req.params.isbn });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. Get books by author
app.get('/books/author/:author', async (req, res) => {
  try {
    const books = await Book.find({ book_author: req.params.author });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 4. Get books by title
app.get('/books/title/:title', async (req, res) => {
  try {
    const books = await Book.find({ book_title: req.params.title });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
