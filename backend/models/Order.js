const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: String,
  product: String,  // Cement or Bricks
  quantity: Number,
  totalPrice: Number,
  phoneNumber: String,
  orderDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
