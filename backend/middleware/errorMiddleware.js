function errHandler(err, req, res, next) {
    const statusCode = res.StatusCode ? res.StatusCode : 500;
    res.status(statusCode);
    res.json({
        status: statusCode,
        message: err.message,
        stackTrace:
            process.env.NODE_ENV === "development" ? err.stackTrace : null,
    });
}

module.exports = {
    errHandler,
};
