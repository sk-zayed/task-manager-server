const mongoose = require("mongoose");
const Board = mongoose.model("Board");

const getEvents = (userId) => {
    return Board.find({owner: userId}).populate("cards");
};

module.exports = {
    getEvents
};