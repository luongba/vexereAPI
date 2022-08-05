const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const isCheck = await Model.findOne({
      where: {
        id,
      },
    });
    if (isCheck) {
      next();
    } else {
      res.status(404).send({
        message: `Không tìm thấy bến có ID = ${id} !`,
        status: false,
        errorCode: 404,
      });
    }
  };
};

module.exports = {
    checkExist
}
