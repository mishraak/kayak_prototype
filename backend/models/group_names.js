const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/mongoConfig')

//schema for the mongodb
const groupData = mongoose.Schema({
    GROUPNAME:{
        type: String,
        required:true
    },
    ADMIN:{
        type:String,
        required:true
    }
});


const GroupData = module.exports = mongoose.model('GroupData',groupData);

module.exports.addGroup = function(data,callback){
    console.log
    values = new GroupData({
        GROUPNAME:data.groupname,
        ADMIN:data.admin
    });
    values.save(callback);
}

module.exports.getAllGroups = function(email,callback){
    const query = {ADMIN:email}
    GroupData.find(query,callback);
}

module.exports.getAdmin = function(groupname,callback){
    const query = {GROUPNAME:groupname};
    GroupData.findOne(query,callback);
}