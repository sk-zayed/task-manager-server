const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");

const addUser = (newUserDetails) => {
    return User.create(newUserDetails);
};

const validateUser = async (userDetails) => {
    const user = await User.findOne({
        email: userDetails.email
    });

    if (!user) return null;

    const isValid = await bcrypt.compare(userDetails.password, user.password);
    if(!isValid) return null;

    return user;
};

const getUserByEmail = (email) => {
    return User.findOne({email: email});
};

module.exports = {
    addUser,
    validateUser,
    getUserByEmail
};
