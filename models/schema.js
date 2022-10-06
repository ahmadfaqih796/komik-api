var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/komik");

exports.UserSchema = mongoose.model("User", {
  username: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
  password: String,
  email: String,
  salt: String,
  membership_type: {
    type: String,
    enum: ["free", "premium"],
    require: true,
    default: "free",
  },
});
