const express = require("express");
const { checkExist } = require("../middlewares/validations/checkExist");
const { Station } = require("../models");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");
const {
  createStation,
  getAllStation,
  getStationById,
  updateStation,
  deleteStation,
} = require("../controllers/station.controller");
const stationRouter = express.Router();

stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getStationById);
stationRouter.post("/create", authenticate, authorize(["ADMIN"]), createStation);
stationRouter.put("/:id", checkExist(Station), updateStation);
stationRouter.delete("/:id", checkExist(Station), authenticate, deleteStation);

module.exports = {
  stationRouter,
};
