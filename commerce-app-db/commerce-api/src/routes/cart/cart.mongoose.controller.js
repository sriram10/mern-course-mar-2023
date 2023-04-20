let { cartModel } = require("../../models/cart.model");

async function getCartItems(req, res) {
  const result = await cartModel.find().catch(err => {
    console.log('Error finding documents', err);
  });

  res.json({
    data: result
  })
}

function deleteCart(req, res) {
  res.json({
    message: 'Cart Deleted',
  })
}

async function addToCart(req, res) {
  const {
    title,
    description,
    price,
    image,
    quantity
  } = req.body;

  // .create(doc) - does plain insert
  // .findOneAndUpdate(filter, update, options)
  // filter - check title & image from existing documents
  // update - update entire data from req.body
  // options
  //    upsert:true > create new document if not found (title & image doesn't match)
  //    new: true >> return document after insert
  //    returnDocument:true > return document after update
  // const result = await cartModel.findByIdAndUpdate({
  const result = await cartModel.findOneAndUpdate({
    title,
    image
  }, {
    title,
    description,
    price,
    image,
    quantity
  }, { new: true, upsert: true, returnDocument: true }).catch(err => {
    console.log('Error creating document', err);
  })

  if (!result) {
    return res.status(400).json({
      message: 'Invalid product!',
    })
  }

  res.json({
    data: result,
    message: 'Added to Cart',
  })
}

async function updateCartItem(req, res) {
  const {
    title,
    quantity
  } = req.body;

  const result = await cartModel.updateOne({
    title,
  }, {
    quantity
  }).catch((err) => {
    console.log('Error updating document', err);
  })

  if (!result) {
    return res.status(400).json({
      message: 'Invalid product!',
    })
  }

  res.json({
    data: result,
    message: 'Cart Updated',
  })
}

async function removeItemFromCart(req, res) {
  const id = req.params.productId;
  
  const result = await cartModel.deleteOne({
    _id: id
  }).catch((err) => {
    console.log('Error deleting document', err);
  })

  if(result?.deletedCount === 0) {
    return res.status(400).json({
      message: 'Invalid product to delete!',
    })
  }

  res.json({
    data: result,
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