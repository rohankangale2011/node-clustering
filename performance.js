var siege = require("siege");

siege("node index.js")
  .on(3002)
  .concurrent(1000)
  .for(1000).times
  .get("/")
  .get("/get")
  .attack();
