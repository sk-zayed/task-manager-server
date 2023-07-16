require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { connect } = require("./db/init");
const cron = require("node-cron");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(process.cwd(), "public")));

// setup CORS
app.use(
    cors({
        origin: "http://localhost:3001",
    })
);

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/boards", require("./routes/board.routes"));
app.use("/api/calendar", require("./routes/calendar.routes"));

app.use(function (req, res, next) {
    res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

// error handling middleware
app.use(require("./middlewares/errors").resourcenNotFound);
app.use(require("./middlewares/errors").errorHandler);

connect()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`server started!!`);
            cron.schedule("0 0 0 * * *", () => {
                axios.get(`${process.env.BASE_URL}/api/calendar/notify-deadline`);
            });
        });
    })
    .catch((error) => {
        process.exit(1);
    });
