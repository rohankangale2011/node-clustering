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
    fulfillmentMessages: [{ "card": 
      {
        "buttons": [
          {
            "postback": "Card Link URL or text",
            "text": "Card Link Title"
          }
        ],
        "imageUrl": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
        "subtitle": "Card Subtitle",
        "title": "Card Title",
        "type": 1
      }
    }],
    source: ""
  };
  res.json(respObj);
});

module.exports = router;
