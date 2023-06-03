const db = require("../../models");
const UserModel = db.User;
var jwt = require("jsonwebtoken");

exports.signin = async (req, res) => {

  const userData = await UserModel.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
    .then(async (data) => {

      const login_expire_days = 365
      const secret = "lexx-secret-key"

      var token = jwt.sign({ id: data.id }, secret, {
        expiresIn: 86400 * login_expire_days
      });

      let pureUser = JSON.parse(JSON.stringify(data))
      delete pureUser['password']

      res.send({
        user: pureUser,
        access_token: token
      });
    })
    .catch(error => {
      return res.status(500).send(`something went wrong: ${error}`);
    });

}

