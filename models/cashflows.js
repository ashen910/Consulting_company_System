const mongoose = require('mongoose');

const cashflowsSchema = new mongoose.Schema({

    _id:{
        type:String,
        required:true
    },
    projectCategory:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:false
    },
    companyName:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    fieldCost:{
        type:String,
        required:true
    },
    metirialCost:{
        type:String,
        required:true
    },
    commission:{
        type:String,
        required:true
    },
    total:{
        type:String,
        required:true
    },
    advance:{
        type:String,
        required:true
    },
    payble:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
   
});

module.exports = mongoose.model('cashflows',cashflowsSchema);