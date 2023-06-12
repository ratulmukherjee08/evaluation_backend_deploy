const express=require("express")
require("dotenv").config()
const cors=require("cors")
const { UserRouter } = require("./routes/user.routes")
const { PostRouter } = require("./routes/post.routes")
const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",UserRouter)
app.use("/posts",PostRouter)
app.listen(process.env.port,async()=>{
    try {
        console.log(`server is running at port ${process.env.port}`)
        console.log("connect to db")
    } catch (error) {
        console.log(error)
        console.log("something went wrong")
    }
})
