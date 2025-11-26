const prisma = require("../../prisma.js");

const deleteAuthor=async (req,res)=>{
    const {id}=req.params;
    try{
        const book=await prisma.author.delete({
            where:{
                id:parseInt(id)
            }
        });
        return res.status(200).json({
            mess:"Author has been deleted successfully"
        })

    }catch(err){
        return res.status(500).json({mess:"internal servor error , unable to delete "})

    }

}
module.exports={deleteAuthor}