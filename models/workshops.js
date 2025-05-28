const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
   
    }

});

module.exports = mongoose.model('Workshops',workshopSchema);