const prisma = require("../prisma/client");

const getBookById=async (req,res)=>{
    try{
        const {id}=req.params
        let warning=false
        const book=await prisma.book.findUnique({
            where:{
                id:parseInt(id)
                },
            include:{
                authors:true,
                genres:true
            }
        })
    }catch (err){
        return res.status(500).json({
            message:"Server error: unable to load book"
        })
    }
    
        if (!book){
            return res.status(404).json({
                message:"Book not found"
            })
        }
    }        
    let authors=[]
    try{
        authors=book.authors.map(a=>`${a.firstName} ${a.familyName}`.trim())
    }catch (err){
        warning=true
        authors=[]
    }
    let genres=[]
    try{
        genres=book.genres.map(g=>g.name)
    }catch (err){
        warning=true
        genres=[]
    }
    return res.status(200).json({
        book:{
            id:book.id,
            title:book.title,
            summary: book.summary,
            authors,
            genres
        },
        warning
    })
module.exports={getBookById}