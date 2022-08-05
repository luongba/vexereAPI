const multer = require("multer");
const uploadImage = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/images/avatars/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-";
      cb(null, uniqueSuffix + "_" + file.originalname);
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      const ext = [".png", ".jpg"];
      const extOriginalName = file.originalname.slice(-4);
      let check = ext.includes(extOriginalName);
      if (check) {
        cb(null, true);
      } else {
        cb(new Error("Ext not valid"));
      }
    },
    size: 1024,
  });
  
  return upload.single("avatar");
};

module.exports = {
  uploadImage,
};
