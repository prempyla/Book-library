const prisma = require("../../prisma.js");

const deleteGenre=async (req,res)=>{
    const {id}=req.params;
    try {
        const genre=await prisma.genre.findUnique({
            where: {
                id:parseInt(id)
            }
        });
        if (!genre){
            return res.status(404).json({
                message: "Genre not found"
            });
        }
        await prisma.genre.delete({
            where: {
                id: parseInt(id)
            }
        });
        return res.status(200).json({
            message: "Genre deleted successfully",
            warning: false
        });
    } catch (err) {
        console.error('Error deleting genre:', err);
        return res.status(500).json({
            message: "Internal server error: unable to delete genre"
        });
    }
};

module.exports = { deleteGenre };
