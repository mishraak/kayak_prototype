const express = require('express');
const router = express.Router();
var kafka = require('./kafka/client');

router.get('/getMostPopularAirlines',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"getMostPopularAirlines"}, function(err,results){

        console.log('in routes/chart.js getMostPopularAirlines');
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
router.get('/getMostPopularAirports',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"getMostPopularAirports"}, function(err,results){

        console.log('in routes/chart.js getMostPopularAirports');
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

router.post('/searchFlight',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"searchFlight",data:req.body}, function(err,results){

        console.log('in searchFlight');
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

router.post('/searchCar',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"searchCar",data:req.body}, function(err,results){

        console.log('in searchCar');
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

router.post('/searchHotel',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"searchHotel",data:req.body}, function(err,results){

        console.log('in searchCar');
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