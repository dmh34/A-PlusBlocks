//const express = require("express");
const mongoose = require("mongoose");
//const routes = require("./routes");
//const app = express();
const app = require('./app')
const PORT = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);

server.listen(PORT);


//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
 
//app.use(routes);



// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
