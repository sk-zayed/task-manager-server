const express = require("express");
const router = express.Router();
const IndexCtrls = require("../controllers/index.controllers");

router.get("/", IndexCtrls.getHome);

module.exports = router;