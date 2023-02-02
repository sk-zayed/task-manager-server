const mongoose = require("mongoose");
const Board = mongoose.model("Board");

const getEvents = (userId) => {
    return Board.find({
        $or: [{ owner: userId }, { members: userId }],
    }).populate("cards");
};

module.exports = {
    getEvents,
};
