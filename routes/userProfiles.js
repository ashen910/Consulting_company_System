const express = require('express');
const userProfiles = require('../models/userProfiles');

const router = express.Router();

//save a User Profile

router.post('/userProfile/save',(req,res)=>{

    let newPost = new userProfiles(req.body);
    
    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});

//get User Profiles

router.get('/userProfiles',(req,res) =>{
    userProfiles.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});



//get a specific User Profile

router.get("/userProfile/:id",(req,res) =>{

    let postId = req.params.id;

    userProfiles.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            post
        });
    });

});


//update a User Profile

router.put('/userProfile/update/:id',(req,res)=>{
    userProfiles.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//Delete a User Profile

router.delete('/userProfile/delete/:id',(req,res) =>{
    userProfiles.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successful",deletePost
        });
    });
});

module.exports = router;