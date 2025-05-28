const express = require('express');
const cashflows = require('../models/cashflows');

const router = express.Router();

//save a Project Cash-Flow

router.post('/cashflow/save',(req,res)=>{

    let newPost = new cashflows(req.body);
    
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

//get all Project Cash-Flows

router.get('/cashflows',(req,res) =>{
    cashflows.find().exec((err,posts) =>{
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



//get a specific Project Cash-Flow

router.get("/cashflow/:id",(req,res) =>{

    let postId = req.params.id;

    cashflows.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            post
        });
    });

});


//update a Project Cash-Flow

router.put('/cashflow/update/:id',(req,res)=>{
    cashflows.findByIdAndUpdate(
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

//Delete a Project Cash-Flow

router.delete('/cashflow/delete/:id',(req,res) =>{
    cashflows.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successful",deletePost
        });
    });
});

module.exports = router;