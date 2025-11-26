const prisma = require("../../prisma.js");

const getAllGenres=async (req,res) => {
    try {
        const genres=await prisma.genre.findMany({
            orderBy: {
                name:'asc'
            }
        });
        return res.status(200).json({
            genres,
            warning:false
        });
    } catch (err) {
        console.error('Error fetching genres:', err);
        return res.status(500).json({
            genres:[],
            warning:true,
            message:'Server error: unable to load genres'
        });
    }
};

module.exports={getAllGenres};