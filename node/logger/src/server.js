const express = require("express");
const app = express();
const currentYear = new Date().getFullYear();
const logger = require("./logger.js");
const fs = require("fs");

app.use(express.json());
var profiles = require("./models/profiles.json");

const currentDate = function() {
  const date = new Date();
  let day = ("0" + date.getDate()).slice(-2);
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

const currentTime = function() {
  const date = new Date(); 
  let hours = ("0" + date.getHours()).slice(-2); 
  let minutes = ("0" + date.getMinutes()).slice(-2); 
  return `${hours}:${minutes}`;
}

const logData = function(method, output) {
  logger.info(`Logging ${method} request`);
  logger.write("-----------");
  logger.write(`${currentDate()} ${currentTime()}`);
  logger.write(`Request method: ${method}`);
  logger.write(`Output: ${output}`);
}


app.get("/", (req, res) => {
  const output = "Morning";
  logData("GET", output);
  res.send(output);
});

app.patch("/greet", (req, res) => {
  const output = "Good Evening";
  logData("PATCH", output);
  res.send(output);
});

app.post("/bye", (req, res) => {
  const output = "Good Night";
  logData("POST", output);
  res.send(output);
});

app.put("/api/profiles/:id", (req, res) => {
  // profiles is defined on line 8 above.
  var item = profiles.find(profile => profile.id === parseInt(req.params.id, 10));
  if (item) {
    item.firstname = req.body.firstname;
    item.lastname = req.body.lastname;
    item.age = req.body.age;
    
    fs.writeFileSync("./src/models/profiles.json", JSON.stringify(profiles, null, 2));
    
    res.writeHeader(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(profiles, null, 2));
  } else {
    res.writeHeader(404);
    res.write("Unable to update. Profile was not found.");
    res.end();    
  }
});


app.get('/date/:year-:month-:day', function(req, res, next){
  if (req.params.year < currentYear) {
    res.send("This year is in the past");
  } else if(req.params.year > currentYear) {
    res.send("This year is in the future")
  }
});

app.listen(8080, function() {
});
