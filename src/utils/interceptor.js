export const interceptor = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

export const resOk = (res, data, statusCode) => {
    return res.status(statusCode).json({
        status: true,
        data
    });
};