import * as userService from '../services/userService.js';
import createHttpError from 'http-errors';
import { status } from "http-status";
import { Joi } from 'joi';

export const getUser = (req, res) => {

    const { id } = req.params;

    const user = userService.getUser(id);

    if (!user) {
        res.status(404);
        res.send({
            "status": false,
            "message": status[404]
        });
    }

    res.send({
        "status": true,
        "data": user
    });
};

export const createUser = (req, res) => {

    const newUser = userService.createUser(req.body);

    if (!newUser) {
        res.status(400);
        res.send({
            "status": false,
            "message": createHttpError(400, "can't create user: it has null/empty value")
        });
    }

    res.send({
        "status": true,
        "data": { id: newUser }
    });
};