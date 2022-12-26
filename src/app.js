require("dotenv").config();
const express = require("express");
const path = require("path");
const {connect} = require("./db/init");

const app = express();

app.use(express.static(path.join(process.cwd(), "public")));

app.use("/api", (req, res) => {
    res.end("Helluu!!");
});

app.use(function(req, res, next) {
    res.sendFile(path.jon(process.cwd(), "public", "index.html"));
});

connect()
    .then(() => {
            app.listen(process.env.PORT, () => {
            console.log(`started on ${process.env.PORT}!!`);
        });
    })
    .catch(error => {
        process.exit(1)
    });