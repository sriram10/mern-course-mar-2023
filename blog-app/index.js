const express = require('express');
const path = require('path');
const rootController = require('./controllers/root.controller');
const articlesRouter = require('./routes/articles.router');
const usersRouter = require('./routes/users.router');
const dotenv = require('dotenv');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
console.log(process.env.APP_VERSION, process.env.API_VERSION, process.env.NODE_ENV);

// MVC pattern
// Model - View - Controller
// Model - masterData - array of objects with keys id, title, body
// View - response types -> JSON & HTML
// Controller - Business Logic to process the req data(url, body, params, query)
//   and interact with the model if necessary

// express app object
const app = express();

// app.set("x-powered-by", false);
// app.set("case sensitive routing", true);
app.set('views', '/views'); // default is "/views"
app.set('view engine', 'hbs');

// to parse the request body data to json
app.use(express.json())
app.use(express.static('public'))

app.get('/view', (req, res) => {
  res.render('index', {
    pageTitle: 'View Home',
    header: 'Home Page of View'
  })
})

app.get('/about', (req, res) => {
  res.render('test.html', {
    pageTitle: 'About Page',
    header: 'About us'
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    pageTitle: 'Contact Page',
    header: 'Contact Us',
    contactContent: 'Email ID: k8w8@example.com'
  })
})

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