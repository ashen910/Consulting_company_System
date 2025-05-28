const express = require('express');
const Buyers = require('../models/buyers');

const router = express.Router();

//save buyers

router.post('/buyer/save',(req,res)=>{

    let newBuyer = new Buyers(req.body);

    newBuyer.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Buyers saved successfully"
        });
    });
});


//get buyers

router.get('/buyers',(req,res) =>{
    Buyers.find().exec((err,buyers) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingBuyers:buyers
        });
    });
});

//get a specific buyer

router.get("/buyer/:id",(req,res) =>{

    let buyerId = req.params.id;

    Buyers.findById(buyerId,(err,buyer) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            buyer
        });
    });
});


module.exports = router;