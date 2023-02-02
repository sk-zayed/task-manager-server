const mongoose = require("mongoose");
const Boards = mongoose.model("Board");
const Cards = mongoose.model("Card");

const createBoard = (boardDetails) => {
    return Boards.create(boardDetails);
};

const getMyBoards = (userId) => {
    return Boards.find({ owner: userId }).populate("cards").populate("members");
};

const getTeamsBoards = (userId) => {
    return Boards.find({ members: userId }).populate("owner");
};

const likeBoard = (boardId, userId) => {
    return Boards.updateOne({ _id: boardId }, { $addToSet: {likedBy: userId} });
};

const unLikeBoard = (boardId, userId) => {
    return Boards.updateOne({ _id: boardId }, { $pull: {likedBy: userId} });
};

const getBoardById = (boardId) => {
    return Boards.findById(boardId)
        .populate("cards")
        .populate("members");
};

const createCard = (cardDetails) => {
    return Cards.create(cardDetails);
};

const getCard = (cardData) => {
    return Cards.find(cardData);
};

const updateCard = (cardData) => {
    return Cards.findByIdAndUpdate(cardData._id, cardData);
};

const getBoardByCardId = (cardId) => {
    return Boards.findOne({ cards: { $in: cardId } });
};

const updateBoard = (boardId, num) => {
    return Boards.findByIdAndUpdate(boardId, { completed: num });
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

const isOwner = (boardId, userId) => {
    return Boards.find({ _id: boardId, owner: userId });
};

const alreadyInMembers = (boardId, userId) => {
    return Boards.find({
        _id: boardId,
        members: userId,
    });
};

const addMember = (boardId, member) => {
    return Boards.findByIdAndUpdate(boardId, { $push: { members: member } });
};

const removeMember = (boardId, userId) => {
    return Boards.findByIdAndUpdate(boardId, { $pull: { members: userId } });
};

module.exports = {
    createBoard,
    likeBoard,
    unLikeBoard,
    getMyBoards,
    getTeamsBoards,
    getBoardById,
    createCard,
    getCard,
    updateCard,
    getBoardByCardId,
    updateBoard,
    deleteCard,
    deleteBoard,
    deleteCardsOfBoard,
    deleteCardFromBoard,
    isOwner,
    alreadyInMembers,
    addMember,
    removeMember,
};
