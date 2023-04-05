// Simple HTTP server to handle few req & responses
const http = require("http");
const EventEmitter = require("events");
const logger = require("./logger/logger");

const server = http.createServer()
const handleRequests = new EventEmitter(); // creating a event emitter instance for "handleRequests"

// registering a custom event using handleRequests eventEmitter Instance
handleRequests.on('posts', (req, res) => {
  console.log('POST API')
  if (req.method === "POST") {
    req.on("data", (body) => {
      const reqData = JSON.parse(body.toString())
      console.log(JSON.parse(body.toString()));
      res.end(JSON.stringify(reqData))
    })
  } else {
    res.end('<h1>POST API</h1>')
  }
})

// registering a custom event using handleRequests eventEmitter Instance
handleRequests.on('users', (req, res) => {
  console.log('USERS API')
  res.end('<h1>USERS API</h1>')
})

// using a pre-defined event "request" from server instance (internally uses event-emitter)
server.on('request', (req, res) => {
  // Mandatory Things in Request
  /**
   * - URL
   * - Method (GET / POST / PUT / PATCH / DELETE)
   * - Headers (Content-Type, Authorization, Accept, Content-Length, ...)
   * - Body
   */
  // console.log(req.url, req.method, req.headers);
  logger(req)

  // Mandatory things in Response
  /**
   * - Status Code
   * - Headers (Content-Type, Content-Length, ...)
   * - Body
   */
  
  if (req.url === '/posts') {
    handleRequests.emit('posts', req, res)
  } else if (req.url === '/users') {
    handleRequests.emit('users', req, res)
  } else {
    // res.writeHead(404, { 'Content-Type': 'text/html' });
    res.statusCode = 404;
    res.end('<h1>Page Not Found: 404</h1>')
  }
})

server.listen(4000, () => {
  console.log('Server is running on port 4000');
})
