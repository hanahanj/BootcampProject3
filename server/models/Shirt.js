const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedShirts` array in User.js
const shirtSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  }
});

const Shirt = model('Shirt', shirtSchema);

module.exports = Shirt;
