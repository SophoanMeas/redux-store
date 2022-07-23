const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },

  product: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

module.exports = mongoose.model('Order', orderSchema);
