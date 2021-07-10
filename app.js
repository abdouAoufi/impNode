const express = require("express");
const homeAdmin = require("./routes/home");
const aboutRouter = require("./routes/about");
const contactRouter = require("./routes/order")
const bodyParser = require("body-parser");
const path = require("path");
const { read } = require("fs");

const app = express();

// set up template engine
app.set("view engine", "ejs");
app.set("views", "views");

// let express use static files like js and css ...
app.use(express.static(path.join(__dirname, "public"))); // ? this is for serving static files ......

// let express parse incoming request ....
app.use(bodyParser.urlencoded({ extended: false }));

// use multiple middleware to handle all requests ...
app.use(homeAdmin.router);
app.use(aboutRouter);
app.use(contactRouter);


app.use((req, res, next) => {
   res.render("404");
});

app.listen(3000);
