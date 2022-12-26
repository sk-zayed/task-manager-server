require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/api", (req, res) => {
    console.log("Called!");
    res.end("Helluu!!");
});

app.use(function(req, res, next) {
    res.sendFile(path.jon(process.cwd(), "public", "index.html"));
})

app.listen(process.env.POST, () => {
    console.log(`started on ${process.env.PORT}!!`);
});