const express = require('express');
const router = express.Router();

const homepageCatalog = require('../controllers/catalog.controllers');
const getAllBooks = require('../controllers/books.controllers');
const getAllAuthors = require('../controllers/authors.controllers');
const getAllGenres = require('../controllers/genres.controllers');

router.get('/', homepageCatalog);
router.get('/books', getAllBooks);
router.get('/authors', getAllAuthors);
router.get('/genres', getAllGenres);
module.exports = router;
