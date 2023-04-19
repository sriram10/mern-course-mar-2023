// const fs = require('fs');
const { dbClient } = require('../config/dbConnection');

async function totalProducts() {
  try {
    await dbClient.connect();
    const db = dbClient.db(process.env.DB_NAME);
    const total = await db.collection('products').countDocuments();
    
    return total;
  } catch(err) {
    console.log(err);
    return 0;
  } finally {
    dbClient.close();
  }
}

module.exports = {
  totalProducts
}

// module.exports = {
//   products: dbData.products,
//   totalProducts: dbData.totalProducts,
//   dataSource: path.join(__dirname, '..', 'data', 'db.json'),
//   productsModelData: dbData
// };