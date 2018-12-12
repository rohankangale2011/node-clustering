var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send("Default API");
});

router.get("/get", function(req, res) {
  res.send("Calling get API");
});

router.post("/webhook", function(req, res) {
  res.json({success: true, message: 'Webhook success'});
});

module.exports = router;
