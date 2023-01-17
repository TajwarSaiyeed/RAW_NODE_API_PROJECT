/**
 * Title : sample handler
 * Decription: A RESTFul API to monitor up or down time of user defined links
 * Author : Abid [learn from sumit shaha]
 * Date: 17/01/2023
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callBack) => {
  callBack(200, {
    message: "this is a sample url",
  });
};

module.exports = handler;
