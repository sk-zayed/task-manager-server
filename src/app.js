require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const {connect} = require("./db/init");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(process.cwd(), "public")));

// setup CORS
app.use( cors({
    origin: 'http://localhost:3001',
}));

app.use("/api", require("./routes/index.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/boards", require("./routes/board.routes"));
app.use("/api/calendar", require("./routes/calendar.routes"));

app.use(function(req, res, next) {
    res.sendFile(path.join(process.cwd(), "public", "index.html"));
});


// error handling middleware
app.use(require("./middlewares/errors").resourcenNotFound);
app.use(require("./middlewares/errors").errorHandler);
    // const {Errors} = require("../constants");
    // const error = new Error(`__error message here__`);
    // error.name = Errors.__errorName__;
    // next(error);
    // catch(error){next(error);}
    // return;

connect()
    .then(() => {
            app.listen(process.env.PORT, () => {
            console.log(`started on ${process.env.PORT}!!`);
        });
    })
    .catch(error => {
        process.exit(1)
    });

// require("./models/test");