//Dependencies

var express = require("express");
var path = require("path");

//Creating the Express and server
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));
//Router
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener - is server connected

app.listen(PORT, function () {
    console.log("Friend finder App listening on port: " + PORT);
});