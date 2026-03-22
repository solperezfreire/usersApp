import * as userModel from '../models/userModel.js';
import createHttpError from 'http-errors';

export const getUser = async (id) => {

    const userFound = await userModel.getUserById(id);

    return userFound;
};

export const getAllUsers = async () => {

    const usersFound = await userModel.getAllUsers();

    return usersFound;
};

export const getUserByEmail = async (email) => {

    const userFound = await userModel.getUserByEmail(email);

    return userFound;
};

export const createUser = async (userData) => {

    const { age } = userData;

    if (age < 18) {
        throw createHttpError(400, 'User must be at least 18 years old');
    }

    const newUser = await userModel.insert(userData);

    return newUser

};

export const updateUser = async (id, userData) => {

    const updatedUser = await userModel.getUserByIdAndUpdate(id, userData);

    return updatedUser;
};

export const deregisterUser = async (id) => {

    const deregisteredUser = await userModel.deregisterUserById(id);

    return deregisteredUser;
};
