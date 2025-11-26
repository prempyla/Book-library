const prisma = require("../../prisma.js");


const updateBook=async (req,res)=>{
    const {id}=req.params
    const {title,summary,authorIds,genreIds}=req.body
    try{
    const book=await prisma.book.update({
        where:{
            id:parseInt(id)
            },
        data:{
                title,
                summary,
            authors:{
                set:authorIds.map(id=>({id}))
                },
            genres:{
                set:genreIds.map(id=>({id}))
                }
            }
        })
        return res.status(200).json({
            book,
        warning:false
        })
    }catch (err){
        return res.status(500).json({
            message:"Server error: unable to update book"
        })
    }
}
module.exports = { updateBook }
