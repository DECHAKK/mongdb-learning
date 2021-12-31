const mongoose = require('mongoose');
const Useschema = new mongoose.Schema({
    name: { 
        type:String, 
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    lole: {
        type:String,
        default:'true'
    },
    date:{
        type:Date,
        default: Date.now
    }
},
{timestamps:true});

module.exports = mongoose.model('DB_decha',Useschema);