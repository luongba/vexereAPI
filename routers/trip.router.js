const express = require("express");
const {
  createTrip,
  getAllTrip,
  updateTrip,
  deleteTrip,
} = require("../controllers/trip.controller");
const tripRouter = express.Router();

tripRouter.post("/", createTrip);
tripRouter.get("/", getAllTrip);
tripRouter.put("/:id", updateTrip);
tripRouter.delete("/:id", deleteTrip);

module.exports = {
  tripRouter,
};
