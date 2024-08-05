const mongoose = require('mongoose');
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB
const connect = async ()=>{
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('Connected successfully!');
    }
    catch(err){
        console.log('Connection Error: ', err);
    }
}
module.exports  = {connect}