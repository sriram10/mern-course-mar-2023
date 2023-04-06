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

console.log('START', logTime())

const readStream = fs.createReadStream(__dirname+'/req.log', {
  // encoding: 'utf8',
  highWaterMark: 10
})

const writeStream = fs.createWriteStream(__dirname+'/res.log')

readStream.on('data', (data) => {
  console.log('Read Data using ReadStream >> ', logTime(), data.toString())
  writeStream.write(`${data}\n`) // append a new line for every chunk of data written
})

console.log('Last Line', logTime())
