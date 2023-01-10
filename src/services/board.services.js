const mongoose = require("mongoose");
const Boards = mongoose.model("Board");
const Cards = mongoose.model("Card");

const createBoard = (boardDetails) => {
    return Boards.create(boardDetails);
};

const getBoards = (userId) => {
    return Boards.find({ owner: userId }).populate("cards");
};

const likeBoard = (boardId, liked) => {
    return Boards.updateOne({ _id: boardId }, { liked: !liked });
};

const getBoardById = (boardId) => {
    return Boards.findById(boardId).populate("cards");
};

const createCard = (cardDetails) => {
    return Cards.create(cardDetails);
};

const findCard = (cardData) => {
    return Cards.find(cardData);
};

const updateCard = (cardData) => {
    return Cards.findByIdAndUpdate(cardData._id, cardData, { new: true });
};

const deleteBoard = (boardId) => {
    return Boards.deleteOne({ _id: boardId });
};

const deleteCardsOfBoard = (boardId) => {
    return Cards.deleteMany({ board: boardId });
};

const deleteCard = (cardId) => {
    return Cards.deleteOne({ _id: cardId });
};

const deleteCardFromBoard = (cardId) => {
    return Boards.updateOne(
        { cards: { $in: cardId } },
        { $pull: { cards: cardId } }
    );
};

module.exports = {
    createBoard,
    likeBoard,
    getBoards,
    getBoardById,
    createCard,
    findCard,
    updateCard,
    deleteCard,
    deleteBoard,
    deleteCardsOfBoard,
    deleteCardFromBoard,
};
