import createHttpError from 'http-errors';

const runValidation = (schema, data) => {
    const { error, value } = schema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const messages = error.details.map(d => d.message).join(', ');
        throw createHttpError(400, messages);
    }

    return value;
};

export const createValidator = ({ schema, property = 'body' }) => {
    return (req, res, next) => {
        try {
            req[property] = runValidation(schema, req[property]);
            next();
        } catch (err) {
            next(err); // delega al error handler global
        }
    };
};