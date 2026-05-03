// Requiremnt of the express module
const express = require("express");

// making express application instance
const app = express();

// defining port
const port = 3000;

// Adding another middleware to route /main
app.use("/main", (req, res) => {
  res.send("This is homepage");
});

// Adding middleware This function is also know as request handler
// It will give response to all upcomming request comming in the this server
app.use("/", (req, res) => {
  res.send("This is main data ");
});


// This server is gonna listen to this port, which is 3000
app.listen(port, () => {
  console.log(`This is responding on port ${port}`);
});
