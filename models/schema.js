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
  membershipType: {
    type: String,
    enum: ["free", "premium"],
    require: true,
    default: "free",
  },
});
// membuat skema series
exports.SeriesSchema = mongoose.model("Series", {
  seriesKode: String,
  judul: String,
  thumb: String,
  genres: [{
    genre: String
    }],
  type: String,
  updatedOn: { 
    type : Date, 
    default: Date.now 
  },
  detail: String,
  creator: String,
  membershipType: {
    type: String,
    enum: ["free", "premium"],
    require: true,
    default: "free",
  },
});

exports.GenreSchema = mongoose.model("Genre", {
  judul: String
});

exports.ChapterSchema = mongoose.model("Chapter", {
  seriesKode: String,
  judul: String, 
  episode: Number,
  publishedDate: { 
    type : Date, 
    default: Date.now 
  },
  thumb: String,
  gambar: String,
});

exports.LikeSchema = mongoose.model("Like", {
  seriesKode: String,
  email: String
});
