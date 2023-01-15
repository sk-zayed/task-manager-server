const Errors = require("../constants");
// const IndexServices = require("../services/index.services");

const getHome = (req, res, next) => {
    res.status(200).json({
        status: "success",
        data: res.locals.claims
    });
};

module.exports = {
    getHome
};