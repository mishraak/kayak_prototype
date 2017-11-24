var FileData = require('./filedatamodel');
let mysql=require('../config/mysql');

function handle_request(msg, callback){

    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));
   console.log(msg.type);
   // res.json({"message":"harcoded hey"});

   switch(msg.type){
       case 'login':
            console.log(msg.data);
           try {

               var user="select * from users where email='"+msg.data.email+"' and password='"+msg.data.password+"'";
               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       console.log("adgad",results);
                       callback(null,results);
                   }
               }, user);
           }
           catch (err){
               console.log(err);
           }
       break;
       case 'getallflights':

           console.log(msg.data);
           var getFlights="select f.flight_id,date_format(arrival, '%h:%i') arrival,date_format(departure, '%h:%i') departure,class_name,prices,origin,destination from flights f join classes c on f.flight_id=c.flight_id where c.class_name='"+msg.data.class+"' and origin='"+msg.data.origin+"' and destination='"+msg.data.destination+"' and DATE(departure)='"+msg.data.fromDate+"'";

           try {


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       callback(null,results);
                   }
               }, getFlights);
           }
           catch (err){
               console.log(err);
           }
       break;
       case 'getallcars':

           console.log(msg.data);
           var getFlights="select * from cars where location='"+msg.data.Location+"'";

           try {


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       callback(null,results);
                   }
               }, getFlights);
           }
           catch (err){
               console.log(err);
           }
           break;
       case 'getallhotels':

           console.log(msg.data);
           var getHotels="select * from hotels h join rooms r where r.hotel_id=h.hotel_id and city='"+msg.data.Location+"'";

           try {


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       callback(null,results);
                   }
               }, getHotels);
           }
           catch (err){
               console.log(err);
           }
           break;
   }
    
    //just call the file data model

   // callback(null, res);
}

exports.handle_request = handle_request;