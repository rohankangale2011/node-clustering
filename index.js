var express = require("express");
var app = express();
var routes = require("./route");
var cluster = require("cluster");

function common() {
  app.use("/", routes);
  app.listen(3002, function() {
    console.log("Listening on port 3002");
  });
}

/**
 * Function for running node without clustering
 */
function normalNode() {
  common();
}

/**
 * Function for running node with clustering
 */
function clusteredNode() {
  if (cluster.isMaster) {
    // counts the total number of available cpu's
    var cpuTotalCount = require("os").cpus().length,
      i = 0;

    // creating a worker of each of the available cpu
    for (i; i < cpuTotalCount; i++) {
      cluster.fork();
    }
  } else {
    common();
  }
}

normalNode();
//clusteredNode();

