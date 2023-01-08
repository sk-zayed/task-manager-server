const mongoose = require("mongoose");
const Board = mongoose.model("Board");
const Card = mongoose.model("Card");

const createBoard = (boardDetails) => {
    return Board.create(boardDetails);
};

const getBoards = (userId) => {
    return Board.find({ owner: userId }).populate("cards");
};

const likeBoard = (boardId, liked) => {
    return Board.updateOne({ _id: boardId }, { liked: !liked });
};

const getBoardById = (boardId) => {
    return Board.findById(boardId).populate("cards");
};

const createCard = (cardDetails) => {
    return Card.create(cardDetails);
};

const findCard = (cardData) => {
    return Card.find(cardData);
};

const updateCard = (cardData) => {
    return Card.findByIdAndUpdate(cardData._id, cardData, { new: true });
};

const deleteBoard = (boardId) => {
    return Board.deleteOne({ _id: boardId });
};

const deleteCardsOfBoard = (boardId) => {
    return Card.deleteMany({ board: boardId });
};

const deleteCard = (cardId) => {
    return Card.deleteOne({ _id: cardId });
};

const deleteCardFromBoard = (cardId) => {
    return Board.updateOne(
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
