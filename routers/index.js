const express = require("express");
const {stationRouter} = require("./station.routers")
const rootRouter = express.Router();
rootRouter.use("/station", stationRouter)

module.exports = {
    rootRouter
}