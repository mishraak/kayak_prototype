const mysql = require('mysql');
const bcrypt = require('bcryptjs');
var fs = require("fs");
const db = mysql.createPool({
    connectionLimit:50,
    host:'localhost',
    user:'root',
    password:'root',
    database:'dropbox_userdb'
});
db.getConnection((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected to db');
    }
});

module.exports={
    addUser: function(newUser,callback){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.PASSWORD,salt,(err,hash)=>{
                if(err) throw err;
                newUser.PASSWORD=hash;
                let sql = 'INSERT INTO UserCredentials SET ?';
                let query = db.query(sql,newUser,callback);   
            });
        });
    },
    getOneUser: function(email,callback){
        console.log(email);
        let sql = `SELECT * FROM UserCredentials WHERE EMAIL = ?`;
        let query = db.query(sql,email,callback);
        console.log(query);
    },
    passwordMatch:function(sentPassword,hash,callback){
       console.log(hash);
        bcrypt.compare(sentPassword,hash,(err,isMatch)=>{
            if (err) throw err;
            callback(null,isMatch);
        })
    },
    
    uploadfile: function(data,callback){
        console.log(data.id);
        let sql = "Insert Into File_Uploads SET ?",
        values = {
            FileId:data.id,
            EMAIL:'testuser3@gmail.com',
            FILENAME: data.filename
        }
        let query = db.query(sql,values,callback);
/*
        fs.open(filepath, 'r', function (status, fd) {
            if (status) {
                console.log(status.message);
                return;
            }
            const stats = fs.statSync(filepath)
            const fileSizeInBytes = stats.size
           
            var buffer = new Buffer(fileSizeInBytes);
            fs.read(fd, buffer, 0, fileSizeInBytes, 0, function (err, num) {
                let sql = "Insert Into File_Uploads SET ?",
                values = {
                    FileId:'ascs130',
                    EMAIL:'testuser3@gmail.com',
                    FILE_DATA: buffer
                }
                let query = db.query(sql,values,callback);
            });
        });*/
    },
    downloadfile: function(email,callback){
        let sql = "Select FILE_DATA FROM File_Uploads WHERE EMAIL = ?";
        let zyn = db.query(sql,email,callback); 
    },
    getfiles: function(email,callback){
        let sql = "Select * FROM File_Uploads WHERE EMAIL = ?";
        let zyn = db.query(sql,email,callback);
    }
   
}



