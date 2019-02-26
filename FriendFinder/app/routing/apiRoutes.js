//Load Data
// linking our routes to a series of "data" sources.

var firendsData = require("../data/friends");

//Routing

module.exports = function (app) {

    app.get("api/friends", function (req, res) {
        res.json(firendsData);
    });

    //API Post requests

    app.post("/api/friends", function (req, res) {
        res.json()
    });

}