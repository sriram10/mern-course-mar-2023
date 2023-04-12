const express = require('express');
const path = require('path');
const rootController = require('./controllers/root.controller');
const articlesRouter = require('./routes/articles.router');
const usersRouter = require('./routes/users.router');

// MVC pattern
// Model - View - Controller
// Model - masterData - array of objects with keys id, title, body
// View - response types -> JSON & HTML
// Controller - Business Logic to process the req data(url, body, params, query)
//   and interact with the model if necessary

// express app object
const app = express();

// to parse the request body data to json
app.use(express.json())
app.use(express.static('public'))

app.use('/home', express.static(path.join(__dirname, 'public')))

// app.use((req, res, next) => {
//   console.log('Middleware 1: Request');
//   next();
//   console.log('Middleware 1: Response');
// })
// app.use((req, res, next) => {
//   console.log('Middleware 2: Request');
//   next();
//   console.log('Middleware 2: Response');
// })
// app.use((req, res, next) => {
//   console.log('Middleware 3: Request');
//   next();
//   console.log('Middleware 3: Response');
// })
// app.use('/users', (req, res, next) => {
//   console.log('Middleware 4: Request');
//   next();
//   console.log('Middleware 4: Response');
// })

app.get('/', rootController.getHomePage)
app.use('/users', usersRouter)
app.use('/articles', articlesRouter)

// handle unmatched urls / routes
app.get('*', rootController.getNotFoundPage)

// handle unmatched urls / routes
app.post('*', rootController.getNotFoundJson)

app.listen(4444, () => {  
  console.log('Server is running on port 4444');
})