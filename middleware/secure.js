const { userAuth, adminAuth } = require("../userInfo/user");

// Security middleware
const userSecure = (req, res, next) => {
  if (!userAuth) return res.status(401).send("user not found");

  userAuth?.isUserSecure
    ? (console.log("File is secure"), next())
    : res.status(401).send("User is not in secure connection");
};

const adminSecure = (req, res, next) => {
  if (!adminAuth) return res.status(401).send("Admin not found");

  adminAuth?.isUserSecure
    ? (console.log("File is secure"), next())
    : res.status(401).send("Admin is not in secure connection");
};

module.exports = {
  userSecure,
  adminSecure,
};
