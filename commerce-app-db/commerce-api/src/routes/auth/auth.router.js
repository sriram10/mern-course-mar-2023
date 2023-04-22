const { loginUser, registerUser } = require('./auth.controller');

const authRouter = require('express').Router();

authRouter
.post('/login', loginUser)
.post('/register', registerUser);


module.exports = authRouter;