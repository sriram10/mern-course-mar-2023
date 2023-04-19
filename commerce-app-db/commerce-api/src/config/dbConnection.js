const { MongoClient } = require('mongodb');

const dbClient = new MongoClient(process.env.DB_URI);

async function checkConnection(callback) {
  console.log("Starting DB Connection");
  try {
    // Connect the client to the server (optional starting in v4.7)
    await dbClient.connect();
    // Send a ping to confirm a successful connection
    await dbClient.db(process.env.DB_NAME).command({ ping: 1 });
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    callback();
  } catch (error) {
    console.log("Error connecting to DB", error);
  } finally {
    // Ensures that the dbClient will close when you finish/error
    await dbClient.close();
  }
}


module.exports = {
  checkConnection,
  dbClient
};