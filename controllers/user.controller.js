const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

exports.UserSignin = async (req, res, next) => {
  if (req.method == "POST") {
    // manggil usermodel buat proses authentication
    UserModel.authenticated(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(401).json(err));
  }
};

exports.UserSignup = async (req, res, next) => {
  if (req.method === "POST") {
    try {
      res.status(201).json(await UserModel.save(req.body));
    } catch (err) {
      res.status(400).json({ message: "Something when wrong" });
    }
  } else {
    res.status(405).json({ message: "405 Method Not Allowed" });
  }
};
