const express = require('express');
const Ads = require('../models/ads');

const router = express.Router();

//save ads

router.post('/ad/save',(req,res)=>{

    let newAd = new Ads(req.body);

    newAd.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Ads saved successfully"
        });
    });
});


//get ads

router.get('/ads',(req,res) =>{
    Ads.find().exec((err,ads) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingAds:ads
        });
    });
});

//get a specific ad

router.get("/ad/:id",(req,res) =>{

    let adId = req.params.id;

    Ads.findById(adId,(err,ad) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            ad
        });
    });
});


//update ads

router.put('/ad/update/:id',(req,res) =>{
    Ads.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,ad)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Upated Successfully"
            });
        }
    );
       
});


//delete ad

router.delete('/ad/delete/:id',(req,res) =>{
    Ads.findByIdAndRemove(req.params.id).exec((err,deleteAd)=>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessful", err
        });

        return res.json({
            message:"delete Successfull", deleteAd
        });
    });
});


module.exports = router;