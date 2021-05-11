const auth = (req, res, next) => {
    const { userId } = req.query;

    if (userId == 3) {
        next();
    } else {
        res.status(401).json(
            {
                status: 401,
                message: 'Unauthorized person'
            }
        )
    }
}

module.exports = auth;