/**
 * Title : Environment handler
 * Decription: Handle all environment related things
 * Author : Abid [learn from sumit shaha]
 * Date: 17/01/2023
 */

// Dependencies

// module scaffolding
const environments = {};

environments.staging = {
  port: 5000,
  envName: "staging",
};

environments.production = {
  port: 6000,
  envName: "production",
};

// determine which environment was passed as a command-line argument
const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// export corresponding environment object
const environmentToExport =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments.staging;

// export the module
module.exports = environmentToExport;
