const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/mongoConfig');


const File_Uploads = mongoose.Schema({
    FileId:{
        type:String,
        required:true
    },
   EMAIL:{
       type:String,
       required: true
   },
   FILENAME:{
       type:String
   },
   STARRED:{
       type:Boolean
   }
});


const FileData = module.exports = mongoose.model('FileData',File_Uploads);

module.exports.uploadfile = function(data,callback){
    values = new FileData({
        FileId:data.id,
        EMAIL:'testuser3@gmail.com',
        FILENAME: data.filename,
        STARRED:false
    });
    values.save(callback);
}

module.exports.getfiles = function(email,callback){
    console.log("file data ke andar bahars");
    const query = {EMAIL:email};
    FileData.find(query,callback);
}