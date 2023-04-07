// Simple HTTP server to handle few req & responses
const fs = require("fs");
const path = require("path");
const http = require("http");
const EventEmitter = require("events");

const filePath = path.join(__dirname,'db.json');

const server = http.createServer()
const handleRequests = new EventEmitter(); // creating a event emitter instance for "handleRequests"

handleRequests.on('GET:articles', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
      if (err.code === 'ENOENT') { // Error NO ENTry
        fs.writeFile(filePath, JSON.stringify({
          articles: []
        }), (err) => {
          if (err) {
            console.log(err)
            res.statusCode = 500;
            res.end(JSON.stringify(err));
          } else {
            res.write(JSON.stringify([]))
            res.end()
          }
        })
      } else {
        console.log(err)
        res.statusCode = 500;
        res.end(JSON.stringify(err));
      }
    } else {
      const result = JSON.parse(data);
      res.write(JSON.stringify(result?.articles))
      res.end()
    }
  })
})

// registering a custom event using handleRequests eventEmitter Instance
handleRequests.on('POST:articles', (req, res) => {
  const dataFromJsonFile = fs.readFileSync(filePath, 'utf8')
  const fileData = JSON.parse(dataFromJsonFile);
  let reqData = {};
  req.on("data", (body) => {
    reqData = JSON.parse(body.toString())
  })

  // this will get triggered once the request is over - we read all the req data
  req.on('end', () => {
    if (Array.isArray(fileData?.articles)) {
      fileData.articles.push(reqData);
      fs.writeFile(filePath, JSON.stringify(fileData), (err) => {
        if(err) {
          res.statusCode = 500;
          res.end();
        } else {
          res.write(JSON.stringify({ status: 'success', message: 'Article added successfully' }))
          res.end()
        }
      })
    }
  })
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
  // Mandatory things in Response
  /**
   * - Status Code
   * - Headers (Content-Type, Content-Length, ...)
   * - Body
   */

  switch(`${req.method}:${req.url}`) {
    case 'GET:/articles':
      console.log('articles GET API')
      handleRequests.emit('GET:articles', req, res)
      break;
    case 'POST:/articles':
      console.log('articles POST API')
      handleRequests.emit('POST:articles', req, res)
      break;
    case 'GET:/users':
      handleRequests.emit('GET:users', req, res)
      break;
    default:
      res.statusCode = 404;
      res.end('<h1>Page Not Found: 404</h1>')
  }
})

server.listen(4000, () => {
  console.log('Server is running on port 4000');
})
