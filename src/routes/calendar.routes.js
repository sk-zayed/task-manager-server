const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/auth");
const CalendarCtrls = require("../controllers/calendar.controllers");

router.get("/getevents", authenticate, CalendarCtrls.getEvents);

module.exports = router;