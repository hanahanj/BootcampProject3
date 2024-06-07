const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const shirtSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    unique: true,
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
  style: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Shirt = model('Shirt', shirtSchema);

module.exports = Shirt;
