const express = require('express');
const router = express.Router();
var kafka = require('./kafka/client');


router.post('/flights',(req,res,next)=>{
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

router.post('/addflights',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"addflights", data:req.body.data}, function(err,results){

        console.log('in kafka callback flights/ from flights.js line 27');
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

router.post('/addhotels',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"addhotels", data:req.body.data}, function(err,results){

        console.log('in kafka callback flights/ from flights.js line 27');
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

router.post('/userBookings',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"userBookings",data:req.body}, function(err,results){


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


module.exports = router;
