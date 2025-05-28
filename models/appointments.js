const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({

    clientname:{
        type:String,
        required:false
    },

    companyname:{
        type:String,
        required:false

    },

    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },

    country:{
        type:String,
        required:true
    },

    projectcategory:{
        type:String,
        required:true
    },

    timeperiod:{
        type:String,
        required:true
    },

    discussionplatform:{
        type:String,
        required:true
    },

    additionalnotes:{
        type:String,
        required:false
    }
});

module.exports = mongoose.model('Appointments',appointmentSchema);