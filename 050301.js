
var path = require("path");

/// Khai bao su dung Library 
// *** chu y, cai dat Library:  npm install --save express
const express = require('express');
const app = express();
const Handlebars = require('handlebars');

hbs   = require( 'express-handlebars' );
//  /A/B/C/D/.........
//view engine setup 
app.set("views", path.join(__dirname, "views")); //setting views directory for views. 
app.set("view engine", "hbs"); //setting view engine as handlebars 

/// PUBLIC FILEs
app.use(express.static('public'))
// gan them json
app.use(express.json());
app.use(express.urlencoded());

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

/// Khai bao cac Config, Params
const hostname = "localhost";
const port = process.env.PORT || 3000;

// ket noi mongoose
const url =  "mongodb+srv://manbo214xmen:1234phuc@test.3r3dw.mongodb.net/Test?retryWrites=true&w=majority"

const mongoose = require("mongoose");
mongoose.connect(
    url, 
    {   useNewUrlParser: true , useUnifiedTopology: true }
);

/// Khai bao Variables
var solan = 0;

/// REQ chung 
app.use(
    (req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        console.log("--- ", Date.now(), " \t request !!!", solan++ , req.url);
        next();
    }
);
/// Error-Handling
app.use(
    (err, req, res, next) => {
        res.statusCode = 500;
        console.log("--- ERR", Date.now(), " \t request !!!", solan++ , req.url, err);
        res.end("Broking !!!");
    }
);
/// Khai Bao CODE Xu Ly cho URL dua vao Express - Router
/// gan root URL vao Router
const homeRouter = require("./routes/homeRoutes");
app.use("/", homeRouter);

// Add them LIB Routing (Controller)
const foodRouter = require("./routes/foodRoutes");
app.use("/food", foodRouter);

const aboutRouter = require("./routes/aboutRoutes");
app.use("/about", aboutRouter);

const contactRouter = require("./routes/contactRoutes");
app.use("/contact", contactRouter);

const productRouter = require("./routes/productRoutes");
app.use("/products", productRouter);

const orderRouter = require("./routes/orderRoutes");
app.use("/order", orderRouter);

// MVC - Model (DB) - View (UI) - Controller (Code - processing / Route)
/// Open Server - Listen PORT
app.listen( port, () => {
    console.log("Start SERVER - LISTEN ", port);
});


