/**
 * Create a Simple logger
 * To read and write to a log file
 * For Requests & Responses: req.log
 * For Errors: err.log
 */

const fs = require("fs");

const logTime = () => {
  const d = new Date()
  return `${d.getSeconds()}.${d.getMilliseconds()}`
}

// Sync and Async ways
console.log('START', logTime())

// Sync way - Blocking
const data = fs.readFileSync('./req.log', 'utf8')
console.log('Sync Data from req >> ', logTime(), data.length)

// Async way - Non-Blocking
// Error First pattern
fs.readFile('./req.log', 'utf8', (err, data) => {
  console.log('Async Data from file', logTime(), err, data.length)
})

console.log('First Line', logTime())
