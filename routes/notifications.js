const express = require('express');
const Notifications = require('../models/notifications');

const router = express.Router();

//save posts



router.post('/notification/save',(req,res)=>{

    let newNotifications = new Notifications(req.body);
    
    newNotifications.save((err) =>{
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

//get posts

router.get('/notifications',(req,res) =>{
    Notifications.find().exec((err,notifications) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingNotifications:notifications
        });
    });
});



//get a specific post

router.get("/notification/:id",(req,res) =>{

    let notificationId = req.params.id;

    Notifications.findById(notificationId,(err,notification) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            notification
        });
    });


});





//update posts

router.put('/notification/update/:id',(req,res)=>{
    Notifications.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,notification)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//Delete posts

router.delete('/notification/delete/:id',(req,res) =>{
    Notifications.findByIdAndRemove(req.params.id).exec((err,deleteNotification) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successful",deleteNotification
        });
    });
});

module.exports = router;