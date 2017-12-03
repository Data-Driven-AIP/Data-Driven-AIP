var express = require("express");
var router = express.Router();
var db = ("../models");


router.get("/", function(req, res) {
    res.render("index");
});


router.get("/user_account", function(req, res) {
    res.render("partials/user/user_account");
});


// Export routes for server.js to use.
module.exports = router;