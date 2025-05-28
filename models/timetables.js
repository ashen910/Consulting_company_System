const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({

    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    platform:{
        type:String,
        required:true
    },
    intellectual:{
        type:String,
        required:true
    },
    published:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Timetables',timetableSchema);