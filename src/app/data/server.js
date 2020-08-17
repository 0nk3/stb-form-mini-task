const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;

const app = require("express")(); // express server instance

app.use(bodyParser.json());
app.use(cors());

// let add a piece of code to test a get request
app.get("/", function (request, response) {
  response.send("Hello From The Server");
});
app.listen(PORT, function () {
  console.log("Server running on localhost : " + PORT);
});
