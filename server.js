const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var corsOptons = {origin: "http://localhost:8080/"};


const app = express();



app.use (cors(corsOptons));

app.use (bodyParser.json());

app.use (bodyParser.urlencoded({extended:true}));


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