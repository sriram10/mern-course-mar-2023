const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const productsRouter = require('./routes/products/products.router');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.use('/products', productsRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    message: 'Not found',
  })
})

app.listen(PORT, () => {
  console.log(`Server Started. Listening on port ${PORT}`);  
})
