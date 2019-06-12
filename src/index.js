const http = require("http");
const cpuResult = require("./cpu-calculate");
const memResult = require("./memory-calculate");

http
  .createServer(function(req, res) {
    res.write(`Memory Usage: ${memResult()} % \n`); //write a response to the client
    res.write(`CPU Usage: ${cpuResult()} %`);
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
