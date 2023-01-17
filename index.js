/**
 * Title : Uptime Monitoring Application
 * Decription: A RESTFul API to monitor up or down time of user defined links
 * Author : Abid [learn from sumit shaha]
 * Date: 17/01/2023
 */

// Dependencies
const http = require("http");
const { handleReqRes } = require("./Helpers/handleReqRes");
const environment = require("./helpers/environment");

// app object - module staffolding
const app = {};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`server is running on port ${environment.port}`);
  });
};

// handle reaquest and response
app.handleReqRes = handleReqRes;
// start the server
app.createServer();
