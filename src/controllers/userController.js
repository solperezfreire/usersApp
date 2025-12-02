import * as userService from '../services/userService.js';
import createHttpError from 'http-errors';
import { status } from "http-status";


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

    const { email } = req.body;

    const emailAlreadyExists = userService.getUserByEmail(email);

    if (emailAlreadyExists) {
        const errorDetail = createHttpError(400, "email already exists");

        res.status(409);
        res.send({
            "status": false,
            "message": errorDetail.message
        });
    }

    const newUser = userService.createUser(req.body);

    if (!newUser) {
        res.status(400);
        res.send({
            "status": false,
            "message": createHttpError(400, "can't create user")
        });
    }

    res.send({
        "status": true,
        "data": { id: newUser }
    });
};

export const updateUser = (req, res) => {

    const { id } = req.params;

    const updatedUser = userService.updateUser(id, req.body);

    if (!updatedUser) {

        const errorDetail = createHttpError(400, "can't update user");

        res.status(400);
        res.send({
            "status": false,
            "message": errorDetail.message
        });
    }

    res.send({
        "status": true,
        "data": updatedUser
    });
};