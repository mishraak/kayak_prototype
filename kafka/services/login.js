var FileData = require('./filedatamodel');
let mysql=require('../config/mysql');

function handle_request(msg, callback){

    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));
   console.log(msg.type);
   // res.json({"message":"harcoded hey"});

   switch(msg.type){
       case 'get_files':
       FileData.getfiles(msg.email,(err,data)=>{
        console.log('hellow');
         if(err){
             console.log('error');
             console.log(err);
             res.json({success:false,msg:'Data is mismatched'});
         }
         else{
             console.log('basmati chawal zindabad');
             console.log("data"+ data);
             //res.json(data);
             callback(null, data);
         }
     });
       break;
       case 'getallflights':

           console.log(msg.data);
           var getFlights="select f.flight_id,date_format(arrival, '%h:%i') arrival,date_format(departure, '%h:%i') departure,class_name,prices,origin,destination from flights f join classes c on f.flight_id=c.flight_id where c.class_name='"+msg.data.class+"' and origin='"+msg.data.origin+"' and destination='"+msg.data.destination+"'";

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
   }
    
    //just call the file data model

   // callback(null, res);
}

exports.handle_request = handle_request;