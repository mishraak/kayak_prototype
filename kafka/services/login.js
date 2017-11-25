var FileData = require('./filedatamodel');
let mysql=require('../config/mysql');

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
                 details=      msg.data.details;

           var addCars = "INSERT INTO KAYAK.CARS ( car_name, car_type, price, details) VALUES (" +                                                      
                                                        "\"" + car_name + "\"," + 
                                                        "\"" + car_type + "\"," + 
                                                        "\"" + price + "\"," + 
                                                        "\"" + details + "\");";
                                                  

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
       case 'getReturnFlights':
           console.log(msg.data);
           var getFlights="select f.flight_id,date_format(arrival, '%h:%i') arrival,date_format(departure, '%h:%i') departure,class_name,prices,origin,destination from flights f join classes c on f.flight_id=c.flight_id where c.class_name='"+msg.data.class+"' and origin='"+msg.data.destination+"' and destination='"+msg.data.origin+"' and DATE(departure)='"+msg.data.toDate+"'";

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
       case 'signup':
            console.log("msg data is" + msg.data);
           try {               
                
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
   }
}

exports.handle_request = handle_request;
