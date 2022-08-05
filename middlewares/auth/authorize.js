const authorize = (role) => {
  return (req, res, next) => {
    const { user } = req;
    let check = role.findIndex((el) => el == user.type);
    if (check > -1) {
        next()
    } else {
      res.status(403).send({
        message: `Bạn đã đăng nhập, nhưng không có quyền thực hiện chức năng này !`,
        status: true,
        errorCode: 403,
      });
    }
  };
};

module.exports = {
    authorize
}
