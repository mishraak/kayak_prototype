
var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const dbmodel = require('../models/dbmodel');
const mysql = require('mysql');
const passport = require('passport');


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

module.exports = function(passport){
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
opts.secretOrKey = 'mySecret';
console.log('inside');
console.log(opts);
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log('jwt is')
    console.log(jwt_payload);
    dbmodel.getOneUser(jwt_payload.user[0].FIRSTNAME, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            console.log(user);
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account 
        }
    });
}));
}



