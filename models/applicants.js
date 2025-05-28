const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    nic:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    contact:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    url:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Applicants',applicantSchema);