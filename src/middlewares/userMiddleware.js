import { userSchema } from "../schemas/userSchema.js";
import createHttpError from 'http-errors';

export const validateUser = (req, res, next) => {
    const error = userSchema.validate(req.body);

    if (error) {
        res.status(400);
        res.send({
            "status": false,
            "message": createHttpError(400, "can't create user: it has null/empty value")
        });
    }

    next();
};