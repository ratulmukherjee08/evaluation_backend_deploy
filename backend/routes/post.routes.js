const express=require("express")
const {auth}=require("../middleware/auth.middleware")


const PostRouter=express.Router()
PostRouter.use(auth)
const {PostModel}=require("../model/post.model")
PostRouter.post("/create",async(req,res)=>{
try {
    const post=new noteModel(req.body)
    await post.save()
    res.json({msg:"New post has been added",post:req.body})
} catch (error) {
    res.json({error:error.message})
}

})

noteRouter.get("/",async(req,res)=>{
    try {
        const posts=await  PostModel.find({userID:req.body.userID})
        res.send(posts)
    } catch (error) {
        res.json({error:error.message})
    }
    

})

noteRouter.patch("/update/:noteID",async(req,res)=>{
    const userIDinUserDoc=req.body.userID
    const {postID}=req.params
   try {
    const note=await PostModel.findOne({_id:postID})
    const userIDinPostDoc=post.userID
      if(userIDinUserDoc===userIDinPostDoc){
        await PostModel.findByIdAndUpdate({_id:postID},req.body)
        res.json({msg:`${post.title} has been updated`})
}else{
    res.json({msg:"Not Authorized"})
}
   } catch (error) {
    res.json({error:error})
   }

})

noteRouter.delete("/delete/:noteID",async(req,res)=>{
    const userIDinUserDoc=req.body.userID
    const {postID}=req.params
   try {
    const post=await PostModel.findOne({_id:postID})
    const userIDinPostDoc=post.userID
      if(userIDinUserDoc===userIDinPostDoc){
        await PostModel.findByIdAndDelete({_id:postID})
        res.json({msg:`${post.title} has been updated`})
}else{
    res.json({msg:"Not Authorized"})
}
   } catch (error) {
    res.json({error:error})
   }

})

module.exports={
   PostRouter
}