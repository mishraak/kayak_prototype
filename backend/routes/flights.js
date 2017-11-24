const express = require('express');
const router = express.Router();
var kafka = require('./kafka/client');

<<<<<<< HEAD
router.post('/flights',(req,res,next)=>{
=======
router.post('/',(req,res,next)=>{
>>>>>>> master
    kafka.make_request('login_topic',{"type":"getallflights",data:req.body}, function(err,results){

        console.log('in kafka callback flights/ from flights.js line 8');
        console.log(results);
        if(err){
            res.json({success:false,msg:'Data is mismatched'});
            console.log(err);
            res.status(201).send("there is error");
        }
        else{
            res.status(201).send(results);
        }

    });

});

<<<<<<< HEAD
router.post('/cars',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"getallcars",data:req.body}, function(err,results){


        console.log(results);
        if(err){
            res.json({success:false,msg:'Data is mismatched'});
            console.log(err);
            res.status(201).send("there is error");
        }
        else{
            res.status(201).send(results);
        }

    });

});

router.post('/hotels',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"getallhotels",data:req.body}, function(err,results){


        console.log(results);
        if(err){
            res.json({success:false,msg:'Data is mismatched'});
            console.log(err);
            res.status(201).send("there is error");
        }
        else{
            res.status(201).send(results);
        }

    });

});

router.post('/book',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"book",data:req.body}, function(err,results){


        console.log(results);
        if(err){
            res.json({success:false,msg:'Data is mismatched'});
            console.log(err);
            res.status(201).send("there is error");
        }
        else{
            res.status(201).send(results);
        }

    });

});

=======
>>>>>>> master
module.exports = router;