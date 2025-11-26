const express=require('express')

const router=express.Router();

const {createAuthor}=require('../controllers/authors/createAuthor')
const {getAllAuthors}=require('../controllers/authors/authors.controllers')
const {updateAuthor}=require('../controllers/authors/updateAuthor')
const {deleteAuthor}=require('../controllers/authors/deleteauthor')
const {getAuthorById}=require('../controllers/authors/getAuthorbyid')

router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.post('/', createAuthor);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

module.exports=router;
