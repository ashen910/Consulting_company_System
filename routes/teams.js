const express = require('express');
const Teams = require('../models/teams');

const router = express.Router();

//save teams

router.post('/team/save',(req,res)=>{

    let newTeam = new Teams(req.body);

    newTeam.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Teams saved successfully"
        });
    });
});


//get teams

router.get('/teams',(req,res) =>{
    Teams.find().exec((err,teams) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingTeams:teams
        });
    });
});

//get a specific team

router.get("/team/:id",(req,res) =>{

    let teamId = req.params.id;

    Teams.findById(teamId,(err,team) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            team
        });
    });
});


//update teams

router.put('/team/update/:id',(req,res) =>{
    Teams.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,team)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Upated Successfully"
            });
        }
    );
       
});


//delete team

router.delete('/team/delete/:id',(req,res) =>{
    Teams.findByIdAndRemove(req.params.id).exec((err,deleteTeam)=>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessful", err
        });

        return res.json({
            message:"delete Successfull", deleteTeam
        });
    });
});


module.exports = router;