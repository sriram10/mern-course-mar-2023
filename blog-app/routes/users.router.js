const express = require('express');
const usersController = require('../controllers/users.controller');

const usersRouter = express.Router();

// handle User routes
usersRouter.get('/', usersController.getAllUsers)

module.exports = usersRouter