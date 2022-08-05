const express = require("express");
const { register, login } = require("../controllers/user.controller");
const userRouter = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/avatars/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/profile", upload.single("avatar"), (req, res) => {
  res.send("uploads");
});

module.exports = {
  userRouter,
};
