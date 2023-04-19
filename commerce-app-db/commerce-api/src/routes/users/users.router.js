const { addUser, getAllUsers } = require('./users.controller');

const usersRouter = require('express').Router();

usersRouter
.get('/', getAllUsers)
.post('/', addUser);


module.exports = usersRouter;