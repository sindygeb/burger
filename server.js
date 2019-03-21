//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//EXPRESS
var app = express();
var port = process.env.PORT || 3000;

//CSS
app.use(express.static(__dirname + '/public'));

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(methodOverride("_method"));

//HANDLEBARS
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ROUTER
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//LISTENER
app.listen(port);