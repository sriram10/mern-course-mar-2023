const fs = require("fs");
const path = require("path");

const logger = (req) => {
  const logString = `${new Date().toISOString()} | ${req.method} | ${req.url} | ${req.headers.host}\n`;
  fs.writeFile(path.join(__dirname, 'application.log'), logString, {
    flag: 'a'
  }, (err) => {
    console.log('Done Writing log', err) 
  })
}

module.exports = logger;
