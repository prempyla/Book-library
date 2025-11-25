const express =require('express')


const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({msg:"done"})
})

// home page (catalog)
app.get('/catalog',(req,res)=>{
    
})
const PORT=process.env||3000
app.listen(PORT,()=>{
    console.log(`server running on ${port}`)
})
