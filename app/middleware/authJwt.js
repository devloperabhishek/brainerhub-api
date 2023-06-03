const jwt = require("jsonwebtoken");

verifyToken = (req, res, next) => {
  const authorizationHeaader = req.headers.authorization;
  if (!authorizationHeaader || (authorizationHeaader.split(' ')).length != 2) {
    return res.status(500).send("tokensMissing");
  }
  let token = authorizationHeaader.split(' ')[1];
  const secret = "lexx-secret-key"
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send('something went wrong');
    }
    req.token = token;
    req.userId = decoded.id;
    next();
  });
};



const authJwt = {
  verifyToken
};

module.exports = authJwt;