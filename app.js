const express = require("express");
const homeAdmin = require("./routes/home");
const aboutRouter = require("./routes/about");
const orderRouter = require("./routes/order")
const bodyParser = require("body-parser"); // this module helps you decode upcoming requests ...
const path = require("path");

const app = express();

// set up template engine in this situation is EJS template engine 
app.set("view engine", "ejs");
app.set("views", "views");

// let express use static files like js and css ...
app.use(express.static(path.join(__dirname, "public"))); // ? this is for serving static files ......

// let express parse ALL incoming request ....
app.use(bodyParser.urlencoded({ extended: false }));

// use multiple middleware to handle all requests ...
app.use(homeAdmin.router);
app.use(aboutRouter);
app.use(orderRouter);

// this will handle any unknown request 
app.use((req, res, next) => {
   res.render("404");
});

// ! the most important start the server on port 3000  
app.listen(3000);
