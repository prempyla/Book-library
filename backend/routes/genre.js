const express=require('express');
const router=express.Router();

const {getAllGenres}=require('../controllers/genres/getAllGenre');
const {getGenreById}=require('../controllers/genres/getGenreById');
const {createGenre}=require('../controllers/genres/createGenre');
const {updateGenre}=require('../controllers/genres/updateGenre');
const {deleteGenre}=require('../controllers/genres/deleteGenre');

router.get('/',getAllGenres);
router.get('/:id',getGenreById);
router.post('/',createGenre);
router.put('/:id',updateGenre);
router.delete('/:id',deleteGenre);

module.exports=router;
