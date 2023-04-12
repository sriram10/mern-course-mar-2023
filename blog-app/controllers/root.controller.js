const path = require('path');

function getHomePage(req, res) {
  res.send('<h1>Hello World! This is home page</h1>');
}

function getNotFoundPage(req, res) {
  res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
}

function getNotFoundJson(req, res) {
  res.status(404).json({
    message: 'Route not found'
  });
}

module.exports = {
  getHomePage,
  getNotFoundPage,
  getNotFoundJson
}