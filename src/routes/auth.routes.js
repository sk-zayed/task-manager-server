const express = require("express");
const router = express.Router();
const AuthCtrls = require("../controllers/auth.controllers");

router.post("/register", AuthCtrls.register);
router.post("/login", AuthCtrls.login);

module.exports = router;