const jwt = require("jsonwebtoken");
const Errors = require("../constants");

const authenticate = (req, res, next) => {
    const token = req.header("Authorization");
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, claims) => {
        if (err) {
            err.name = Errors.UnAuthorized;
            return next(err);
        }
        // setting up claims so that it can be accessed in next function
        // to access claims will use res.locals.claims
        res.locals.claims = claims;
        next();
    });
};

const authorize = (...roles) => {
    return (req, res, next) => {
        const {role} = res.locals.claims;
        if(!roles.includes(role)) {
            const error = new Error(
                "You don't have sufficient privileges"
            );
            error.name = Errors.Forbidden;
            return next(error);
        }

        next();
    };
};

module.exports = {
    authenticate,
    authorize
};