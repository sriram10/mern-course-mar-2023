const articles = require("../models/articles.model");

function getAllArticles(req, res){
  console.log('Articles API');
  // res.sendFile(path.join(__dirname, './package.json'))
  res.json({
    articles: articles
  });
}

function getArticleById(req, res) {
  console.log('Articles API', req.params, req.query);
  
  res.json({
    requestedId: req.params.id,
    message: 'Article fetched successfully',
  });
}

function saveArticle(req, res) {
  console.log(req.body);
  const { title, body } = req.body;
  const newArticle = {
    id: articles.length + 1,
    title,
    body
  };

  articles.push(newArticle);
  res.json({
    message: 'Article added successfully'
  })
}

module.exports = {
  getAllArticles,
  getArticleById,
  saveArticle
}