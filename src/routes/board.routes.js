const express = require("express");
const router = express.Router();
const BoardCtrls = require("../controllers/board.controllers");
const {authenticate, authorize} = require("../middlewares/auth");

router.get("/:id", authenticate, authorize("admin"), BoardCtrls.getBoardsById);

module.exports = router;