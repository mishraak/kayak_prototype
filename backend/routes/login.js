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
    console.log('entered');    
    
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


    /*
    dbmodel.addUser(newUser,(err,user)=>{
        if(err)
        {
            console.log(err);
            res.json({success:false,msg:'failed to register user'})
        }
        else
        {
            res.json({success:true,msg:'registered'});
        }
    });
    */
});



router.get('/getsessiondata',(req,res,next)=>{

});





router.post('/doLogin',(req,res,next)=>{
    console.log(req.body);
    passport.authenticate("login", function (err, user) {
        if (err) {
            console.log("error in passport.authenticate",err);
            res.status(500).send({message: "error in authentication"});
        }
        else {
            console.log("prinitng user",user)
            if (user.length===0) {
                console.log("no user found");
                res.status(401).send({message: "no user found by given credentials"});
            }
            else {
                req.session.user = user[0].email;
                console.log(req.session.user);
                console.log("session initilized");

                res.status(201).send({username: req.session.user});
            }
        }
    })(req, res);
   


});



module.exports = router;