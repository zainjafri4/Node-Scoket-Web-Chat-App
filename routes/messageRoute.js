const express = require("express");
const router = express.Router();

const {
  messageCreate,
  messagesGetAll,
} = require("../controllers/messageController");

router.post("/", messageCreate);
router.get("/:chatId", messagesGetAll);

module.exports = router;
