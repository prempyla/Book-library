const express = require('express');
const router = express.Router();

const {getAllBooks}= require('../controllers/books.controllers');
const getbookById=require('../controllers/Books/getBookById')
const createBook=require('../controllers/Books/createBook')
const updateBook=require('../controllers/Books/updateBook')
const deleteBook=require('../controllers/Books/deleteBook')

router.get('/', getAllBooks);
router.get('/:id', getbookById);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);


module.exports = router;
