const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDb } = require("./config/db");
const { photosRouter } = require("./routes/photosRoute");
const { userRouter } = require("./routes/userRoute");
const { cartRouter } = require("./routes/cartRoute");
const dotenv = require("dotenv");

//app config
const app = express();
const PORT = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//middleware
app.use(express.json());
app.use(cors());
dotenv.config();

// parse application/json
app.use(bodyParser.json());

//api endpoints
app.use("/api/photos", photosRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("api working");
});

//db connection
let db;
connectToDb();

//api endpoints
app.use("/api/photos", photosRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
