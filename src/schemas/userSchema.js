import Joi from 'joi';

export const userSchema = Joi.object({
    name: Joi.string().min(1).required(),
    surname: Joi.string().min(1).required(),
    age: Joi.number().integer().min(0).required(),
    email: Joi.string().email().required(),
    address: Joi.string().min(3).required(),
    city: Joi.string().min(2).required(),
    province: Joi.string().min(2).required()
});