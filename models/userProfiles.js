const mongoose = require('mongoose');

const userProfilesSchema = new mongoose.Schema({

    userCategory:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:false
    },
    surname:{
        type:String,
        required:false
    },
    companyName:{
        type:String,
        required:false
    },
    contactNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:false
    },
    country:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:false
    },
    _id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('userProfiles',userProfilesSchema);