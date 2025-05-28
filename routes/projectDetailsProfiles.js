const express = require('express');
const projectDetailsProfiles = require('../models/projectDetailsProfiles');

const router = express.Router();

//Save a Project Details Profile

router.post('/projectDetailsProfile/save',(req,res)=>{

    let newPost = new projectDetailsProfiles(req.body);
    
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

//Get Project Details Profiles

router.get('/projectDetailsProfiles',(req,res) =>{
    projectDetailsProfiles.find().exec((err,posts) =>{
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



//Get a specific Project Details Profile

router.get("/projectDetailsProfile/:id",(req,res) =>{

    let postId = req.params.id;

    projectDetailsProfiles.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            post
        });
    });

});


//Update a Project Details Profile

router.put('/projectDetailsProfile/update/:id',(req,res)=>{
    projectDetailsProfiles.findByIdAndUpdate(
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

//Delete a Project Details Profile

router.delete('/projectDetailsProfile/delete/:id',(req,res) =>{
    projectDetailsProfiles.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successful",deletePost
        });
    });
});

module.exports = router;