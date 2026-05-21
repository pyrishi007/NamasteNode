// firstuser
const userAuth = {
  isUserLoggedin: true,
  isUserSecure: true,
  isUserActive: true,
};

// Seconduser
const adminAuth = {
  isUserLoggedin: true,
  isUserSecure: false,
  isUserActive: true,
};

module.exports = {
  userAuth,
  adminAuth,
};
