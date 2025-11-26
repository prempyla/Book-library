const prisma = require("../../prisma.js");

const getAuthorById=async (req,res)=>{
    const {id}=req.params;
    const {dateOfBirth,dateOfDeath}=req.body;
    try{
        const author=await prisma.author.findUnique({
            where:{
                id:parseInt(id)
            },
            include:{
                book:{
                    select:{
                        title:true
                    }
                }
            }
        });
        if(!author){
            return res.status(404).json({mess:"Author not found"})
        }
        return res.status(200).json({
            author:{
                id:author.id,
                firstName:author.firstName,
                familyName:author.familyName,
                dateOfBirth:author.dateOfBirth,
                dateOfDeath:author.dateOfDeath,
                books:author.book.map(b=>b.title)
            },
            warning:false
        })
    }catch(err){
        return res.status(500).json({mess:"Internal Server Error :Unable to fetch author"})
    }
}
module.exports={getAuthorById}