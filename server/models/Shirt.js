const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedShirts` array in User.js
const shirtSchema = new Schema({
  color: {
    type: String,
    required: true,
  },
  sizes: [
    {
      type: String,
      trim: true,
    },
  ],
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Shirt = model('Shirt', shirtSchema);

module.exports = Shirt;
