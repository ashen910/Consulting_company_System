const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({

    _id:{
        type:String,
        required:true
    },
    name:{
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
    },
    date:{
        type:String,
        required:true
    },
    noMembers:{
        type:String,
        required:true
    },

    member01:{
        type:String,
        required:true
    },
    member02:{
        type:String,
        required:true
    },
    member03:{
        type:String,
        required:false
    },
    member04:{
        type:String,
        required:false
    },

    in1:{
        type:String,
        required:false
    },
    in2:{
        type:String,
        required:false
    },
    in3:{
        type:String,
        required:false
    },
    in4:{
        type:String,
        required:false
    },
    mark:{
        type:String,
        required:false
    },

});

module.exports = mongoose.model('Teams',teamSchema);