const express = require('express');
const router = express.Router();
var kafka = require('./kafka/client');

router.post('/',(req,res,next)=>{
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

module.exports = router;