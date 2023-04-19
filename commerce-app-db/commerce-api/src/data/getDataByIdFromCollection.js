const { ObjectId } = require('mongodb')
const { dbClient } = require('../config/dbConnection');

async function getDataByIdFromCollection(collectionName, id) {
  try {
    await dbClient.connect();
    const db = dbClient.db(process.env.DB_NAME);
    const result = await db.collection(collectionName).findOne({ _id: new ObjectId(id) });
    return result;
  } catch(err) {
    console.log(err);
    return {};
  } finally {
    dbClient.close();
  }
}

module.exports = getDataByIdFromCollection;