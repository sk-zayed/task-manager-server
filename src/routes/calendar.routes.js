const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/auth");
const CalendarCtrls = require("../controllers/calendar.controllers");

router.get("/getevents", authenticate, CalendarCtrls.getEvents);
router.get("/notify-deadline", CalendarCtrls.notifyDeadline);

module.exports = router;
