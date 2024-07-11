const express = require("express");
const router = express.Router();

const {
  userCreate,
  userLogin,
  getOneUser,
  getAllUsers,
} = require("../controllers/userController");

router.post("/register", userCreate);
router.post("/login", userLogin);
router.get("/find/:userId", getOneUser);
router.get("/", getAllUsers);

module.exports = router;
