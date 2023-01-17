/**
 * Title : Uptime Monitoring Application
 * Decription: A RESTFul API to monitor up or down time of user defined links
 * Author : Abid [learn from sumit shaha]
 * Date: 17/01/2023
 */

// Dependencies
const http = require("http");

// app object - module staffolding
const app = {};

// configuration
app.config = {
  port: 8000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`server is running on port ${app.config.port}`);
  });
};

// handle reaquest and response
app.handleReqRes = (req, res) => {
  // handle request
  // handle response
  res.end("hello programmers, good morning");
};

// start the server
app.createServer();
