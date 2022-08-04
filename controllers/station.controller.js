const { Station } = require("../models");

const createStation = async (req, res) => {
  try {
    const { name, address, province } = req.body;
    const newStation = await Station.create({ name, address, province });
    res.status(201).send(newStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createStation,
};
