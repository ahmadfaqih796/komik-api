const {
  isAuthenticated,
  operatorAdmin,
} = require("../middlewares/auth.middleware");
var userController = require("./user.controller");


module.exports = (app) => {
  app.use("/user/signup", userController.UserSignup);
  app.use("/user/signin", userController.UserSignin);
};
