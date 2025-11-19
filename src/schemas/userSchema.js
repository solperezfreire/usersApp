import Joi from 'joi';

export const createUserSchema = Joi.object({
    name: Joi.string().min(1).required(),
    surname: Joi.string().min(1).required(),
    age: Joi.number().integer().min(0).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    address: Joi.string(),
    city: Joi.string(),
    province: Joi.string()
});

export const updateUserSchema = Joi.object({
    age: Joi.number().integer().min(0).optional(),
    email: Joi.string().email().optional(),
    address: Joi.string().optional(),
    city: Joi.string().optional(),
    province: Joi.string().optional()
}).min(1)
    .unknown(false);