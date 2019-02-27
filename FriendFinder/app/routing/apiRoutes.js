//Load Data
// linking our routes to a series of "data" sources.

var friends = require('../data/friends.js');

//Routing

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //API Post requests
    app.post("/api/friends", function (req, res) {
        // Create an object to hold the best Match info
        var bestMatch = {
            name: "",
            image: "",
            friendDifference: 1000
        };
    });

}