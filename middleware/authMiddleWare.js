const { userAuth, adminAuth } = require("../userInfo/user");

const userAuthentication = (req, res, next) => {
  if (!userAuth) return res.status(404).send("user not found");

  userAuth?.isUserLoggedin
    ? (console.log("user is logged in"), next())
    : res.status(401).send("user is not authrixed");
};

const adminAuthentication = (req, res, next) => {
  if (!adminAuth) return res.status(404).send("user not found");

  adminAuth?.isUserLoggedin
    ? (console.log("admin is logged in"), next())
    : res.status(401).send("admin is not authrixed");
};

module.exports = {
  userAuthentication,
  adminAuthentication
};
