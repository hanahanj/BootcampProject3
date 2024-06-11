const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  shirts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Shirt'
    }
  ]
});

const Order = model('Order', orderSchema);

module.exports = Order;
