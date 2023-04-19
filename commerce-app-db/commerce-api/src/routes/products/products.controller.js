const {
  totalProducts,
} = require('../../models/products.model');
const getDataFromCollection = require('../../data/getDataFromCollection');
const addDataToCollection = require('../../data/addDataToCollection');
const getDataByIdFromCollection = require('../../data/getDataByIdFromCollection');

const COLLECTION_NAME = 'products';

async function getAllProducts(req, res) {
  const products = await getDataFromCollection(COLLECTION_NAME);
  const totalItems = await totalProducts();

  res.json({
    data: products,
    totalProducts: totalItems,
  })
}

async function getProduct(req, res) {
  const id = req.params.productId;

  const result = await getDataByIdFromCollection(COLLECTION_NAME, id)
  res.json({
    message: 'Product found',
    data: result
  })
}

async function createProduct(req, res) {
  const { title, description, price, image } = req.body;

  const newProduct = {
    title,
    description,
    price,
    image
  }

  const result = await addDataToCollection(COLLECTION_NAME, newProduct)
  res.json({
    message: 'Product created',
    data: result
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