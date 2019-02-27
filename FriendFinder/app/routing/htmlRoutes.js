//Dependencies
var path = require("path");

//Routing 
module.exports = function (app) {
    //By Default, direct all the home.htlm routes to Home page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    //Routes to survey page
    app.use("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    // If no matching route is found default to home
    /*     app.get("*", function (req, res) {
            res.sendFile(path.join(_dirname + "../public/home.html"))
        }); */

};