const logger = (req, res, next) => {
    const { userId } = req.query;

    console.log(` istek yapildi`);

    next();
};

module.exports = logger;
