const prisma = require("../../prisma.js");

const updateAuthor=async (req,res)=>{
    const {id}=req.params
    const {firstName,familyName, dateOfBirth ,dateOfDeath }=req.body
    try{
        const author=await prisma.author.update({
            where:{
                id:parseInt(id)
            },
            data:{
                firstName,
                familyName,
                dateOfBirth: new Date(dateOfBirth),
                dateOfDeath: dateOfDeath ? new Date(dateOfDeath) : null
            }
        })
        return res.status(200).json({
            mess:'Author Details Updated'})
    }
    catch(err){
        return res.status(500).json({mess:"Internal Server Error :Filed to upadaate"})
    }
}
module.exports={updateAuthor}