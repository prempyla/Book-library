const prisma = require("../../prisma.js");

const getGenreById=async (req,res)=>{
    const {id}=req.params;
    try {
        const genre=await prisma.genre.findUnique({
            where: {
                id:parseInt(id)
            },
            include: {
                books:true
            }
        });
        if (!genre){
            return res.status(404).json({
                message: "Genre not found"
            });
        }
        return res.status(200).json({
            genre,
            warning:false
        });
    } catch (err){
        console.error('Error fetching genre:',err);
        return res.status(500).json({
            message:"Server error: unable to load genre"
        });
    }
};

module.exports={getGenreById};
