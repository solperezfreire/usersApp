import * as userService from '../services/userService.js';
import createHttpError from 'http-errors';
import { status } from "http-status";
import { interceptor, resOk } from '../../../utils/interceptor.js';


export const getUser = interceptor(async (req, res) => {
    const { id } = req.params;

    const user = userService.getUser(id);

    if (!user) {
        throw createHttpError(404, 'User not found');
    }

    res.json({
        status: true,
        data: user
    });
});


export const getAllUsers = interceptor(async (req, res) => {
    const users = userService.getAllUsers();

    if (!users) {
        throw createHttpError(404, 'Users not found');
    }

    return resOk(res, users, 200);
});

export const createUser = interceptor(async (req, res) => {
    const { email } = req.body;

    const emailAlreadyExists = userService.getUserByEmail(email);

    if (emailAlreadyExists) {
        throw createHttpError(409, 'Email already exists');
    }

    const newUser = await userService.createUser(req.body);

    console.log('antes de if');
    console.log({ newUser });
    if (!newUser) {
        throw createHttpError(400, "Can't create user");
    }

    return resOk(res, { id: newUser }, 200);
});

export const updateUser = interceptor(async (req, res) => {
    const { id } = req.params;

    const updatedUser = userService.updateUser(id, req.body);

    if (!updatedUser) {
        throw createHttpError(400, "Can't update user");
    }

    return resOk(res, updatedUser, 200);
});

export const deregisterUser = interceptor(async (req, res) => {
    const { id } = req.params;

    const deregisteredUser = userService.deregisterUser(id);

    if (!deregisteredUser) {
        throw createHttpError(400, "Can't deregister user");
    }

    return resOk(res, deregisteredUser, 200);
});