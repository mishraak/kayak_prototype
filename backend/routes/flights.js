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

router.post('/returnflights',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"getReturnFlights",data:req.body}, function(err,results){

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


router.post('/addcars',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"addcars", data:req.body.data}, function(err,results){

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

router.post('/updateFlights',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"updateFlights", data:req.body.data}, function(err,results){

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

router.post('/updateCars',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"updateCars", data:req.body.data}, function(err,results){

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

router.post('/updateHotels',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"updateHotels", data:req.body.data}, function(err,results){

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

router.post('/deleteProfile',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"deleteProfile", email:req.body.data}, function(err,results){

        console.log(results);
        if(err){
            res.json({success:false,msg:'Data is mismatched'});
            console.log(err);
            res.status(201).send("there is error in delteprofile");
        }
        else{
            res.status(201).send(results);
        }
    });
});

router.post('/getUserBookingsbydate',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"getUserBookingsbydate", date:req.body.date}, function(err,results){

        console.log(results);
        if(err){
            res.json({success:false,msg:'Data is mismatched'});
            console.log(err);
            res.status(201).send("there is error in getUserBookingsbydate");
        }
        else{
            res.status(201).send(results);
        }
    });
});

router.post('/getUserBookingsbyMonth',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"getUserBookingsbyMonth", month:req.body.month}, function(err,results){

        console.log(results);
        if(err){
            res.json({success:false,msg:'Data is mismatched'});
            console.log(err);
            res.status(201).send("there is error in getUserBookingsbyMonth");
        }
        else{
            res.status(201).send(results);
        }
    });
});
router.get('/getBookingRevenue',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"getBookingRevenue"}, function(err,results){

        console.log(results);
        if(err){
            res.json({success:false,msg:'Data is mismatched'});
            console.log(err);
            res.status(201).send("there is error in getUserBookingsbyMonth");
        }
        else{
            res.status(201).send(results);
        }
    });
});
router.get('/getBookingCount',(req,res,next)=>{
    kafka.make_request('login_topic',{"type":"getBookingCount"}, function(err,results){

        console.log(results);
        if(err){
            res.json({success:false,msg:'Data is mismatched'});
            console.log(err);
            res.status(201).send("there is error in getUserBookingsbyMonth");
        }
        else{
            res.status(201).send(results);
        }
    });
});




module.exports = router;
