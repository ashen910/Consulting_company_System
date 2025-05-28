const express = require('express');
const Timetables = require('../models/timetables');

const router = express.Router();

//save timetables

router.post('/timetable/save',(req,res)=>{

    let newTimetable = new Timetables(req.body);
    
    newTimetable.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Timetable saved successfully"
        });
    });
});

//get timetables

router.get('/timetables',(req,res) =>{
    Timetables.find().exec((err,timetables) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingTimetables:timetables
        });
    });
});

//get a specific timetable

router.get("/timetable/:id",(req,res) =>{

    let timetableId = req.params.id;

    Timetables.findById(timetableId,(err,timetable) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            timetable
        });
    });


});

//update timetables

router.put('/timetable/update/:id',(req,res)=>{
    Timetables.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,timetable)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//Delete timetables

router.delete('/timetable/delete/:id',(req,res) =>{
    Timetables.findByIdAndRemove(req.params.id).exec((err,deleteTimetable) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Deleted Successfully",deleteTimetable
        });
    });
});

module.exports = router;

