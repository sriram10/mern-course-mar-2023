const cartRouter = require('express').Router();
const {
  getCartItems,
  deleteCart,
  addToCart,
  updateCartItem,
  removeItemFromCart
} = require('./cart.mongoose.controller');

cartRouter
  .get('/', getCartItems)
  .post('/', addToCart)
  .delete('/', deleteCart)
  .put('/:productId', updateCartItem)
  .delete('/:productId', removeItemFromCart);

module.exports = cartRouter;