const sumEverything = require("./sample2");
const http = require("http");
const process = require("process");
const EventEmitter = require("events");

const friend = new EventEmitter(); // creating a event emitter instance for "friend"

friend.on("post", (message) => {
  console.log('Friend posted a message', message)
})

friend.on("friend_request", (personName) => {
  console.log('New friend request', personName)
})

const [,, ...restOfArgs] = process.argv;

function sample() {
  return {
    x: 12,
    y: 'Sample Text',
    z: 456
  }
}

function add(x,y) {
  return Number(x) + Number(y)
}

console.log(add(restOfArgs[0], restOfArgs[1]))
console.log(sumEverything(...restOfArgs))
console.log(sample())

const serverInstance = http.createServer();

serverInstance.on("request", (request, response) => {
  console.log(request.url, request.method);
  friend.emit('friend_request', 'John');
  response.write(`<h1>Hello from Node JS</h1>`);
  response.write(`<h1>You tried to access > ${request.url}</h1>`);
  response.end()
})

serverInstance.listen({ port: 3000 }, () => {
  console.log('Server is running on port 3000');
});
