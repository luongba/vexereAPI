const express = require("express");
const { authenticate } = require("../middlewares/auth/authenticate");
const {
  register,
  login,
  uploadAvatar,
} = require("../controllers/user.controller");
const { uploadImage } = require("../middlewares/upload/uploadImage");
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/profile", authenticate, uploadImage(), uploadAvatar);

module.exports = {
  userRouter,
};
