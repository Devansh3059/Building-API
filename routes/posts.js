var express = require("express");
var router = express.Router();
var Post = require('../model/Post');


//Get All Posts
router.get("/",async (req,res)=>{
    try{
        const posts = await Post.find()  //2
        res.json(posts)
    }catch(err){
        res.json({message:err})
    }
});

//Submits The Post
router.post('/',async(req,res)=>{
    console.log(req.body);
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    })
    try {
        const savedPost = await post.save()    //returns promise
        res.json(savedPost)
    } catch(err){
        res.json({messsage: err})
    }
})


// router.post('/',(req,res)=>{
//     console.log(req.body);
// }) 1
module.exports = router;


// 1 used for checking using postman
// 2 post filnds all the posts, Post is the model, .find() is the method in mongoose