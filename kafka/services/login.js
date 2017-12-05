var FileData = require('./filedatamodel');
let mysql=require('../config/mysql');
const cache = require('./Redis');
const winston = require('winston');
require('winston-mongodb').MongoDB;
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/logSystem";
var fs=require("fs");

const reqLogger = new (winston.Logger)({
      transports: [
        new(winston.transports.MongoDB)({
                     db : 'mongodb://localhost:27017/logSystem',
                 collection: 'useractivitylogs'
                 })],
    });

function handle_request(msg, callback){

    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));
   console.log(msg.type);
   // res.json({"message":"harcoded hey"});

   switch(msg.type){
       case 'login':
          console.log("msg.data");
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
        case 'about':
            console.log(msg.data);
           try {
               var user="select email, image, password, first_name, last_name, address, city, state from USERS where email='"+msg.data+"'";
               console.log(msg.data);

               cache.get(user, (err, resCache) => {
                   if (resCache !== null) {
                       //If it does, return it in the callback
                       console.log("fetched from resCache");
                       return callback(null, resCache);
                   }
                   /*
                   At this point, we know that the data we want does not exist in the cache
                   So, we query it from our database
                   */
                   mysql.fetchData(function (err, results) {
                       if (err) {
                           console.log(err);
                           res.status(500).json({message: "An error occured"});
                       }
                       else {
                           fs.readFile("./public/uploads/a@a.com.jpg",  function (err, trex) {
                               console.log("File Read",trex.length);
                               //callback(null,trex);
                               if(results.length>0){
                                   results[0].image=trex;
                               }

                               cache.setex(user, 10,JSON.stringify(results), () => {

                                   //At this point, our data is successfully stored in the redis cache
                                   // We now return the results through the callback
                                   callback(null, results);
                               });
                           });
                       }

                   }, user);
               });
               

           }
           catch (err){
               console.log(err);
           }
          break;
               case 'aboutChange':
            console.log(msg.data);
           try {
               var user="UPDATE USERS" + 
                            " SET " +
                              "password=\"" + msg.data.password + "\", "+
                              "first_name=\"" + msg.data.first_name + "\", "+
                              "last_name=\"" + msg.data.last_name + "\", "+
                              "address=\"" + msg.data.address + "\", "+
                              "city=\"" + msg.data.city + "\", "+
                              "state=\"" + msg.data.state + "\" "+                             
                            "WHERE email = \"" + msg.data.email + "\";";


               console.log(msg.user);
               
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
       case 'addcars':
            console.log("car_name" + msg.data.car_name);
            var  car_name=    msg.data.car_name,
                 car_type=   msg.data.car_type,
                 price=       msg.data.price,
                 details=      msg.data.details,
                 location=msg.data.location;

           var addCars = "INSERT INTO KAYAK.CARS ( car_name, car_type, price, details,location) VALUES (" +
                                                        "\"" + car_name + "\"," + 
                                                        "\"" + car_type + "\"," + 
                                                        "\"" + price + "\"," +
                                                       "\"" + details + "\"," +
                                                       "\"" + location + "\");";
                                                  

           try {
               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       callback(null,results);
                   }
               }, addCars);
           }
           catch (err){
               console.log(err);
           }
           
       break;       
       case 'addflights':
            console.log("airline" + msg.data.flight_id);
            var  flight_id=    msg.data.flight_id,
                 class_name=   msg.data.class_name,
                 prices=       msg.data.prices,
                 airline=      msg.data.airline,
                 departure=    msg.data.departure,
                 arrival=      msg.data.arrival,
                 origin=       msg.data.origin,
                 destination=  msg.data.destination


           var addToFlight = "INSERT INTO KAYAK.FLIGHTS (flight_id, airline, departure, arrival, origin, destination) VALUES (" +                                                      
                                                        "\"" + flight_id + "\"," + 
                                                        "\"" + airline + "\"," + 
                                                        "\"" + departure + "\"," + 
                                                        "\"" + arrival + "\"," + 
                                                        "\"" + origin + "\"," + 
                                                        "\"" + destination + "\");";

            var addToClass = "INSERT INTO KAYAK.CLASSES (flight_id, class_name, prices) VALUES (" +                                                      
                                              "\"" + flight_id + "\"," + 
                                              "\"" + class_name + "\"," + 
                                              "\"" + prices + "\");";                                                        

           try {
               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                        try {
                               mysql.fetchData(function (err, results) {
                                   if (err) {
                                       console.log(err);
                                       res.status(500).json({message: "An error occured"});
                                   }
                                   else {

                                       callback(null,results);
                                       
                                   }
                               }, addToClass);
                           }
                           catch (err){
                               console.log(err);
                           }
                       callback(null,results);
                   }
               }, addToFlight);
           }
           catch (err){
               console.log(err);
           }
       break;
       case 'addhotels':
            console.log("hotel" + msg.data.hotel_name);

            var  hotel_id=    msg.data.hotel_id,
                 hotel_name=    msg.data.hotel_name,
                 address=   msg.data.address,
                 city=       msg.data.city,
                 state=      msg.data.state,
                 zip_code=    msg.data.zip_code,
                 stars=      msg.data.stars,
                 rooms=       msg.data.rooms,
                 ratings=  msg.data.ratings
                 reviews=    msg.data.reviews,
                 room_type=      msg.data.room_type,
                 price=       msg.data.price;


           var addToHotel = "INSERT INTO KAYAK.HOTELS ( hotel_id, hotel_name, address, city, state, zip_code, stars, rooms, ratings, reviews) VALUES (" +                                                      
                                                        "\"" + hotel_id + "\"," + 
                                                        "\"" + hotel_name + "\"," + 
                                                        "\"" + address + "\"," + 
                                                        "\"" + city + "\"," +   
                                                        "\"" + state + "\"," + 
                                                        "\"" + zip_code + "\"," +
                                                        "\"" + stars + "\"," + 
                                                        "\"" + rooms + "\"," + 
                                                        "\"" + ratings + "\"," + 
                                                        "\"" + reviews + "\");";                                                        

            var addToRoom = "INSERT INTO KAYAK.ROOMS (room_type, price, hotel_id) VALUES (" +                                                                                                    
                                              "\"" + room_type + "\"," + 
                                              "\"" + price + "\"," + 
                                              "\"" + hotel_id + "\");";                                                        
         
           try {
               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                        try {
                               mysql.fetchData(function (err, results) {
                                   if (err) {
                                       console.log(err);
                                       res.status(500).json({message: "An error occured"});
                                   }
                                   else {
                                       callback(null,results);  
                                   }
                               }, addToRoom);
                           }
                           catch (err){
                               console.log(err);
                           }
                       callback(null,results);
                   }
               }, addToHotel);
           }
           catch (err){
               console.log(err);
           }
       break;
       case 'getallflights':
           console.log(msg.data);
           var getFlights="select f.airline,f.flight_id,date_format(arrival, '%h:%i') arrival,date_format(departure, '%h:%i') departure,class_name,prices,origin,destination from flights f join classes c on f.flight_id=c.flight_id where c.class_name='"+msg.data.class+"' and origin='"+msg.data.origin+"' and destination='"+msg.data.destination+"' and DATE(departure)='"+msg.data.fromDate+"'";

           try {

               cache.get(getFlights, (err, resCache) => {
                   if (resCache !== null) {
                       //If it does, return it in the callback
                       console.log("fetched from resCache");
                       return callback(null, resCache);
                   }
                   /*
                   At this point, we know that the data we want does not exist in the cache
                   So, we query it from our database
                   */
                   mysql.fetchData(function (err, results) {
                       if (err) {
                           console.log(err);
                           res.status(500).json({message: "An error occured"});
                       }
                       else {

                           cache.setex(getFlights, 10,JSON.stringify(results), () => {

                               //At this point, our data is successfully stored in the redis cache
                               // We now return the results through the callback
                               callback(null, results);
                           });
                           //cache.setex('getFlights', 5);
                       }


                   }, getFlights);
               });
           }

           catch (err){
               console.log(err);
           }
       break;
       case 'getReturnFlights':
           console.log(msg.data);
           var getReturnFlights="select f.flight_id,date_format(arrival, '%h:%i') arrival,date_format(departure, '%h:%i') departure,class_name,prices,origin,destination from flights f join classes c on f.flight_id=c.flight_id where c.class_name='"+msg.data.class+"' and origin='"+msg.data.destination+"' and destination='"+msg.data.origin+"' and DATE(departure)='"+msg.data.toDate+"'";

           try {
               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       callback(null,results);
                   }
               }, getReturnFlights);
           }
           catch (err){
               console.log(err);
           }
           break;
       case 'signup':
            console.log("msg data is" + msg.data);
           var checkuser="select * from users where email='"+msg.data.email+"'";

           try {

               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       if(results.length>0){
                           callback(null,"duplicate user");
                       }
                       else{
                           var  first_name=   msg.data.first_name,
                               last_name=    msg.data.last_name,
                               password=     msg.data.password,
                               email=        msg.data.email,
                               city=         msg.data.city,
                               address=      msg.data.address,
                               state=        msg.data.state,
                               zip_code=     msg.data.zip_code,
                               phone=        msg.data.phone,
                               trip_id=      msg.data.trip_id,
                               image=        msg.data.image,
                               credit_card=  msg.data.credit_card,
                               user_status=  msg.data.user_status;

                           console.log("first_name " + first_name );
                           console.log("last_name " + last_name );
                           console.log("password " + password );


                           var user = "INSERT INTO KAYAK.USERS ( first_name, last_name, email, address, city, state, zip_code, phone," +
                               "trip_id, image, credit_card, user_status, password) VALUES (" +
                               "\"" + first_name + "\"," +
                               "\"" + last_name + "\"," +
                               "\"" + email + "\"," +
                               "\"" + address + "\"," +
                               "\"" + city + "\"," +
                               "\"" + state + "\"," +
                               zip_code + "," +
                               phone + "," +
                               trip_id + "," +
                               "\"" + image + "\"," +
                               credit_card + "," +
                               user_status +  "," +
                               "\"" + password + "\");";

                           console.log(user);

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

                   }
               }, checkuser);
                

           }
           catch (err){
               console.log(err);
               //catch
           }
       break;

      case 'getallcars':

           console.log(msg.data);
           var getCars="select * from cars where location='"+msg.data.Location+"'";

           try {


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       callback(null,results);
                   }
               }, getCars);
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
       case 'book':

           console.log(msg.data);
           var book="INSERT INTO billing (" +
               "booking_type," +
               "amount," +
               "user_id)" +
               "VALUES " +
               "('" + msg.data.type+"',"+msg.data.amount+",(select user_id from users where email='"+msg.data.email+"')"+
               ")";

           try {


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       callback(null,results);
                   }
               }, book);
               var decrease="update flights set seat=seat-1";



               mongo.connect(mongoURL,function (){
                   let conn=mongo.collection("flightBookings");
                   conn.insertOne({origin:msg.data.origin,destination:msg.data.destination,bookingType:msg.data.type,amount:msg.data.amount,time:new Date(),name:msg.data.name}, function (err, doc) {
                       if (err) console.log("error-",err);
                       console.log("doc-",doc);
                       callback(null,"done");
                   })
               });
           }
           catch (err){
               console.log(err);
           }
           break;

       case 'userBookings':

           console.log(msg.data);
           var getBookings="select * from billing where user_id=( select user_id from users where email='"+msg.data.email+"')";

           try {


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       callback(null,results);
                   }
               }, getBookings);
           }
           catch (err){
               console.log(err);
           }
           break;
       case 'log_login':

           console.log(msg.data);

           try {
               reqLogger.info(`${msg.data.username} has logged in`,{
                       httpRequest:{
                          status: msg.data.status,
                           requestUrl: msg.data.requestUrl,
                           requestMethod: msg.data.requestMethod,
                           remoteIp: msg.data.remoteIp,
                       }
               });
           }
           catch (err){
               console.log(err);
           }
           break;
       case 'logPageClick':

           console.log(msg);
           mongo.connect(mongoURL,function (){
               let conn=mongo.collection("pageClicks");
               conn.findOneAndUpdate({page:msg.data.page}, {$inc: {clicks: 1}}, function (err, doc) {
                   if (err) console.log("error-",err);
                   console.log("doc-",doc);
                   callback(null,"done");
               })
           });
           break;
       case 'getPageClick':

           console.log(msg);
           mongo.connect(mongoURL,function (){
               mongo.collection("pageClicks").find({}).toArray(function(err, result) {
                   if (err) throw err;
                   console.log(result);
                   callback(null,result);
               });
           });
           break;
       case 'uploadProfilePic':
           try {


               var buffer = new Buffer(msg.files.buffer);

               fs.open("./public/uploads/a@a.com.jpg", 'w', function(err, fd) {
                   if (err) {
                       console.log(err);
                   }

                   fs.write(fd, buffer, 0, buffer.length, null, function(err) {
                       if (err) throw 'error writing file: ' + err;
                       fs.close(fd, function() {
                           console.log('file written');
                       })
                   });
               });
               callback(null,"success");
               // console.log(msg.file.value);

           }
           catch(err){
               console.log(err);
           }
           break;
       case 'getMostPopularAirlines':

           console.log(msg);
           mongo.connect(mongoURL,function (){
               mongo.collection("flightBookings").aggregate([{"$group" : {_id:"$name", count:{$sum:1}}}]).toArray(function(err, result) {
                   if (err) throw err;
                   console.log(result);
                   callback(null,result);
               });
           });
           break;

       case 'getMostPopularAirports':

           console.log(msg);
           mongo.connect(mongoURL,function (){
               mongo.collection("flightBookings").aggregate([{"$group" : {_id:"$origin", count:{$sum:1}}}]).toArray(function(err, result) {
                   if (err) throw err;
                   console.log(result);
                   callback(null,result);
               });
           });
           break;
       case 'searchFlight':

           console.log(msg);
           console.log(msg.data);
           var searchFlight="select f.airline,f.flight_id,date_format(arrival, '%h:%i') arrival,date_format(departure, '%h:%i') departure,class_name,prices,origin,destination from flights f join classes c on f.flight_id=c.flight_id where f.flight_id='"+msg.data.id+"'";

           try {


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       callback(null,results);
                   }
               }, searchFlight);
           }
           catch (err){
               console.log(err);
           }

           break;

       case 'searchCar':

           console.log(msg);
           console.log(msg.data);
           var searchCar="select * from cars where car_id='"+msg.data.id+"'";
           try {


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       callback(null,results);
                   }
               }, searchCar);
           }
           catch (err){
               console.log(err);
           }

           break;

       case 'searchHotel':

           console.log(msg);
           console.log(msg.data);
           var searchHotel="select * from hotels h join rooms r where r.hotel_id=h.hotel_id and h.hotel_id='"+msg.data.id+"'";
           try {
               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       res.status(500).json({message: "An error occured"});
                   }
                   else {
                       callback(null,results);
                   }
               }, searchHotel);
           }
           catch (err){
               console.log(err);
           }

           break;

       case 'updateFlights':
           console.log(msg.data);
           try {
               var user="UPDATE FLIGHTS" +
                   " SET " +
                   "departure=\"" + msg.data.departure + "\", "+
                   "arrival=\"" + msg.data.arrival + "\", "+
                   "origin=\"" + msg.data.origin + "\", "+
                   "destination=\"" + msg.data.destination + "\""+
                   "WHERE flight_id = \"" + msg.data.flight_id + "\";";


               console.log(msg.user);

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
       case 'updateCars':
           console.log(msg.data);
           try {
               var user="UPDATE CARS" +
                   " SET " +
                   "car_name=\"" + msg.data.car_name + "\", "+
                   "car_type=\"" + msg.data.car_type + "\", "+
                   "price=\"" + msg.data.price + "\", "+
                   "details=\"" + msg.data.details + "\""+
                   "WHERE car_id = \"" + msg.data.car_id + "\";";


               console.log(msg.user);

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
       case 'updateHotels':
           console.log(msg.data);
           try {
               var user="UPDATE HOTELS" +
                   " SET " +
                   "hotel_name=\"" + msg.data.hotel_name + "\", "+
                   "address=\"" + msg.data.address + "\", "+
                   "rooms=\"" + msg.data.rooms + "\", "+
                   "stars=\"" + msg.data.stars + "\" "+
                   "WHERE hotel_id = \"" + msg.data.hotel_id + "\";";


               console.log(msg.user);

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
       case 'deleteProfile':
           console.log(msg.data);
           try {
               var deleteProfile="delete from users where email='"+msg.email+"'";


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       callback(err,null);
                   }
                   else {
                       console.log("adgad",results);
                       callback(null,results);
                   }
               }, deleteProfile);
           }
           catch (err){
               console.log(err);
           }
           break;
       case 'getUserBookingsbydate':
           console.log(msg.data);
           try {
               var getUserBookingsbydate="select sUBSTRING(billing_date, 1, 10) billing_date,booking_type,amount from billing where SUBSTRING(billing_date, 1, 10)='"+msg.date+"'";


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       callback(err,null);
                   }
                   else {
                       console.log("adgad",results);
                       callback(null,results);
                   }
               }, getUserBookingsbydate);
           }
           catch (err){
               console.log(err);
           }
           break;

       case 'getUserBookingsbyMonth':
           console.log(msg.data);
           try {
               var firstday = new Date(2017,msg.month-1,1);
               var lastday = new Date(2017,msg.month,0);
               var getUserBookingsbyMonth="select * from billing where date(billing_date)>='"+firstday.toISOString().substring(0, 10)+"' && date(billing_date)<='"+lastday.toISOString().substring(0, 10)+"'";


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       callback(err,null);
                   }
                   else {
                       console.log("adgad",results);
                       callback(null,results);
                   }
               }, getUserBookingsbyMonth);
           }
           catch (err){
               console.log(err);
           }
           break;

       case 'getBookingRevenue':
           console.log(msg.data);
           try {

               var getBookingRevenue="select booking_type,sum(amount) sum from billing group by booking_type";


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       callback(err,null);
                   }
                   else {
                       console.log("adgad",results);
                       callback(null,results);
                   }
               }, getBookingRevenue);
           }
           catch (err){
               console.log(err);
           }
           break;
       case 'getBookingCount':
           console.log(msg.data);
           try {

               var getBookingCount="select booking_type,count(*) count from billing group by booking_type";


               mysql.fetchData(function (err, results) {
                   if (err) {
                       console.log(err);
                       callback(err,null);
                   }
                   else {
                       console.log("adgad",results);
                       callback(null,results);
                   }
               }, getBookingCount);
           }
           catch (err){
               console.log(err);
           }
           break;

   }

}

exports.handle_request = handle_request;
