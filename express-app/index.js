const express = require('express');
const path = require('path');

const masterData = [
  {
    id: 1,
    title: 'Article 1',
    body: 'This is article 1'
  },
  {
    id: 2,
    title: 'Article 2',
    body: 'This is article 2'
  }
]

// express app object
const app = express();

app.use(express.json())

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

app.get('/', (req, res) => {
  res.send('<h1>Hello World! This is home page</h1>');
})

app.get('/users', (req, res) => {
  console.log('USERS API');
  // res.status(404).sendFile(path.join(__dirname, './404.html'));
  res.send('<h1>Users Page</h1>')
})

app.get(['/articles', '/articles/all'], (req, res) => {
  console.log('Articles API');
  // res.sendFile(path.join(__dirname, './package.json'))
  res.json({
    articles: masterData
  });
})

app.get('/articles/:id', (req, res) => {
  console.log('Articles API', req.params, req.query);
  
  res.json({
    requestedId: req.params.id,
    message: 'Article fetched successfully',
  });
})

app.post('/articles', (req, res) => {
  console.log(req.body);
  const { title, body } = req.body;
  const newArticle = {
    id: masterData.length + 1,
    title,
    body
  };

  masterData.push(newArticle);
  res.send({
    message: 'Article added successfully'
  })
})

// handle unmatched urls / routes
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, './404.html'));
})

// handle unmatched urls / routes
app.post('*', (req, res) => {
  res.status(404).json({
    message: 'Route not found'
  });
})

app.listen(4444, () => {  
  console.log('Server is running on port 4444');
})