const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;

const app = require("express")(); // express server instance

app.use(bodyParser.json());
app.use(cors());

// let add a piece of code to test a get request
app.get("/", function (request, response) {
  response.send("Express Server Started . . .");
});
// where will out data be sent to
app.post("/capture", function (request, response) {
  console.log(request.body);
  response.status(200).send({ message: "Data Received! " });
});
app.listen(PORT, function () {
  console.log("Server running on localhost:" + PORT);
});
