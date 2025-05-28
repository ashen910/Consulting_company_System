const mongoose = require('mongoose');

const projectDetailsProfilesSchema = new mongoose.Schema({

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
    date:{
        type:String,
        required:true
    },
    task_01:{
        type:String,
        required:true
    },
    rate_01:{
        type:String,
        required:false
    },
    task_02:{
        type:String,
        required:false
    },
    rate_02:{
        type:String,
        required:false
    },
    task_03:{
        type:String,
        required:false
    },
    rate_03:{
        type:String,
        required:false
    },
    progress:{
        type:String,
        required:false
    },

});

module.exports = mongoose.model('projectDetailsProfiles',projectDetailsProfilesSchema);