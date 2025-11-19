import { createUserSchema, updateUserSchema } from "../schemas/userSchema.js";
import createHttpError from 'http-errors';

export const validateCreateUser = (req, res, next) => {
    const error = createUserSchema.validate(req.body);

    if (error) {
        const errorDetail = createHttpError(400, error.error.details[0].message);

        res.status(400);
        res.send({
            "status": false,
            "message": errorDetail.message
        });
    }

    next();
};

export const validateUpdateUser = (req, res, next) => {
    const error = updateUserSchema.validate(req.body);

    if (error) {
        const errorDetail = createHttpError(400, error.error.details[0].message);

        res.status(400);
        res.send({
            "status": false,
            "message": errorDetail.message
        });
    }

    next();
};