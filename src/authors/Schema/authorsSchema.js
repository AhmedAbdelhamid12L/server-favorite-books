const { Schema } = require('mongoose');


const authorSchema = new Schema(
  {
    name: String,
    age: Number
  }
);

module.exports = authorSchema;