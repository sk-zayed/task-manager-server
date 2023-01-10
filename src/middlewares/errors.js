const {Errors} = require("../constants");

const resourcenNotFound = (req, res, next) => {
    const error = new Error("API not supported");
    error.name = errors.NotFound;
    next(error);
};

const errorHandler = (err, req, res, next) => {
    const Status = {
        [Errors.BadRequest]: 400,
        [Errors.ValidationError]: 400,
        [Errors.UnAuthorized]: 401,
        [Errors.Forbidden]: 403,
        [Errors.NotFound]: 404,
        [Errors.MongoServerError]: 500,
        [Errors.InternalServerError]: 500
    }

    return res.status(Status[err.name] || 500).json({
        status: "error",
        message: err.message
    });
};

module.exports = {
    resourcenNotFound,
    errorHandler
};