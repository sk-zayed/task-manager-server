const getBoardsById = (req, res, next) => {
    res.status(200).json({
        status: "success",
        data: res.locals.claims
    });
};

module.exports = {
    getBoardsById
}