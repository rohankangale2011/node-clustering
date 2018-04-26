# node-clustering
Performing clustering in nodejs application in order to improve your server's performance/response.

### Quick start
Run the following commands once you clone the repo:

    npm install
    npm start
    
<i>Make sure that all the dependencies are installed and after running <b>npm start</b>, you see a console saying "Listening on port 3002". You can change the port as per your convenience.</i>


### Description
Node.js runs on a single thread, resulting to be faster in most of the cases. Although node couldn't take the advantages of the multiple processes(made available by the system). With <strong>clustering</strong>, a node application can create a small network of processes and gain the full power of your server/system.


### Features
* [Node] - Server running on node
* [Express] - Nodejs framework for interacting with request/response from the web/front-end
* [cluster] - Node module <strong>cluster</strong> for implementing clustering in the node application

You can gather more information about node clustering from <a href="https://nodejs.org/api/cluster.html">Here</a>.




