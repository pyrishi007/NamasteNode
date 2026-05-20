const { userAuth_1, userAuth_2 } = require("./../userInfo/user");
const express = require("express");

const app = express();

const port = 9090;

// first way writing middleware
// this is authentication
// first middleware is passed
// app.get("/user", (req, res, next) => {
//   if (!userAuth_1) return res.send("user not found");
//   userAuth_1?.isUserLoggedin
//     ? (console.log(" use is logged in"), next())
//     : res.status(404).send("user not foud");
// });

// // this is security check
// app.get("/user", (req, res, next) => {
//   userAuth_1?.isUserSecure
//     ? (console.log("Security check completed"), next())
//     : res.status(401).send("user is not authrized");
// });

// app.get("/user", (req, res, next) => {
//   res.send("User is secured to make DB connection now");
// });

// second method of witting all this
// now this is good but no reusability readibility and cant be maintain
// app.get(
//   "/user",
//   (req, res, next) => {
//     if (!userAuth_1) return res.send("user not found");
//     userAuth_1?.isUserLoggedin
//       ? (console.log(" use is logged in"), next())
//       : res.status(404).send("user not foud");
//   },
//   (req, res, next) => {
//     userAuth_1?.isUserSecure
//       ? (console.log("Security check completed"), next())
//       : res.status(401).send("user is not authrized");
//   },
//   (req, res, next) => {
//     res.send("User is secured to make DB connection now");
//   },
// );

// case 3
// wrappin inside an array
// sane output 
// regardless of array we can bascally user for this good maintanability
app.get("/user", [
  (req, res, next) => {
    if (!userAuth_1) return res.send("user not found");
    userAuth_1?.isUserLoggedin
      ? (console.log(" use is logged in"), next())
      : res.status(404).send("user not foud");
  },
  (req, res, next) => {
    userAuth_1?.isUserSecure
      ? (console.log("Security check completed"), next())
      : res.status(401).send("user is not authrized");
  },
  (req, res, next) => {
    res.send("User is secured to make DB connection now");
  },
]);



// but there is loggical bug and error in this code which is basically that middleware which are defined over here are not reuseable, and this is important because the resone we can just put middleware for each and every user who logges in

app.listen(port, () => {
  console.log("server is up and running om port 9090");
});
