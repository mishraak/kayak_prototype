const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/mongoConfig')

//schema for the mongodb
const group_rawdata = mongoose.Schema({

    GROUPNAME:{
        type: String,
        required:true
    },
    USEREMAIL:{
        type:String,
        required:true
    },
    PERMISSION:{
        type:String,
        required:true
    },
    ADMIN:{
        type:String
    }
});


const GroupRawData = module.exports = mongoose.model('GroupRawData',group_rawdata);

module.exports.addRawData = function(data,callback){
    console.log
    values = new GroupRawData({
        GROUPNAME:data.groupname,
        USEREMAIL:data.email,
        PERMISSION:data.permission,
        ADMIN:data.admin
    });
    values.save(callback);
}

module.exports.getRawData = function(email,callback){
    const query = {USEREMAIL:email}
    GroupRawData.find(query,callback);
}

module.exports.getAllData = function(groupname,callback){
    const query = {GROUPNAME:groupname};
    GroupRawData.find(query,callback);
}