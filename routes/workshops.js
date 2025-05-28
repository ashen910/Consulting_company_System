const express = require('express');
const Workshops = require('../models/workshops');

const router = express.Router();

//save workshops

router.post('/workshop/save',(req,res)=>{

    let newWorkshop = new Workshops(req.body);
    
    newWorkshop.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Details saved successfully"
        });
    });
});

//get workshops

router.get('/workshops',(req,res) =>{
    Workshops.find().exec((err,workshops) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingWorkshops:workshops
        });
    });
});

//get a specific workshop

router.get("/workshop/:id",(req,res) =>{

    let workshopId = req.params.id;

    Workshops.findById(workshopId,(err,workshop) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            workshop
        });
    });


});



module.exports = router;

