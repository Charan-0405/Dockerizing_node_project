const express= require('express');
const app = express();
app.get("/home",(req,res)=>{
    res.json({message:"Welcome Charan"})
})
app.listen(3000,()=>{
    console.log("running on port 3000")
})