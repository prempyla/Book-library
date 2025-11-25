const prisma = require("../prisma/client");

const getAllBooks = async (req, res) => {
  let warning = false;
  let books = [];

  try {
    books = await prisma.book.findMany({
      include: {
        authors: true
      }
    });
  } catch (err) {
    return res.status(500).json({
      books: [],
      warning: true,
      message: "Server error: unable to load all books"
    });
  }


  const formattedBooks = book.map(book => {
    let authors = [];
    try {
      authors = book.authors.map(a => `${a.firstName} ${a.familyName}`.trim());
    } catch (err) {
      warning = true;
      authors = [];
    }

    return {
      title: book.title,
      authors
    };
  });

  return res.status(200).json({
    books: formattedBooks,
    warning
  });
};

const createBook=async (req,res)=>{
    const {title,authorId}=req.body
    const book=await prisma.books.create({
        data:{
            title,
            authorId
        }
    })
    return res.status(201).json({
        book,
        warning:false
    })


}
const updateBook=async (req,res)=>{
    const {id}=req.params
    const {title,authorId}=req.body
    const book=await prisma.books.update({
        where:{
            id:parseInt(id)
        },
        data:{
            title,
            authorId
        }
    })
    return res.status(200).json({
        book,
        warning:false
    })
}
const deleteBook=async (req,res)=>{
    const {id}=req.params
    const book=await prisma.books.delete({
        where:{
            id:parseInt(id)
        }
    })
    return res.status(200).json({
        book,
        warning:false
    })
}


module.exports = {getAllBooks,getBooksById,createBook,updateBook,deleteBook};