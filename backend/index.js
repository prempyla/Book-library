const express=require('express');
const catalogRouter=require('./routes/catalog');
const booksRouter=require('./routes/books');

const app=express();


app.use(express.json());

app.use('/catalog',catalogRouter)
app.use('/books',booksRouter)

const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports=app;
