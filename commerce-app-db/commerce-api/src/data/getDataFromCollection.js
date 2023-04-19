const { dbClient } = require('../config/dbConnection');

async function getDataFromCollection(collectionName) {
  try {
    await dbClient.connect();
    const db = dbClient.db(process.env.DB_NAME);
    const results = await db.collection(collectionName).find().toArray();
    return results;
  } catch(err) {
    console.log(err);
    return [];
  } finally {
    dbClient.close();
  }
}

module.exports = getDataFromCollection;