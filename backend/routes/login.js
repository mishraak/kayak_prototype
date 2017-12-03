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



var upload = multer({storage: multer.memoryStorage(), limits: {fileSize: 12*1000*1000}});

router.post('/signup',(req,res,next)=>{
    console.log('signup');    
    
    try {   
            kafka.make_request('login_topic',{data: req.body, type:"signup"}, function(err,results){                
                console.log(results);
                if(err){
                    res.status(404).send(err);
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
                res.status(500).send("error");
            }
            else
            {
                res.status(200).send("success");
            }
        });

    }
    catch (e){
        console.log(e);
    }

});

router.get('/getPageClick',(req,res,next)=>{
    try {
        console.log(req.body);
        kafka.make_request('login_topic',{ type:"getPageClick"}, function(err,results){
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

router.get('/insertActivity',(req,res,next)=>{
    try {
        console.log(req.body);
        kafka.make_request('login_topic',{ data:req.body,type:"insertActivity"}, function(err,results){
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


                res.status(201).send(user[0]);
            }
        }
    })(req, res);
});

router.post('/uploadProfilePic' ,upload.any(),function (req, res) {

    try {

        console.log("body in upload",req.body);
        console.log("multer file",req.files);
        console.log("multer buffer",req.files[0].buffer);
        kafka.make_request('login_topic', {files:req.files[0],userId:req.body.userId,type:"uploadProfilePic"}, function (err, results) {
            console.log('in result');
            //console.log(results);
            if (err) {
                console.log(err);
                res.status(500).send(results);
            }
            else {
                res.status(201).send(results);
            }
        });


    }
    catch(err){
        console.log(err);
    }

});


module.exports = router;