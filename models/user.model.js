var schema = require("./schema");
var jwt = require("jsonwebtoken");
var crypto = require("crypto");

exports.authenticated = ({ username, password }) => {
  // kita harus memeriksa apakah username ada di dalam database
  return new Promise((resolve, reject) => {
    schema.UserSchema.findOne({ username }, (err, result) => {
      if (err) {
        reject(err);
      }

      if (result) {
        // jika usernamenya ada maka kita akan membandingkan password dari user
        // dengan password yang ada di database
        let passwordFromDB = result.password;
        let passwordFromUser = crypto
          .pbkdf2Sync(password, result.salt, 1000, 64, "sha512")
          .toString("hex");

        if (passwordFromDB === passwordFromUser) {
          // jika hasilnya sama, kita akan membuild token dari
          // jwt yang di dalamnya berisi user data
          let data = {
            id: result._id,
            username: result.username,
            email: result.email,
            membership_type: result.membership_type,
          };
          console.log(process.env.SECRET_KEY);
          let token = jwt.sign(data, process.env.SECRET_KEY, {
            expiresIn: "9800s",
          });
          resolve({ token });
        } else {
          reject({ message: "password salah!" });
        }
      } else {
        reject({ message: "username salah!" });
      }
    });
  });
};

exports.save = (data) => {
  // salt
  data.salt = crypto.randomBytes(16).toString("hex");
  // Hashing user's salt and password with 1000 iterations,
  data.password = crypto
    .pbkdf2Sync(data.password, data.salt, 1000, 64, `sha512`)
    .toString(`hex`);

  return new Promise((resolve, reject) => {
    new schema.UserSchema(data).save((err, response) => {
      if (err) {
        reject(err);
      } else {
        let { password, salt, ...result } = data;
        resolve(result);
      }
    });
  });
};
