const {
  isAuthenticated,
  operatorAdmin,
} = require("../middlewares/auth.middleware");
var userController = require("./user.controller");
var komikController = require("./komik.controller");
var genreController = require("./genre.controller");


module.exports = (app) => {
  app.use("/user", userController);
  app.use("/komik", komikController);
  app.use("/genre", genreController);
};
