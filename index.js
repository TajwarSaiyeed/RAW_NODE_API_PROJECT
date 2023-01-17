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
const data = require("./lib/data");

// app object - module staffolding
const app = {};

// testing file system
// TODO pore muthe dibo
/*

data.create("test", "newFile", { name: "abid", language: "bangla" }, (err) => {
  console.log("this was the error", err);
});

*/

// data read

/*
  data.read("test", "newFile", (err, data) => {
    console.log(err, data);
  });
*/

// data update

/*
  data.update(
    "test",
    "newFile",
    { name: "abid", language: "bangla", age: 23, country: "BD" },
    (err) => {
      console.log(err);
    }
  );
 */

// data delete
/*
  data.delete("test", "newFile", (err) => {
    console.log(err);
  });

*/

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
