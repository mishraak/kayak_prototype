const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const dbmodel = require('../models/dbmodel');
const passport = require('passport');
var fs = require("fs");
var formidable = require('formidable');
var multer = require('multer');
var path = require('path');
var uuid = require('uuid');
var FileData = require('../models/filedatamodel');
var GroupData = require('../models/group_names');
var GroupRawData = require('../models/group_rawdata');
var kafka = require('./kafka/client');

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        console.log(file);
        cb(null,path.join(__dirname,'../images/'));
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname);
    }
});

var upload = multer({storage:storage});

router.post('/signup',(req,res,next)=>{
    console.log('signup');    
    
    try {   
            kafka.make_request('login_topic',{data: req.body, type:"signup"}, function(err,results){                
                console.log(results);
                if(err){
                    res.status(404);
                }
                else
                {
                   res.status(200);                    
                }
            });

        }
        catch (e){
            console.log(e);            
        }
});

router.post('/about',(req,res,next)=>{
    console.log('about');    
    
    try {
            
            kafka.make_request('login_topic',{data: req.body.email, type:"about"}, function(err,results){                
                console.log(results);
                if(err){
                    res.status(404);
                }
                else
                {
                   res.status(200).send(results);                    
                }
            });

        }
        catch (e){
            console.log(e);            
        }
});

router.post('/aboutChange',(req,res,next)=>{
    console.log('aboutChange');    
    
    try {            
            kafka.make_request('login_topic',{data: req.body.payload, type:"aboutChange"}, function(err,results){                
                console.log(results);
                if(err){
                    res.status(404);
                }
                else
                {
                   res.status(200);                    
                }
            });

        }
        catch (e){
            console.log(e);            
        }
});






router.get('/getsessiondata',(req,res,next)=>{

});

router.post('/logPageClick',(req,res,next)=>{
    try {
        console.log(req.body);
        kafka.make_request('login_topic',{data: req.body, type:"logPageClick"}, function(err,results){
            console.log(results);
            if(err){
                res.status(404);
            }
            else
            {
                res.status(200);
            }
        });

    }
    catch (e){
        console.log(e);
    }

});





router.post('/doLogin',(req,res,next)=>{
    console.log("printing body");
    console.log(req.body);
    passport.authenticate("login", function (err, user) {
        if (err) {
            console.log("error in passport.authenticate",err);
            res.status(500).send({message: "error in authentication"});
        }
        else {
            console.log("prinitng user", user)
            if (user.length===0) {
                console.log("no user found");
                res.status(401).send({message: "no user found by given credentials"});
            }
            else {
                req.session.user = user[0].email;
                console.log(req.session.user);
                console.log("session initilized");
                console.log("user");
                console.log(user[0]);
                var data={

                           status: res.statusCode,
                               requestUrl: req.url,
                              requestMethod: req.method,
                             remoteIp: req.connection.remoteAddress,
                    username:req.session.user

                    };
                try {
                    kafka.make_request('login_topic',{data: data, type:"log_login"}, function(err,results){
                        console.log(results);
                        if(err){
                            res.status(404);
                        }
                        else
                        {
                            res.status(200);
                        }
                    });

                }
                catch (e){
                    console.log(e);
                }

                res.status(201).send(user[0]);
            }
        }
    })(req, res);
});



module.exports = router;