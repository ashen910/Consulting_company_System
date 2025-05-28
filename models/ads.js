const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({

    qualification:{
        type:String,
        required:true
    },

    experience:{
        type:String,
        required:true
    },

    notice:{
        type:String,
        required:false
    },

    date:{
        type:String,
        required:true
    },

    contact:{
        type:String,
        required:true
    },

    color:{
        type:String,
        required:true
    },

    img:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    type:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Ads',adSchema);