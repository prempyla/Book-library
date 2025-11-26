const prisma = require("../../prisma.js");

const createGenre=async (req,res)=>{
    const {name}=req.body;
    if (!name){
        return res.status(400).json({
            warning:true,
            message:"Name field is required"
        });
    }
    try {
        const existingGenre=await prisma.genre.findUnique({
            where: {
                name: name
            }
        });
        if (existingGenre) {
            return res.status(400).json({
                warning:true,
                message:"Genre already exists"
            });
        }
        const genre=await prisma.genre.create({
            data:{
                name
            }
        });
        return res.status(201).json({
            genre,
            warning:false
        });
    } catch (err){
        console.error('Error creating genre:', err);
        return res.status(500).json({
            message: "Internal server error: unable to create genre"
        });
    }
};

module.exports={createGenre};
