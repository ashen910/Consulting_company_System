 const express = require('express');
 const Appointments = require('../models/appointments');

 const router = express.Router();

 //Save appointments
 router. post('/appointment/save',(req,res)=>{

     let newAppointment= new Appointments(req.body);
    
   newAppointment.save((err) =>{
         if(err){
             return res.status(400).json({
                 error:err
             });
         }
        return res.status(200).json({
            success:"Appointments saved successfully"
         });
     });
 });

 //get appointments

 router.get('/appointments',(req,res) =>{
     Appointments.find().exec((err,appointments) =>{
         if(err){
             return res.status(400).json({
                error:err
             });
         }
         return res.status(200).json({
             success:true,
             existingAppointments:appointments
         });
     });
 });



 //get a specific appointment

 router.get("/appointment/:id",(req,res) =>{

     let appointmentId = req.params.id;

    Appointments.findById(appointmentId,(err,appointment) =>{
         if(err){
             return res.status(400).json({success:false, err})         }

         return res.status(200).json({
             success:true,
             appointment
         });
     });


 });



 //update appointments

 router.put('/appointment/update/:id',(req,res)=>{
     Appointments.findByIdAndUpdate(
         req.params.id,
         {
            $set:req.body
         },
         (err,appointment)=>{
            if(err){
                 return res.status(400).json({error:err});
             }

             return res.status(200).json({
                 success:"Updated Successfully"
             });
         }
     );
 });

 //Delete appointments

 router.delete('/appointment/delete/:id',(req,res) =>{
    Appointments.findByIdAndRemove(req.params.id).exec((err,deleteAppointment) =>{

         if(err) return res.status(400).json({
             message:"Delete Unsuccesful",err
         });

         return res.json({
             message:"Delete Successful",deleteAppointment
         });
     });
 });

 module.exports = router;


