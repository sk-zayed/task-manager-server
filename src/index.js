const express = require("express");

const app = express();

app.get("/api", (req, res) => {
    res.end("Helluu!!");
});

app.listen(3000, () => {
    console.log("started!!");
});