var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mysql = require('mysql');
var mongoose = require('mongoose');
var config = require('./config/mongoConfig');
var flights=require('./routes/flights');
var cors = require('cors');
var passport = require('passport');
require('./config/passport')(passport);
var mongoSessionURL = "mongodb://localhost:27017/Kayak";
var expressSessions = require("express-session");
var mongoStore = require("connect-mongo/es5")(expressSessions);
var login=require("./routes/login");
var charts=require("./routes/chart");


mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log('connected to db '+ config.database);
})

mongoose.connection.on('error',(err )=>{
    console.log('error in db '+ err);
})

var app = express();
const routes= require('./routes/login');
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    //optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
//port initialization
const port = 3300;
//middleware
app.use(cors(corsOptions));
//get static folder for front-end
app.use(express.static(path.join(__dirname,'./react-src/public')));
//body-parser

app.use(bodyParser.json());
//routing
app.use(expressSessions({
    secret: "CMPE273_passport",
    resave: false,
    //Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, //force to save uninitialized session to db.
    //A session is uninitialized when it is new but not modified.
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 6 * 1000,
    store: new mongoStore({
        url: mongoSessionURL
    })
}));
app.use(passport.initialize());
app.use(passport.session());



app.use('/routes',routes);
app.use('/search',flights);
app.use('/users',login);
app.use('/charts',charts);
app.get('/',(req,res)=>{
    res.send("Invalid end point");
});

app.listen(port,()=>{
    console.log("server has been started on port "+port);
});