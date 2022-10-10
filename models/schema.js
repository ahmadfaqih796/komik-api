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
// membuat skema series
exports.SeriesSchema = mongoose.model("Series", {
  kode_series: String,
  judul: String,
  thumb: String,
  type: String,
  updated_on: String,
  total_chapter: Number,
  detail: String,
  creator: String,
});

exports.GenreSchema = mongoose.model("Genre", {
  kode_series: String,
  judul: String,
  genre: String
});

exports.ChapterSchema = mongoose.model("Chapter", {
  kode_series: String,
  judul: String, 
  episode: Number,
  published_date: String,
  thumb: String,
  gambar: String,
});

exports.LikeSchema = mongoose.model("Like", {
  kode_series: String,
  email: String
});
