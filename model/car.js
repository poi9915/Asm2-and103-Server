const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const CarSchema  = new Schema({
    name :{type :String , required :true},
    namSx : {type :Date},
    brandName : {type :String, required :true},
    price : {type :Number},
},{
    timestamps : true
})

module.exports = mongoose.model('Car' , CarSchema);