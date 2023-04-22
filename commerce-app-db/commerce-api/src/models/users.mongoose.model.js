const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  address: String,
})

// users
const UserModel = mongoose.model('User', userSchema);

module.exports = {
  UserModel
}