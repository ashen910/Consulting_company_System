const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    name:{
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
    date:{
        type:String,
        required:true
    },
    
    time:{
        type:String,
        required:true
    },

    platform:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:false
    },
});

module.exports = mongoose.model('Meetings',meetingSchema);