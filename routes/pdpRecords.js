const express = require('express');
const PdpRecords = require('../models/pdpRecords');

const router = express.Router();

//Save pdpRecords
router. post('/pdpRecord/save',(req,res)=>{

    let newPdpRecord= new PdpRecords(req.body);
    
    newPdpRecord.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Pre Design Project saved successfully"
        });
    });
});

//get pdpRecords

router.get('/pdpRecords',(req,res) =>{
    PdpRecords.find().exec((err,pdpRecords) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPdpRecords:pdpRecords
        });
    });
});


//get a specific pdpRecord

router.get("/pdpRecord/:id",(req,res) =>{

    let pdpRecordId = req.params.id;

    PdpRecords.findById(pdpRecordId,(err,pdpRecord) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            pdpRecord
        });
    });


});



//update pdpRecords

router.put('/pdpRecord/update/:id',(req,res)=>{
    PdpRecords.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,pdpRecord)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//Delete pdpRecords

router.delete('/pdpRecord/delete/:id',(req,res) =>{
    PdpRecords.findByIdAndRemove(req.params.id).exec((err,deletePdpRecord) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successful",deletePdpRecord
        });
    });
});

module.exports = router;