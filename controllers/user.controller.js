const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const register = async (req, res) => {
  const { name, email, password, numberPhone } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const avatar = gravatar.url(email);
    const user = await User.create({
      name,
      email,
      password: hash,
      numberPhone,
      avatar,
    });
    res.status(200).send({
      message: `Đăng ký thành công !`,
      data: user,
      status: true,
      errorCode: 200,
    });
  } catch (error) {
    res.status(500).send({
      message: `Đăng ký thất bại !`,
      status: false,
      errorCode: 500,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      const isAuth = bcrypt.compareSync(password, user.password);
      if (isAuth) {
        const token = jwt.sign(
          { email: user.email, type: user.type }, //tao ma hoa
          "luong-ba-18-11", //tao key
          { expiresIn: 60 * 60 } // thoi gian het han token
        );
        res.status(200).send({
          message: `Đăng nhập thành công !`,
          data: { user, token },
          status: true,
          errorCode: 200,
        });
      } else {
        res.status(401).send({
          message: `Email hoặc mật khẩu không chính xác !`,
          status: false,
          errorCode: 401,
        });
      }
    } else {
      res.status(401).send({
        message: `Email hoặc mật khẩu không chính xác !`,
        status: false,
        errorCode: 401,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Đăng nhập thất bại !`,
      status: false,
      errorCode: 500,
    });
  }
};

const uploadAvatar = async (req, res) => {
  const { file } = req;
  const { avatar, email } = req.user;
  try {
    const userFound = await User.findOne({
      where: {
        email,
      },
    });
    if (userFound) {
      userFound.avatar = file.path;
      await userFound.save();
      res.status(200).send({
        message: `Thêm avatar thành công !`,
        data: userFound,
        status: true,
        errorCode: 200,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Thêm avatar thất bại !`,
      status: false,
      errorCode: 500,
    });
  }
};

module.exports = {
  register,
  login,
  uploadAvatar,
};
