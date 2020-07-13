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

//Creates The Post
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

router.patch('/:postId', async (req,res)=>{
    try{
        var postUpdate = await Post.updateOne({
            _id:req.params.postId},
            {$set:{
                title:req.body.title,
                description:req.body.description
            }
        });
        res.json(postUpdate);
    }catch(err){
        res.json(err);
    }
})

//Specific Post
router.get('/:postId',async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post)
    }catch{
        res.json(post);
    }
})

//Delete specific post

router.delete('/:postId', async (req,res)=>{
    try{
        var removePost = await Post.deleteOne({_id: req.params.postId})
        res.json(removePost)
    }catch(err){
        res.json({message:err})
    }
})

// router.post('/',(req,res)=>{
//     console.log(req.body);
// }) 1
module.exports = router;


// 1 used for checking using postman
// 2 post filnds all the posts, Post is the model, .find() is the method in mongoose