const fs = require('fs');
const {
  products,
  totalProducts,
  dataSource,
  productsModelData
} = require('../../models/products.model');

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
  const { title, description, price, image } = req.body;

  const newProduct = {
    id: totalProducts + 1,
    title,
    description,
    price,
    image
  }

  fs.writeFileSync(dataSource, JSON.stringify({
    ...productsModelData,
    totalProducts: totalProducts + 1,
    products: [...products, newProduct]
  }));

  res.json({
    data: newProduct,
    message: 'Product created',
  })
}

function updateProduct(req, res) {
  const id = Number(req.params.productId);
  
  // check the requested product exists by getting index
  const filteredProductIndex = products.findIndex(item => {
    return item.id === id;
  })

  // return not found if product does not exist
  if (filteredProductIndex === -1) {
    res.status(400).json({
      message: 'Product not found',
    })
    return;
  }

  const existingProduct = products[filteredProductIndex];
  
  // assign existing value if data is not sent in request
  const {
    title = existingProduct.title,
    description = existingProduct.description,
    price = existingProduct.price,
    image = existingProduct.image
  } = req.body;

  const updatedProduct = {
    id: id,
    title,
    description,
    price,
    image
  }

  // update the product by index
  products[filteredProductIndex] = updatedProduct

  fs.writeFileSync(dataSource, JSON.stringify({
    ...productsModelData,
    products: [...products]
  }));

  res.json({
    data: updatedProduct,
    message: 'Product updated',
  })
}

function deleteProduct(req, res) {
  const id = Number(req.params.productId);

  const filteredProducts = products.filter(item => {
    return item.id !== id;
  })

  if (filteredProducts.length === totalProducts) {
    res.status(400).json({
      message: 'Product not found',
    });
    return;
  }

  fs.writeFileSync(dataSource, JSON.stringify({
    ...productsModelData,
    totalProducts: filteredProducts.length,
    products: filteredProducts
  }));

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