const express = require("express");
const path = require("path");
const app = express();
const { rootRouter } = require("./routers");
const port = 3000;
const { sequelize, Sequelize } = require("./models");
//Cai ung dung su dung json
app.use(express.json());

//Cai dat static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));

//dung router
app.use("/api/v1", rootRouter);

//Lang nghe su kien ket noi
app.listen(port, async () => {
  console.log("App Listening on Localhost:3000");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
