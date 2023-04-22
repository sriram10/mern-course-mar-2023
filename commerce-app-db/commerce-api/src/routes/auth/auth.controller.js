const jwt = require('jsonwebtoken');
const { UserModel } = require("../../models/users.mongoose.model");

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5m' });
}

async function registerUser(req, res) {
  const { firstName, lastName, email, mobile, password, address } = req.body;
  const newUser = new UserModel({
    firstName,
    lastName,
    email,
    mobile,
    password, // must hash password - some common methods to hash - bcrypt, scrypt, argon
    address,
  })

  const result = await newUser.save();

  if(!result) {
    res.json({
      message: 'Registration failed'
    })
    return;
  }

  res.json({
    message: 'Registration success',
    token: generateToken({ id: result._id })
  })
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email, password });
  
  if(!user) {
    res.json({
      message: 'Email or Password wrong.'
    })
    return;
  }
  
  console.log('USER', user)
 
  res.json({
    message: 'Login success',
    token: generateToken({ id: user._id })
  })
}

module.exports = {
  registerUser,
  loginUser
}