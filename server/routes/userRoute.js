const express = require("express");
const {
  loginUser,
  registerUser,
  listUsers,
  removeUser,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/listuser", listUsers);
userRouter.post("/removeuser", removeUser);

module.exports = {
  userRouter,
};
