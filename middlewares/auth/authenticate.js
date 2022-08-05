const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "luong-ba-18-11");
    if(decode) {
      req.user = decode;
      next()
    }else {
      res.status(401).send({
        message: `Token không chính xác !`,
        status: false,
        errorCode: 401,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Yêu cầu cung cấp chính xác token !`,
      status: false,
      errorCode: 500,
    });
  }
};

module.exports = {
    authenticate
}
