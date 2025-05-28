const express = require('express');
const Meetings = require('../models/meetings');

const router = express.Router();

//Save meetings
router. post('/meeting/save',(req,res)=>{

    let newMeeting= new Meetings(req.body);
    
    newMeeting.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Meetings saved successfully"
        });
    });
});

//get meetings

router.get('/meetings',(req,res) =>{
    Meetings.find().exec((err,meetings) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingMeetings:meetings
        });
    });
});


//get a specific post

router.get("/meeting/:id",(req,res) =>{

    let meetingId = req.params.id;

    Meetings.findById(meetingId,(err,meeting) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            meeting
        });
    });


});



//update meetings

router.put('/meeting/update/:id',(req,res)=>{
    Meetings.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,meeting)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//Delete meetings

router.delete('/meeting/delete/:id',(req,res) =>{
    Meetings.findByIdAndRemove(req.params.id).exec((err,deleteMeeting) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successful",deleteMeeting
        });
    });
});

module.exports = router;