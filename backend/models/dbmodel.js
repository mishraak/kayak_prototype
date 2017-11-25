const mysql = require('mysql');
const bcrypt = require('bcryptjs');
var db = mysql.createPool({
    host     : 'localhost',
    user     : 'root',    
    password : 'mysqlpassword',
    database : 'kayak',
    port	 : 3306,
    connectionLimit:500
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
        console.log('point 1');
        console.log(newUser);
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err) throw err;
                newUser.password=hash;
                let sql = 'INSERT INTO users SET ?';
                let query = db.query(sql,newUser,callback);   
            });
        });
    },
    getOneUser: function(email,callback){
        console.log(email);
        let sql = `SELECT * FROM users WHERE email = ?`;
        let query = db.query(sql,email,callback);
        console.log(query);
    },
    passwordMatch:function(sentPassword,hash,callback){
       console.log('mark3');
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
    }
   
}



