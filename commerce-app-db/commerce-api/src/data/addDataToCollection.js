const { dbClient } = require('../config/dbConnection');

async function addDataToCollection(collectionName, documentObj) {
  try {
    await dbClient.connect();
    const db = dbClient.db(process.env.DB_NAME);
    const collection = await db.collection(collectionName);
    const results = await collection.insertOne(documentObj);
    return results;
  } catch(err) {
    console.log(err);
    return {
      failed: true,
      message: err.message
    };
  } finally {
    dbClient.close();
  }
}

module.exports = addDataToCollection;