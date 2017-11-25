
var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const dbmodel = require('../models/dbmodel');
const mysql = require('mysql');
const passport = require('passport');
var kafka = require('../routes/kafka/client');
var LocalStrategy = require("passport-local").Strategy;

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

module.exports = function(passport){
    passport.use('login', new LocalStrategy({usernameField: 'email', passwordField: 'password'},function(email , password, done) {
        try {
            console.log("in passport",email,password);
            kafka.make_request('login_topic',{data:{"email":email,"password":password,op:"login"},type:"login"}, function(err,results){
                console.log('in result');
                console.log(results);
                if(err){
                    done(err,{});
                }
                else
                {
                   done(null,results);
                }
            });

        }
        catch (e){
            console.log(e);
            done(e,{});
        }
    }));

};



