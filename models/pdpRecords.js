const mongoose = require('mongoose');

const pdpRecordSchema = new mongoose.Schema({

    pdpid:{
        type:String,
        required:true
    },
    
    projectcategory:{
        type:String,
        required:true
    },

    summary:{
        type:String,
        required:true
    },

    price:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('PdpRecords',pdpRecordSchema);