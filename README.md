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
* [siege] - Node module for the performance testing of the application

Once the application is up and running, it's time to check the benchmark of the application. Use <strong>npm run siege</strong> for getting the performance output.


### Result
Below is the result obtained by running application with and without clustering:

<strong>without clustering</strong>
    
    > node@1.0.0 siege D:\rohan\node
    > node performance.js
      starting node index.js
      GET:/
        done:1000
        200 OK: 1000
        rps: 1084
        response: 312ms(min)    690ms(max)      502ms(avg)

      GET:/get
        done:1000
        200 OK: 1000
        rps: 1447
        response: 69ms(min)     675ms(max)      504ms(avg)
        

<strong>with clustering</strong>
    
    > node@1.0.0 siege D:\rohan\node
    > node performance.js
      starting node index.js
      GET:/
        done:1000
        200 OK: 1000
        rps: 745
        response: 16ms(min)    1002ms(max)      283ms(avg)

      GET:/get
        done:1000
        200 OK: 1000
        rps: 1014
        response: 0ms(min)     754ms(max)      495ms(avg)
        response: 47ms(min)     47ms(max)      47ms(avg)


You can gather more information about node clustering from <a href="https://nodejs.org/api/cluster.html">Node Clustering</a> and siege from <a href="https://www.joedog.org/siege-home/">Siege</a>.


<strong>Note:</strong> You might see some error's while running the <strong>npm run siege</strong> command. In order to resolve those, you need to stop your nodejs server(if it is running), as siege will be using the same port for the performance testing.




