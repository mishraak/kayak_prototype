const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/mongoConfig')

//schema for the mongodb
const userCredentials = mongoose.Schema({
    FIRSTNAME:{
        type: String,
        required:true

    },
    LASTNAME:{
        type:String,
        required:true
    },
    EMAIL:{
        type:String,
        required:true
    },
    PASSWORD:{
        type:String,
        required:true
    }
});


const UserCreds = module.exports = mongoose.model('UserCreds',userCredentials);





/***     USER CREDENTIAL METHODS...     */
module.exports.getUserById = function(id,callback){
    UserCreds.findById(id,callback)
}
module.exports.getUserByEmail = function(email,callback){
    const query = {EMAIL:email}
    UserCreds.findOne(query,callback)
}/*
module.exports.addUser = function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.PASSWORD,salt,(err,hash)=>{
            if(err) throw err;
            newUser.PASSWORD=hash;
            newUser.save(callback);
            //let sql = 'INSERT INTO UserCredentials SET ?';
           // let query = db.query(sql,newUser,callback);   
        });
        
    });
   
}
module.exports.passwordMatch = function(sentPassword,hash,callback){
    console.log(hash);
     bcrypt.compare(sentPassword,hash,(err,isMatch)=>{
         if (err) throw err;
         callback(null,isMatch);
     })
 }
*/
