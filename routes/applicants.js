const express = require('express');
const Applicants = require('../models/applicants');

const router = express.Router();

//save applicants

router.post('/applicant/save',(req,res)=>{

    let newApplicant = new Applicants(req.body);

    newApplicant.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Application filled successfully"
        });
    });
});


//get applicants

router.get('/applicants',(req,res) =>{
    Applicants.find().exec((err,applicants) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingApplicants:applicants
        });
    });
});

//get a specific applicant

router.get("/applicant/:id",(req,res) =>{

    let applicantId = req.params.id;

    Applicants.findById(applicantId,(err,applicant) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            applicant
        });
    });
});


//update ads

router.put('/applicant/update/:id',(req,res) =>{
    Applicants.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,applicant)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Upated Successfully"
            });
        }
    );
       
});


//delete applicant

router.delete('/applicant/delete/:id',(req,res) =>{
    Applicants.findByIdAndRemove(req.params.id).exec((err,deleteApplicant)=>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessful", err
        });

        return res.json({
            message:"delete Successfull", deleteApplicant
        });
    });
});


module.exports = router;