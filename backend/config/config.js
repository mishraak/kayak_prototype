var confid={};
const mysql = require('mysql');
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
module.exports = db.getConnection;