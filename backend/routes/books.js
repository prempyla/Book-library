const express = require('express');
const router = express.Router();

const { getAllBooks } = require('../controllers/Books/books.controllers');
const { getBookById } = require('../controllers/Books/getBookById');
const { createBook } = require('../controllers/Books/createBook');
const { updateBook } = require('../controllers/Books/updateBook');
const { deleteBook } = require('../controllers/Books/deleteBook');

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);


module.exports = router;
