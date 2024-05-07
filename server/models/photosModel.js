const mongoose = require("mongoose");

const photosSchema = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: false },
});

const photosModel =
  mongoose.models.photos || mongoose.model("photos", photosSchema);

module.exports = photosModel;
