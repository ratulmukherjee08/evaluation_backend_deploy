const jwt=require("jsonwebtoken")
require ("dotenv").config()
const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(token){
        try {
            const decode=jwt.verify(token,process.env.secret_token)
            if(decode){
                req.body.UserID=decode.UserID
                next()
            }else{
                res.json({msg:"Not Authorised"})
            }
        } catch (error) {
            res.json({error:error.message})
        }
    }
    else{
        res.json({msg:"Please Login!"})
    }
}
module.exports={
    auth
}