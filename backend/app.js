var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongoose = require('mongoose');
var config = require('./config/mongoConfig');
var cors = require('cors');
var passport = require('passport');


mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log('connected to db '+ config.database);
})

mongoose.connection.on('error',(err )=>{
    console.log('error in db '+ err);
})

var app = express();
const routes= require('./routes/login');

//port initialization
const port = 8080;
//middleware
app.use(cors());
//get static folder for front-end
app.use(express.static(path.join(__dirname,'./react-src/public')));
//body-parser

app.use(bodyParser.json());
//routing
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


app.use('/routes',routes);
app.get('/',(req,res)=>{
    res.send("Invalid end point");
});

app.listen(port,()=>{
    console.log("server has been started on port "+port);
});