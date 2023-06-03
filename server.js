const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// var corsOptons = {origin: "http://localhost:8000/"};


const app = express();



const corsConfig = require('./config/cors.config');
app.use(cors(corsConfig.corsOptions));


// app.use (cors(corsOptons));

app.use (bodyParser.json());

app.use (bodyParser.urlencoded({extended:true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, POST, GET');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
  });
  

// Routes 
require("./app/routes/admin.routes")(app, express);

//simple route
app.get ("/", (req, res) => {
res.json({message: "Welcome to Api's"});
});

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
console.log (`Server is running on port ${PORT}.` );
});