const express = require('express');
const articlesController = require('../controllers/articles.controller');

const articleRouter = express.Router();

// handle Article routes
articleRouter.get(['/', '/all'], articlesController.getAllArticles)
articleRouter.get('/:id', articlesController.getArticleById)
articleRouter.post('/', articlesController.saveArticle)

module.exports = articleRouter