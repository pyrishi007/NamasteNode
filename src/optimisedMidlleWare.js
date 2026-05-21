const express = require("express");
const {
  userAuthentication,
  adminAuthentication,
} = require("../middleware/authMiddleWare");

const app = express();
const port = 8888;

// One of the optimised form to write middle ware
const controller = (req, res, next) => {
  res.send("Sucessfully authenticaed");
};

//User route
app.get("/user", userAuthentication, controller);

//Admin route
app.get("/admin", adminAuthentication, controller);


app.listen(port, () => {
  console.log(`server is up and running in port ${port}......`);
});
1;
