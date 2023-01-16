const express = require("express");
const router = express.Router();
const BoardCtrls = require("../controllers/board.controllers");
const { authenticate, authorize } = require("../middlewares/auth");

router.get("/getmyboards", authenticate, BoardCtrls.getMyBoards);
router.get("/getteamsboards", authenticate, BoardCtrls.getTeamsBoards);
router.post("/createboard", authenticate, BoardCtrls.createBoard);
router.patch("/likeboard/:id", authenticate, BoardCtrls.likeBoard);
router.get("/:id", authenticate, BoardCtrls.getBoardById);
router.post("/createcard", authenticate, BoardCtrls.createCard);
router.patch("/updatecard", authenticate, BoardCtrls.updateCard);
router.delete("/deleteboard/:id", authenticate, BoardCtrls.deleteBoard);
router.delete("/deletecard/:id", authenticate, BoardCtrls.deleteCard);
router.post("/addmember", authenticate, BoardCtrls.addMember);
router.patch("/removemember", authenticate, BoardCtrls.removeMember);

module.exports = router;
