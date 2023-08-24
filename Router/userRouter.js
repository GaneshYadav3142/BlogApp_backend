const express=require('express')

const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userRouter=express.Router()
const userModel = require('../Model/userModel')
userRouter.post("/register",async (req,res)=>{
    try {
        const {username,avatar,email,password}=req.body
        const user=await userModel.findOne({email})
        console.log(email)
        if(user){
            res.status(404).send("User already Exist")
        }
        else{
            const newPassword=await bcrypt.hash(password,10)
           const user=await userModel.create({username,avatar,email,password:newPassword})
           user.save()
           res.status(200).send({msg:"The new User has been added"})
        
        }
    } catch (error) {
        res.status(404).send({error:"error"})
    }
})



userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
      const user=await userModel.findOne({email})
      if(user){
        const verify=await bcrypt.compare(password,user.password)
        if(!verify){
            res.status(404).send("Wrong password")
        }
        else{
            const token=jwt.sign({userID:user._id,username:user.username},"Secret",{expiresIn:"1d"})
            res.status(200).send({token})
        }
      }

    } catch (error) {
        res.status(404).send({error:"error"})
    }
})


module.exports=userRouter