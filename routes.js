/**
 * Title : Routes
 * Decription: A RESTFul API to monitor up or down time of user defined links
 * Author : Abid [learn from sumit shaha]
 * Date: 17/01/2023
 */

// Dependencies
const { sampleHandler } = require("./handlers/sampleHandler");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
