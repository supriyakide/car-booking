const bcrypt = require("bcryptjs");
const UserModel = require("../models/user.model");
class AuthCtrl {
  static useLogin(req, res) {
    const { email, password } = req.body;
    UserModel.findOne({ status: 1, email: email })
      .then((result) => {
        if (!result) {
          res.status(404).send({
            error: null,
            message: "Invalid email or user is disabled",
          });
        } else {
          try {
            if (bcrypt.compareSync(password, result.password)) {
              // authentication is successful
              res
                .status(200)
                .send({ data: result, message: "Login successful" });
            } else {
              res
                .status(404)
                .send({ error: null, message: "Invalid password" });
            }
          } catch (e) {
            res
              .status(500)
              .send({ error: e, message: "Could not logged in, try again" });
          }
        }
      })
      .catch((e) => {
        res
          .status(500)
          .send({ error: e, message: "Could not logged in, try again" });
      });
  }
}

module.exports = AuthCtrl;
