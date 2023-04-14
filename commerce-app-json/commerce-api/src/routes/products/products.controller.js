const products = require('../../models/products.model');

function getAllProducts(req, res) {
  res.json({
    data: products
  })
}

function getProduct(req, res) {
  const result = products.find(item => item.id === Number(req.params.productId));
  if (!result) {
    res.json({
      message: 'Product not found',
    })
    return;
  }
  res.json({
    data: result,
  })
}

function createProduct(req, res) {
  res.json({
    message: 'Product created',
  })
}

function updateProduct(req, res) {
  res.json({
    message: 'Product updated',
  })
}

function deleteProduct(req, res) {
  res.json({
    message: 'Product deleted',
  })
}

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}