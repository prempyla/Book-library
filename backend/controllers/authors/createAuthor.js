const prisma = require("../prisma");

const createAuthor= async (req,res)=>{
    const {firstName,familyName,  dateOfBirth ,dateOfDeath }=req.body
    if  (!firstName ||!familyName,!dateOfBirth){
        return res.status(400).json({
            warning :true,
            mess:" firstName familyName,dateOfBirth fields are required"})
    }
    try {
        const author=await prisma.author.create({
            data:{
                firstName,
                familyName,
                dateOfBirth:new Date(dateOfBirth),
                dateOfBirth:dateOfDeath ?new Date (dateOfDeath) :null
            }
        });
        return res.status(201).json({
            author,
            warning:false
        })

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            mess:"Internal server error:unable to create author"
        })

    }
}
module.exports={createAuthor}