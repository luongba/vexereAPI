const { Trip } = require("../models");

const createTrip = async (req, req) => {
  const { fromStation, toStation, startTime, price } = req.body;
  const newTrip = await Trip.create({
    fromStation,
    toStation,
    startTime,
    price,
  });
  res.status(200).send({
    message: `Tạo chuyến đi thành công !`,
    data: newTrip,
    status: true,
    errorCode: 200,
  });
};

module.exports = {
    createTrip
}
