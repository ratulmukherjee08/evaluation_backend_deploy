const mongoose=require("mongoose")
const PostSchema=mongoose.Schema({
    title : String,
    body : String,
    device : String,
    no_of_comments : Number
})
const PostModel=mongoose.model("user",PostSchema)

module.exports={
    PostModel
}