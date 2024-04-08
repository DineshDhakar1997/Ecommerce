export const errorMiddleware = (err, req, res, next) => {
    console.log(err);
    err.message || (err.message = "internal server error");
    err.statusCode || (err.statusCode = 500);
    return res.status(err.statusCode).json({
        status: "failed",
        "message ": err.message,
    });
};
export const TryCatch = (func) => (req, res, next) => {
    return Promise.resolve(func(req, res, next)).catch(next);
};
