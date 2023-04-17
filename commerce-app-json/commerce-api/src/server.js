const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const morgan = require('morgan');

const productsRouter = require('./routes/products/products.router');
const cartRouter = require('./routes/cart/cart.router');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json()); // parses data posted on any request and store it as an object under req.body

app.use(morgan('combined'));

app.use('/products', productsRouter);
app.use('/cart', cartRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    message: 'Not found',
  })
})

app.listen(PORT, () => {
  console.log(`Server Started. Listening on port ${PORT}`);  
})
