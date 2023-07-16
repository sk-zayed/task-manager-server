const CalendarServices = require("../services/calendar.services");
const sendMail = require("../utils/sendmail");

const getEvents = async (req, res, next) => {
    try {
        const events = [];
        const response = await CalendarServices.getEvents(
            res.locals.claims.user
        );
        response.forEach((board) => {
            // events = [...events, ...board.cards];
            board.cards.forEach((card) => {
                events.push({
                    boardId: board._id,
                    name: card.title,
                    start: card.dueDate.toISOString().slice(0, 10),
                });
            });
        });
        res.status(200).json({
            status: "success",
            data: events,
        });
    } catch (error) {
        next(error);
    }
};

const notifyDeadline = async (req, res, next) => {
    const cards = await CalendarServices.getCards();
    const boards = await CalendarServices.getBoards();
    console.log("Cards --> ", cards);
    console.log("Boards --> ", boards);

    cards.forEach(async (card) => {
        const users = [card.board.owner, ...card.board.members];
        users.forEach(async (user) => {
            await sendMail(
                user.email,
                `Due tomorrow: ${card.title}`,
                `A card titled ${card.title} from board ${card.board.title} is due in tomorrow. Would you like to give it in?`
            );
        });
    });

    boards.forEach((board) => {
        const users = [board.owner, ...board.members];
        users.forEach(async (user) => {
            await sendMail(
                user.email,
                `Due tomorrow: ${board.title}`,
                `A board titled ${board.title} is due tomorrow. Would you like to give it in?`
            );
        });
    });
};

module.exports = {
    getEvents,
    notifyDeadline,
};
