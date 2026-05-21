const { userSecure, adminSecure } = require("../middleware/secure");

const {
  userAuthentication,
  adminAuthentication,
} = require("../middleware/authMiddleWare");

const express = require("express");

const app = express();

//USER
app.use("/user", [userSecure, userAuthentication]);

//ADMIN
app.use("/admin", [adminSecure, adminAuthentication]);

app.post("/user/sentData", (req, res, next) => {
  res.send("firstname : rohit, lastname : gorain");
});

app.get("/user/getData", (req, res, next) => {
  res.send("Here is all ur data");
});

const PORT = 3614;

app.listen(PORT, () => {
  console.log("Server is up and running on port 3614...");
});
