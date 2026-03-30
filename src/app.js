
import express from "express"
const app = express()


app.use("/test",(req,res)=>{
    res.send("Hello form the Server")
})

app.listen(3001,()=>{
    console.log("server is running on port 3001")
})