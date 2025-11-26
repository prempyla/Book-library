const prisma = require("../../prisma.js");

const updateGenre=async (req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    if (!name){
        return res.status(400).json({
            warning:true,
            message:"Name field is required"
        });
    }
    try {
        const genre=await prisma.genre.findUnique({
            where: {
                id:parseInt(id)
            }
        });
        if (!genre){
            return res.status(404).json({
                message:"Genre not found"
            });
        }
        const updatedGenre = await prisma.genre.update({
            where: {
                id:parseInt(id)
            },
            data: {
                name
            }
        });
        return res.status(200).json({
            genre:updatedGenre,
            warning:false
        });
    } catch (err) {
        console.error('Error updating genre:', err);
        return res.status(500).json({
            message:"Internal server error: unable to update genre"
        });
    }
};

module.exports={updateGenre};
