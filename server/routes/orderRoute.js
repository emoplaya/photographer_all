const express = require("express");
const authMiddleware = require("../middleware/auth");
const {
  placeOrder,
  verifyOrder,
  userOrders,
  listOrders,
  updateStatus,
  removeOrders,
} = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);
orderRouter.post("/remove", removeOrders);

module.exports = { orderRouter };
