const { Errors } = require("../constants");
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

const getBoards = async (req, res, next) => {
    try {
        const response = [];
        const userBoards = await BoardServices.getBoards(
            res.locals.claims.user
        );
        userBoards.forEach((board) => {
            const completedCards = board.cards.filter(
                (card) => card.completed === card.tasks.length
            ).length;
            response.push({
                ...board,
                completed: completedCards,
                total: board.cards.length,
                progress: (completedCards / board.cards.length) * 100,
            });
        });
        res.status(200).json({
            status: "success",
            data: response,
        });
    } catch (error) {
        console.log("getBoards ctrls --> ", error);
        return next(error);
    }
};

const likeBoard = async (req, res, next) => {
    try {
        const liked = await BoardServices.getBoardById(req.params.id);
        const response = await BoardServices.likeBoard(
            req.params.id,
            liked.liked
        );
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
        let response = {};
        const board = await BoardServices.getBoardById(req.params.id);
        const completedCards = board.cards.filter(
            (card) => card.completed === card.tasks.length
        ).length;
        response = {
            ...board,
            completed: completedCards,
            total: board.cards.length,
            progress: (completedCards / board.cards.length) * 100,
        };
        res.status(200).json({
            status: "success",
            data: response,
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
        const cardData = {
            ...req.body,
            completed: completed,
        };
        const response = await BoardServices.createCard(cardData);
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
        const sameCard = await BoardServices.findCard(req.body);
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
        if (completed === req.body.tasks.length) {
            cardData = {
                ...cardData,
                lane: "Done",
            };
        }
        const updatedCard = await BoardServices.updateCard(cardData);
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
        const response = await BoardServices.deleteCard(req.params.id);
        if (response.acknowledged) {
            await BoardServices.deleteCardFromBoard(req.params.id);
        }
        res.status(200).json({
            status: "success",
            data: response,
        });
    } catch (error) {
        console.log("deleteCard ctrls --> ", error);
        return next(error);
    }
};

module.exports = {
    createBoard,
    likeBoard,
    getBoards,
    getBoardById,
    createCard,
    updateCard,
    deleteBoard,
    deleteCard,
};
