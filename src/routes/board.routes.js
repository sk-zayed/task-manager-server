const express = require("express");
const router = express.Router();
const BoardCtrls = require("../controllers/board.controllers");
const {authenticate, authorize} = require("../middlewares/auth");

router.get("/getboards", authenticate, BoardCtrls.getBoards);
router.post("/createboard", authenticate, BoardCtrls.createBoard);
router.patch("/likeboard/:id", authenticate, BoardCtrls.likeBoard);
router.get("/:id", authenticate, BoardCtrls.getBoardById);
router.post("/createcard", authenticate, BoardCtrls.createCard);
router.put("/updatecard", authenticate, BoardCtrls.updateCard);
router.delete("/deleteboard/:id", authenticate, BoardCtrls.deleteBoard);
router.delete("/deletecard/:id", authenticate, BoardCtrls.deleteCard);

module.exports = router;