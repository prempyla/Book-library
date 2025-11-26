const prisma = require("../../prisma.js");

const deleteBook=async (req,res)=>{
    const {id}=req.params
    try{
    const book=await prisma.book.delete({
        where:{
            id:parseInt(id)
            }
        })
        return res.status(200).json({
            book,
        warning:false
        })
    }catch (err){
        return res.status(500).json({
            message:"Server error: unable to delete book"
        })
    }
}
module.exports={deleteBook}