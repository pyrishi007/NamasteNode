const express = require("express");

// creating an express app
const app = express();

//Defining route
const port = 7777;

//making an initial route for test
// app.use("/main", (req, res) => {
//   res.send("This is for test route");
// });

//Defining get route
app.get("/main", (req, res) => {
  res.send("This is from get method");
});

//Defining patch routes
app.patch("/main", (req, res) => {
  res.send("This is from patch method");
});

//Defining put routes
app.put("/main", (req, res) => {
  res.send("This is from put method");
});

//Defining Delete routes
app.delete("/main", (req, res) => {
  res.send("This is from Delete method");
});

//Defining in post route
app.post("/main", (req, res) => {
  res.send("This is from post method");
});

// If no routes are match then
app.use("/", (req, res) => {
  res.status(404).send("page not found");
});

app.listen(port, () => {
  console.log("Server is up and running....");
});
