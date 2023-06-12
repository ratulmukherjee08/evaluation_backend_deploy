const express=require("express")
const bcrypt=require("bcrypt")
require("dotenv").config()
const {UserModel}=require("../model/user.model")
const UserRouter=express.Router()
const jwt=require("jsonwebtoken")

UserRouter.post("/register",async(req,res)=>{
const {name,email,gender,password,age,city,is_married}=req.body
try {
    bcrypt.hash(password,7,async(err,hash)=>{
       if(err) {
        res.json({error:err.message}) 
       }
       else{
        const user=new UserModel({name,email,gender,password :hash,age,city,is_married})
        await user.save()
       }
       
    })
    res.json({msg:"User has been Registered",user:req.body})
} catch (error) {
    res.json({err:error.message})
}
})

UserRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=UserModel.findOne({email})
        if(user){
           bcrypt.compare(password,user.password,async(err,result)=>{
            if(result){
                const token=jwt.sign({UserID:user._id},process.env.secret_code)
                res.json({msg:"Logged In",token})
            }else{
                res.json({msg:"wrong inputs"})
            }
           
           })
            
        }
        else{
            res.json({msg:"user not found"})
        }
    } catch (error) {
        res.json({error:error.message})
    }

})

UserRouter.post("/logout",async(req,res)=>{

})

module.exports={
    UserRouter
}



