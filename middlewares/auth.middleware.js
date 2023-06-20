const jwt = require("jsonwebtoken");

exports.isAuthenticated = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "a client is forbidden from accessing a valid" });
    } else {
      req.user = user;
      next();
    }
  });
};

exports.operatorAdmin = (req, res, next) => {
  const ONLY_OPERATOR_ADMIN = "premium";

  if (req.user) {
    if (req.user.role === ONLY_OPERATOR_ADMIN) {
      next();
    } else {
      return res
        .status(403)
        .json({ message: "Maaf anda buka anggota member premium!" });
    }
  }
};

exports.operator = (req, res, next) => {};
