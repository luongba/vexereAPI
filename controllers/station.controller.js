const { Op } = require("sequelize");
const { Station } = require("../models");

const createStation = async (req, res) => {
  try {
    const { name, address, province } = req.body;
    const newStation = await Station.create({ name, address, province });
    res.status(200).send({
      message: `Thêm bến xe thành công !`,
      data: newStation,
      status: true,
      errorCode: 0,
    });
  } catch (error) {
    res.status(500).send({
      message: `Thêm bến xe thất bại !`,
      data: {},
      status: false,
      errorCode: 500,
    });
  }
};

const getAllStation = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const StationList = await Station.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.status(200).send({
        message: `Tìm danh sách bến xe thành công !`,
        data: StationList,
        status: true,
        errorCode: 0,
      });
    }else {
        const StationList = await Station.findAll();
          res.status(200).send({
            message: `Tìm danh sách bến xe thành công !`,
            data: StationList,
            status: true,
            errorCode: 0,
          });
    }
  } catch (error) {
    res.status(500).send({
      message: `Tìm danh sách bến xe thất bại !`,
      data: [],
      status: false,
      errorCode: 500,
    });
  }
};

const getStationById = async (req, res) => {
  const { id } = req.params;
  try {
    const station = await Station.findOne({
      where: {
        id,
      },
    });
    res.status(200).send({
      message: `Tìm bến xe số ${id} thành công !`,
      data: station,
      status: true,
      errorCode: 0,
    });
  } catch (error) {
    res.status(500).send({
      message: `Tìm bến xe số ${id} thất bại !`,
      data: station,
      status: false,
      errorCode: 500,
    });
  }
};

const updateStation = async (req, res) => {
  const { id } = req.params;
  const { name, address, province } = req.body;
  try {
    const station = await Station.findOne({
      where: {
        id,
      },
    });
    station.name = name;
    station.address = address;
    station.province = province;
    await station.save();
    res.status(200).send({
      message: `Cập nhật bến xe số ${id} thành công !`,
      data: station,
      status: true,
      errorCode: 0,
    });
  } catch (error) {
    res.status(500).send({
      message: `Cập nhật bến xe số ${id} thất bại !`,
      data: station,
      status: false,
      errorCode: 500,
    });
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;
  try {
    const station = await Station.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      message: `Xóa bến xe số ${id} thành công !`,
      data: {},
      status: true,
      errorCode: 0,
    });
  } catch (error) {
    res.status(500).send(`Xóa bến xe số ${id} thất bại !`);

    res.status(500).send({
      message: `Xóa bến xe số ${id} thất bại !`,
      data: {},
      status: false,
      errorCode: 500,
    });
  }
};

module.exports = {
  createStation,
  getAllStation,
  getStationById,
  updateStation,
  deleteStation,
};
