const express = require("express");
const { stationRouter } = require("./station.routers");
const { userRouter } = require("./user.router");
const { tripRouter } = require("./trip.router");
const rootRouter = express.Router();
rootRouter.use("/station", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trip", tripRouter);

module.exports = {
  rootRouter,
};
