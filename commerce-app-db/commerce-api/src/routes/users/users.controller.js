const addDataToCollection = require("../../data/addDataToCollection");
const createCollection = require("../../data/createCollection");
const getDataFromCollection = require("../../data/getDataFromCollection");
const { usersValidationSchema } = require("../../models/users.model")

const USER_COLLECTION = 'users';

async function createUserCollection(req, res) {
  const result = await createCollection(USER_COLLECTION, usersValidationSchema);

  res.json({
    data: result
  })
}

async function addUser(req, res) {
  const { email, password, name, mobile } = req.body;

  const result = await addDataToCollection(USER_COLLECTION, {
    email,
    password,
    name,
    mobile
  })

  if (result?.failed) {
    res.json({
      message: result.message
    })
    return;
  }

  res.json({
    message: 'User created',
    data: result
  })
}

async function getAllUsers(req, res) {
  const result = await getDataFromCollection(USER_COLLECTION)

  res.json({
    data: result
  })
}

module.exports = {
  // createUserCollection,
  addUser,
  getAllUsers
}