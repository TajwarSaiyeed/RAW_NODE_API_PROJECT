/**
 * Title : Data save4
 * Decription:
 * Author : Abid [learn from sumit shaha]
 * Date: 17/01/2023
 */

// Dependencies
const fs = require("fs");
const path = require("path");

// module scaffolding
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, "/../.data/");

// write data to file
lib.create = (dir, file, data, callback) => {
  // open file for writing
  fs.open(`${lib.basedir + dir}/${file}.json`, "wx", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      // convert data to string
      const stringData = JSON.stringify(data);

      // write to file and close it
      fs.writeFile(fileDescriptor, stringData, (err) => {
        if (!err) {
          fs.close(fileDescriptor, (err) => {
            if (!err) {
              callback(false);
            } else {
              callback("Error closing new file!");
            }
          });
        } else {
          callback("Error writing to new file!");
        }
      });
    } else {
      callback(`Could not create new file, it may already exists!`);
    }
  });
};

// read data from file
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}/${file}.json`, "utf-8", (err, data) => {
    callback(err, data);
  });
};

// update existing files
lib.update = (dir, file, data, callback) => {
  // open file for writing
  fs.open(`${lib.basedir + dir}/${file}.json`, "r+", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      // convert the data to  string
      const stringData = JSON.stringify(data);

      // truncate the file
      fs.ftruncate(fileDescriptor, (err) => {
        if (!err) {
          // write to the file and close
          fs.writeFile(fileDescriptor, stringData, (err) => {
            if (!err) {
              // close the file
              fs.close(fileDescriptor, (err) => {
                if (!err) {
                  callback(false);
                } else {
                  callback("Error closing existing file!");
                }
              });
            } else {
              callback("Error writing to existing file!");
            }
          });
        } else {
          callback("Error truncating file!");
        }
      });
    } else {
      callback("could not open the file for updating, it may not exist yet!");
    }
  });
};

// delete a file
lib.delete = (dir, file, callback) => {
  // unlink
  fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback("Error deleting file");
    }
  });
};

module.exports = lib;
