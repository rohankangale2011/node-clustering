var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send("Default API");
});

router.get("/get", function(req, res) {
  res.send("Calling get API");
});

router.post("/webhook", function(req, res) {
  var respObj = {
    fulfillmentText: 'Default resp from webhook',
    fulfillmentMessages: [{ "text": { "text": [0,2,4] }}],
    source: ""
  };
  res.json(respObj);
});

module.exports = router;
