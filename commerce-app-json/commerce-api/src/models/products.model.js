const dbData = require('../data/db.json');
// const fs = require('fs');
const path = require('path');

module.exports = {
  products: dbData.products,
  totalProducts: dbData.totalProducts,
  dataSource: path.join(__dirname, '..', 'data', 'db.json'),
  productsModelData: dbData
};