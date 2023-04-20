const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const morgan = require('morgan');
const { checkConnection } = require('./config/dbConnection');
const mongoose = require('mongoose');

const productsRouter = require('./routes/products/products.router');
const cartRouter = require('./routes/cart/cart.mongoose.router');
const usersRouter = require('./routes/users/users.router');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json()); // parses data posted on any request and store it as an object under req.body

app.use(morgan('combined'));

app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/users', usersRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    message: 'Not found',
  })
})

mongoose.connection.once('open', () => {
  console.log('Mongoose: Connection Successful');
})

mongoose.connection.on('error', (err) => {
  console.log('Mongoose: Error connecting to DB', err);
})

checkConnection(() => {
  app.listen(PORT, async () => {
    await mongoose.connect(process.env.DB_URI, {
      dbName: process.env.DB_NAME,
    })
    console.log(`Server Started. Listening on port ${PORT}`);  
  })
})
.catch((error) => {
  console.log('Error connecting to DB', error);
})
