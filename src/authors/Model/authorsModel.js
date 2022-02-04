const mongoose = require('mongoose');
const authorSchema = require('../Schema/authorsSchema');


const Author = mongoose.model('Author' , authorSchema );

module.exports = Author;