let { cartData } = require("../../models/cart.model");
const { products } = require('../../models/products.model');

function getCartItems(req, res) {
  res.json({
    data: cartData
  })
}

function deleteCart(req, res) {
  cartData = [];
  res.json({
    message: 'Cart Deleted',
  })
}

function addToCart(req, res) {
  const id = Number(req.body.id);

  const product = products.find(item => item.id === id);

  if (!product) {
    res.status(400).json({
      message: 'Unknown product!',
    })
    return;
  }

  const productIndexFromCart = cartData.findIndex(item => {
    return item.id === id;
  })

  let message = 'New Item added to Cart';
  if(productIndexFromCart === -1) {
    cartData.push({
      id,
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  } else {
    message = 'Updated Item in Cart';
    cartData[productIndexFromCart].quantity += 1
  }

  res.json({
    data: cartData,
    message,
  })
}

function updateCartItem(req, res) {
  const id = Number(req.params.productId);
  const { quantity } = req.body;

  const product = products.find(item => item.id === id);
  if (!product) {
    res.status(400).json({
      message: 'Unknown product!',
    })
    return;
  }

  const productIndexFromCart = cartData.findIndex(item => {
    return item.id === id;
  })

  if(productIndexFromCart === -1) {
    res.status(400).json({
      message: 'Product not found in cart!',
    })
    return;
  }

  if(quantity > 0) {
    cartData[productIndexFromCart].quantity = quantity
  } else if (quantity === 0) {
    cartData = cartData.filter(item => item.id !== id);
  } else {
    res.status(400).json({
      message: 'Invalid quantity!',
    })
    return;
  }

  res.json({
    message: 'Cart Updated',
  })
}

function removeItemFromCart(req, res) {
  const id = Number(req.params.productId);

  const productIndexFromCart = cartData.findIndex(item => {
    return item.id === id;
  })

  if(productIndexFromCart === -1) {
    res.status(400).json({
      message: 'Product not found in cart!',
    })
    return;
  }

  cartData = cartData.filter(item => item.id !== id);

  res.json({
    message: 'Item removed from Cart',
  })
}

module.exports = {
  getCartItems,
  deleteCart,
  addToCart,
  updateCartItem,
  removeItemFromCart
}