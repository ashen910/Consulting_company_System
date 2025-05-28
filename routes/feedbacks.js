const express = require('express');
//const feedbacks = require('../models/feedbacks');
const Feedbacks = require('../models/feedbacks');



const router = express.Router();



//save feedbacks
router.post('/post/save',(req,res)=>{
    let newPost = new Feedbacks(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Feedbacks saved successfully"
        });
    });
});

//get feedbacks
router.get('/feedbacks',(req,res)=>{
    Feedbacks.find().exec((err,feedbacks)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingFeedbacks:feedbacks
        });
    });
});

//get a specific feedback
router.get("/post/:id",(req,res) =>{
    let feedbackID=req.params.id;

    feedbacks.findById(feedbackID,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
})

//update feedbacks
router.put('/post/update/:id',(req,res)=>{
    Feedbacks.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:'Updated Successfully'
            });
        }
    );
});

//Delete feedbacks

router.delete('/post/delete/:id',(req,res) =>{
    Feedbacks.findByIdAndRemove(req.params.id).exec((err,deleteFeedback) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successful",deleteFeedback
        });
    });
});

module.exports = router;
