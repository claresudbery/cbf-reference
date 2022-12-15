const fs = require("fs");

const log = {
  info: function (msg) {
    console.info(msg);
  },

  write: function (msg) {
    // Sync version (reliable order of lines)
    fs.appendFileSync("log.txt", `${msg}\n`);

    // Async version (lines get printed in unpredictable order):
    // fs.appendFile("log.txt", `${msg}\n`, function (err, data) {
    //   if (err) {
    //     console.error(`Failed to write data!: '${data}'`);
    //     return console.error(err);
    //   }
    // });
  }
};
module.exports = log;
