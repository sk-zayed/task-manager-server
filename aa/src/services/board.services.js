const mongoose = require("mongoose");
const Boards = mongoose.model("Board");
const Cards = mongoose.model("Card");

const createBoard = (boardDetails) => {
    return Boards.create(boardDetails);
};

const getBoards = (userId) => {
    return Boards.find({ owner: userId }).populate("cards").populate("members");
};

const likeBoard = (boardId, liked) => {
    return Boards.updateOne({ _id: boardId }, { liked: !liked });
};

const getBoardById = (boardId) => {
    return Boards.findById(boardId).populate("cards").populate("members");
};

const createCard = (cardDetails) => {
    return Cards.create(cardDetails);
};

const getCard = (cardData) => {
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

// const alreadyInMembers = (userId) => {
//     return Boards.find({
//         $or: [
//             {
//                 owner: userId
//             },
//             {
//                 $in: {
//                     memers: userId
//                 }
//             }
//         ]
//     })
// };

const isOwner = (boardId, userId) => {
    return Boards.find({ _id: boardId, owner: userId });
};

const alreadyInMembers = (boardId, userId) => {
    return Boards.find({
        _id: boardId,
        members: userId
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
    getBoards,
    getBoardById,
    createCard,
    getCard,
    updateCard,
    deleteCard,
    deleteBoard,
    deleteCardsOfBoard,
    deleteCardFromBoard,
    isOwner,
    alreadyInMembers,
    addMember,
    removeMember,
};