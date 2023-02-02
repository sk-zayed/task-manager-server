const { Errors } = require("../constants");
const AuthServices = require("../services/auth.services");
const BoardServices = require("../services/board.services");

const createBoard = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        const error = new Error(
            "Request body is empty and need to have board details!"
        );
        error.name = Errors.BadRequest;
        return next(error);
    }

    try {
        const boardData = {
            ...req.body,
            owner: res.locals.claims.user,
        };
        const board = await BoardServices.createBoard(boardData);

        res.status(201).json({
            status: "success",
            data: board,
        });
    } catch (error) {
        console.log("createBoard ctrls --> ", error);
        return next(error);
    }
};

const getMyBoards = async (req, res, next) => {
    try {
        const response = await BoardServices.getMyBoards(
            res.locals.claims.user
        );
        res.status(200).json({
            status: "success",
            data: response,
        });
    } catch (error) {
        console.log("getMyBoards ctrls --> ", error);
        return next(error);
    }
};

const getTeamsBoards = async (req, res, next) => {
    try {
        const response = await BoardServices.getTeamsBoards(
            res.locals.claims.user
        );
        res.status(200).json({
            status: "success",
            data: response,
        });
    } catch (error) {
        console.log("getTeamsBoards ctrls --> ", error);
        return next(error);
    }
};

const likeBoard = async (req, res, next) => {
    try {
        let liked = false;
        let response = {};
        const board = await BoardServices.getBoardById(req.params.id);
        for (let i in board.likedBy) {
            if (board.likedBy[i].toString() === res.locals.claims.user) {
                liked = true;
                break;
            }
        }
        if(!liked){
            response = await BoardServices.likeBoard(req.params.id, res.locals.claims.user);
        } else {
            response = await BoardServices.unLikeBoard(req.params.id, res.locals.claims.user);    
        }
        res.status(200).json({
            status: "success",
            data: response,
        });
    } catch (error) {
        console.log("likeBoard ctrls --> ", error);
        return next(error);
    }
};

const getBoardById = async (req, res, next) => {
    try {
        const response = await BoardServices.getBoardById(req.params.id);
        let isMember = false;
        const isOwner = response.owner.toString() === res.locals.claims.user;
        for (let i in response.members) {
            if (response.members[i].email === res.locals.claims.email) {
                isMember = true;
                break;
            }
        }
        if (!isOwner && !isMember) {
            const error = new Error();
            error.name = Errors.BadRequest;
            return next(error);
        }
        res.status(200).json({
            status: "success",
            data: response,
            isOwner: isOwner,
        });
    } catch (error) {
        console.log("getBoardById ctrls --> ", error);
        return next(error);
    }
};

const createCard = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        const error = new Error(
            "Request body is empty and need to have card details!"
        );
        error.name = Errors.BadRequest;
        return next(error);
    }
    try {
        const completed = req.body.tasks.filter(
            (task) => task.done === true
        ).length;
        let cardData = {
            ...req.body,
            completed: completed,
        };
        if (completed === 0) {
            cardData = {
                ...cardData,
                lane: "ToDo",
            };
        } else if (completed > 0 && completed < req.body.tasks.length) {
            cardData = {
                ...cardData,
                lane: "Doing",
            };
        } else if (completed === req.body.tasks.length) {
            cardData = {
                ...cardData,
                lane: "Done",
            };
        }
        const response = await BoardServices.createCard(cardData);

        const board = await BoardServices.getBoardById(cardData.board);
        completedCards = board.cards.filter((card) => card.progress === 100);
        await BoardServices.updateBoard(cardData.board, completedCards.length);

        res.status(201).json({
            status: "success",
            data: response,
        });
    } catch (error) {
        console.log("createCard ctrls --> ", error);
        return next(error);
    }
};

const updateCard = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        const error = new Error(
            "Request body is empty and need to have card details!"
        );
        error.name = Errors.BadRequest;
        return next(error);
    }
    try {
        const sameCard = await BoardServices.getCard(req.body);
        if (sameCard.length === 1) {
            return res.status(204).json({
                status: "success",
                data: sameCard,
            });
        }
        const completed = req.body.tasks.filter(
            (task) => task.done === true
        ).length;
        let cardData = {
            ...req.body,
            completed: completed,
        };
        if (completed === 0) {
            cardData = {
                ...cardData,
                lane: "ToDo",
            };
        }
        if (completed > 0 && completed < req.body.tasks.length) {
            cardData = {
                ...cardData,
                lane: "Doing",
            };
        }
        if (completed === req.body.tasks.length) {
            cardData = {
                ...cardData,
                lane: "Done",
            };
        }

        const updatedCard = await BoardServices.updateCard(cardData);

        const board = await BoardServices.getBoardById(updatedCard.board);
        completedCards = board.cards.filter((card) => card.progress === 100);
        await BoardServices.updateBoard(
            updatedCard.board,
            completedCards.length
        );

        res.status(200).json({
            status: "success",
            data: updatedCard,
        });
    } catch (error) {
        console.log("updateCard ctrls --> ", error);
        return next(error);
    }
};

const deleteBoard = async (req, res, next) => {
    try {
        const response = await BoardServices.deleteBoard(req.params.id);
        if (response.acknowledged) {
            await BoardServices.deleteCardsOfBoard(req.params.id);
        }
        res.status(200).json({
            status: "success",
            data: response,
        });
    } catch (error) {
        console.log("deleteBoard ctrls --> ", error);
        return next(error);
    }
};

const deleteCard = async (req, res, next) => {
    try {
        const board = await BoardServices.getBoardByCardId(req.params.id);
        completedCards = board.cards.filter((card) => card.progress === 100);
        await BoardServices.updateBoard(board._id, completedCards.length);

        await BoardServices.deleteCardFromBoard(req.params.id);

        const response = await BoardServices.deleteCard(req.params.id);

        res.status(200).json({
            status: "success",
            data: response,
        });
    } catch (error) {
        console.log("deleteCard ctrls --> ", error);
        return next(error);
    }
};

const addMember = async (req, res, next) => {
    try {
        const member = await AuthServices.getUserByEmail(req.body.memberEmail);
        if (!member) {
            const error = new Error(
                `Ask ${req.body.memberEmail} to register on TaskManager!`
            );
            error.name = Errors.NotFound;
            return next(error);
        }

        const isOwner = await BoardServices.isOwner(
            req.body.boardId,
            member._id
        );
        if (isOwner.length > 0) {
            const error = new Error("You are the owner of the board");
            error.name = Errors.BadRequest;
            return next(error);
        }

        const alreadyInMembers = await BoardServices.alreadyInMembers(
            req.body.boardId,
            member._id
        );
        if (alreadyInMembers.length > 0) {
            const error = new Error("Member is already there!");
            error.name = Errors.BadRequest;
            return next(error);
        }

        const response = await BoardServices.addMember(
            req.body.boardId,
            member
        );
        res.status(200).json({
            status: "success",
            data: response,
        });
    } catch (error) {
        console.log("addMember ctrls --> ", error);
        return next(error);
    }
};

const removeMember = async (req, res, next) => {
    try {
        const response = await BoardServices.removeMember(
            req.body.boardId,
            req.body.userId ? req.body.userId : res.locals.claims.user
        );
        res.status(200).json({
            status: "success",
            data: response,
        });
    } catch (error) {
        console.log("removeMember ctrls --> ", error);
        return next(error);
    }
};

module.exports = {
    createBoard,
    likeBoard,
    getMyBoards,
    getTeamsBoards,
    getBoardById,
    createCard,
    updateCard,
    deleteBoard,
    deleteCard,
    addMember,
    removeMember,
};
