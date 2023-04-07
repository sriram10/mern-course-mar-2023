const fs = require("fs");
const http = require("http");

const server = http.createServer();

const dbWrite = fs.WriteStream('db.json', {
  flags: 'w'
});

const dbRead = fs.ReadStream('db.json', 'utf8');

server.on('request', (request, response) => {
  if (request.url === "/data" && request.method === "GET") {
    response.setHeader('Content-Type', 'application/json');
    dbRead.on('data', (data) => {
      response.write(data)
      response.end()
    })
  } else {
    response.end()
  }
})

server.listen({ port: 3000 }, () => {
  console.log('Server is running on port 3000');
  dbWrite.write(JSON.stringify({
    data: []
  }))
})
