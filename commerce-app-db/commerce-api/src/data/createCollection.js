const { dbClient } = require("../config/dbConnection");

async function createCollection(collectionName, validationShema) {
  try {
    await dbClient.connect();
    const db = await dbClient.db(process.env.DB_NAME);
    const collections = await db.collections();

    const exists = collections.some((col) => col.collectionName === collectionName);

    if(!exists) {
      const result = await db.createCollection(collectionName, {
        validator: validationShema
      });

      console.log('Created: ', result);

      return { created: true };
    }

    return { alreadyExist: true };
  } catch(err) {
    console.log(err);
    return [];
  } finally {
    dbClient.close();
  }
}

module.exports = createCollection;
