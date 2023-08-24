const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const userData = require("./db")
const userRouter = require("./Router/userRouter")
const authMiddelware = require("./authMiddelware")
const blogRouter = require("./Router/blogRouter")

const app=express()

app.use(cors())
app.use(express.json())

app.use("/users",userRouter)
app.use(authMiddelware)
 app.use("/blogs",blogRouter)



app.listen(8080,async ()=>{
    try {
        userData()
        console.log("Connected")
    } catch (error) {
        console.log(error)
    }
})