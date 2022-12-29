const { Errors } = require("../constants");
const AuthServices = require("../services/auth.services");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        const error = new Error(
            "Request body is empty and need to have users' details!"
        );
        error.name = Errors.BadRequest;
        return next(error);
    }

    try {
        const user = await AuthServices.addUser(req.body);
        const userObj = user.toObject();

        delete userObj.password;

        res.status(201).json({
            status: "success",
            data: userObj,
        });
    } catch (error) {
        return next(error);
    }
};

const login = async (req, res, next) => {
    if(Object.keys(req.body).length === 0) {
        const error = new Error(
            "Request body is empty and need to have users' details!"
        );
        error.name = Errors.BadRequest;
        return next(error);
    }

    try {
        const user = await AuthServices.validateUser(req.body);

        if(!user) {
            const error = new Error(
                "Invalid credentials"
            );
            error.name = Errors.UnAuthorized;
            return next(error);
        }

        const claims = {
            email: user.email,
            role: user.role
        };

        jwt.sign(claims, process.env.JWT_SECRET_KEY, /*{expiresIn: "7d"},*/ (err, token) => {
            res.status(201).json({
                status: "success",
                data: {
                    email: user.email,
                    role: user.role,
                    token: token
                }
            });
        });

    } catch(error) {
        const err = new Error(
            "Something went wrong during authorization."
        );
        err.name = Errors.InternalServerError;
        return next(err);
    }
};

module.exports = {
    register,
    login
};
