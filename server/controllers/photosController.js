const photosModel = require("../models/photosModel");
const fs = require("fs");

//add photo item

const addPhotos = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const photos = new photosModel({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await photos.save();
    res.json({ success: true, message: "photo added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//all photos list
const listPhotos = async (req, res) => {
  try {
    const photos = await photosModel.find({});
    res.json({ success: true, data: photos });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//remove photos item
const removePhotos = async (req, res) => {
  try {
    const photos = await photosModel.findById(req.body.id);
    fs.unlink(`uploads/${photos.image}`, () => {});

    await photosModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "photo removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

module.exports = {
  addPhotos,
  listPhotos,
  removePhotos,
};
