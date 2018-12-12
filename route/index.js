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
    fulfillmentMessages: [{ "messages": [
      {
        "buttons": [
          {
            "postback": "Card Link URL or text",
            "text": "Card Link Title"
          }
        ],
        "imageUrl": "http://urltoimage.com",
        "subtitle": "Card Subtitle",
        "title": "Card Title",
        "type": 1
      }
    ] }],
    source: ""
  };
  res.json(respObj);
});

module.exports = router;
