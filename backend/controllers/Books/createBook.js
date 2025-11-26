const prisma = require("../../prisma.js");

const createBook=async (req, res) => {
  const { title,summary,authorIds,genreIds} = req.body;

  if (!title||!authorIds||authorIds.length===0||!genreIds||genreIds.length===0)  {
    return res.status(400).json({
      warning: true,
      message: "Title and at least one author and genre are required"
    });
  }

  try{
    const book =await prisma.book.create({
        data:{
        title,
        summary,
            authors:{
                connect:authorIds? authorIds.map(id=>({id})):[]
        },
            genres:{
                connect:genreIds? genreIds.map(id=>({id})):[]
        }
      }
    })
    return res.status(201).json({
      book,
        warning:false
    })
  }catch (err){
    return res.status(500).json({
        message:"Server error: unable to create book"
    })

  }
}
module.exports={createBook}
