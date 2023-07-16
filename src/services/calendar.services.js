const mongoose = require("mongoose");
const Board = mongoose.model("Board");
const Card = mongoose.model("Card");

const getEvents = (userId) => {
    return Board.find({
        $or: [{ owner: userId }, { members: userId }],
    }).populate("cards");
};

const getCards = () => {
    const today = new Date();
    const tomorrow = new Date().setDate(today.getDate() + 1);
    const date = new Date(tomorrow).toISOString().split("T");
    return Card.find({ dueDate: new Date(date[0]).toISOString() }).populate({
        path: "board",
        model: "Board",
        populate: [
            { path: "owner", model: "User" },
            { path: "members", model: "User" },
        ]
    });
};

const getBoards = () => {
    const today = new Date();
    const tomorrow = new Date().setDate(today.getDate() + 1);
    const date = new Date(tomorrow).toISOString().split("T");
    return Board.find({ dueDate: new Date(date[0]).toISOString() }).populate("owner").populate("members");
};

module.exports = {
    getEvents,
    getCards,
    getBoards,
};
