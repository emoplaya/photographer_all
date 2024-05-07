const express = require("express");
const {
  addPhotos,
  listPhotos,
  removePhotos,
} = require("../controllers/photosController");
const multer = require("multer");

const photosRouter = express.Router();

//Image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

photosRouter.post("/add", upload.single("image"), addPhotos);
photosRouter.get("/list", listPhotos);
photosRouter.post("/remove", removePhotos);

module.exports = {
  photosRouter,
};
