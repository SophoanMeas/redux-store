const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },

  description: {
    type: String,
  },

  image: {
    type: String,
  },

  price: {
    type: Number,
    require: true,
    min: 0.9,
  },

  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
