const express = require("express");
const router = express.Router();
const {
  chatCreate,
  chatGetAll,
  findOneChat,
} = require("../controllers/chatController");

router.post("/", chatCreate);
router.get("/:userId", chatGetAll);
router.get("/find/:firstId/:secondId", findOneChat);

module.exports = router;
