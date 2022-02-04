const mongoose = require('mongoose');
const bookSchema = require('../Schema/booksSchema');


const Book = mongoose.model('Book' , bookSchema);

module.exports = Book;