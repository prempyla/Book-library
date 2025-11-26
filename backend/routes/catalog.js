const express=require('express');
const router=express.Router();

const {homepagecatalog}=require('../controllers/catalog.controllers');
const {getAllBooks}=require('../controllers/Books/books.controllers');
const {getAllAuthors}=require('../controllers/authors/authors.controllers');
const {getAllGenres}=require('../controllers/genres/getAllGenre');

router.get('/',homepagecatalog);
router.get('/books',getAllBooks);
router.get('/authors',getAllAuthors);
router.get('/genres',getAllGenres);
module.exports=router;
