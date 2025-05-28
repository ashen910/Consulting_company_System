const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({

    pdpId:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    contact:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Buyers',buyerSchema);