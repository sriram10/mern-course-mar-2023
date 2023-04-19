const productsRouter = require('express').Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('./products.controller');

productsRouter
  .get('/', getAllProducts)
  .post('/', createProduct)
  .get('/:productId', getProduct)
  .put('/:productId', updateProduct)
  .delete('/:productId', deleteProduct);

module.exports = productsRouter;