const { Trip, Station } = require("../models");

const createTrip = async (req, res) => {
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

const getAllTrip = async (req, res) => {
  try {
    const TripList = await Trip.findAll({
      include: [
        {
          model: Station,
          as: "from",
        },
        {
          model: Station,
          as: "to",
        },
      ],
    });
    res.status(200).send({
      message: `Lấy chuyến đi thành công !`,
      data: TripList,
      status: true,
      errorCode: 200,
    });
  } catch (error) {
    res.status(500).send({
      message: `Lấy chuyến đi thất bại !`,
      status: false,
      errorCode: 500,
    });
  }
};

const updateTrip = async (req, res) => {
  const { id } = req.params;
  const { startTime, price, fromStation, toStation } = req.body;
  try {
    const trip = await Trip.findOne({
      where: {
        id,
      },
    });
    trip.startTime = startTime;
    trip.price = price;
    trip.fromStation = fromStation;
    trip.toStation = toStation;
    trip.save();
    res.status(200).send({
      message: `cập nhật chuyến đi thành công !`,
      data: trip,
      status: true,
      errorCode: 200,
    });
  } catch (error) {
    res.status(500).send({
      message: `cập nhật chuyến đi thất bại !`,
      status: false,
      errorCode: 500,
    });
  }
};

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  try {
    const trip = await Trip.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      message: `Xóa chuyến đi thành công !`,
      status: true,
      errorCode: 200,
    });
  } catch (error) {
    res.status(500).send({
      message: `Xóa chuyến đi thất bại !`,
      status: false,
      errorCode: 500,
    });
  }
};

module.exports = {
  createTrip,
  getAllTrip,
  updateTrip,
  deleteTrip,
};
