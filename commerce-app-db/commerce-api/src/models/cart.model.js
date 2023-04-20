const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1,
  }
})

// carts
const cartModel = mongoose.model('Cart', cartSchema);

cartModel.watch().on('change', (data) => {
  console.log('Cart Modified', data)
})

let cartData = [];
module.exports = {
  cartData,
  cartModel
}