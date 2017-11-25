var confid={};
const mysql = require('mysql');
const db = mysql.createPool({
    connectionLimit:50,
    host:'localhost',
    user:'root',
    password:'mysqlpassword',
    database:'kayak'
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