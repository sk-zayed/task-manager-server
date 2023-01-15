const CalendarServices = require("../services/calendar.services");

const getEvents = async (req, res, next) => {
    try{
        const events = [];
        const response = await CalendarServices.getEvents(res.locals.claims.user);
        response.forEach(board => {
            // events = [...events, ...board.cards];
            board.cards.forEach(card => {
                events.push({
                    boardId: board._id,
                    name: card.title,
                    start: card.dueDate.toISOString().slice(0, 10)
                });
            });
        });
        res.status(200).json({
            status: "success",
            data: events
        });
    } catch(error) {
        next(error);
    }
};

module.exports = {
    getEvents
};