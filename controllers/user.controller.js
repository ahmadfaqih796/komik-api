const express = require("express");
const router = express.Router();
const UserModel = require("../models/user.model");

router.post("/signin", (req, res) => {
  UserModel.authenticated(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.status(401).json(err));
});

router.post("/signup", async (req, res) => {
  try {
    res.status(201).json(await UserModel.save(req.body));
  } catch (err) {
    res.status(400).json({ message: "Something when wrong" });
  }
});

module.exports = router;
