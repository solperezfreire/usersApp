import * as userModel from '../models/userModel.js';
import createHttpError from 'http-errors';

export const getUser = (id) => {

    const userFound = userModel.getUserById(id);

    return userFound;
};

export const getAllUsers = () => {

    const usersFound = userModel.getAllUsers();

    return usersFound;
};

export const getUserByEmail = (email) => {

    const userFound = userModel.getUserByEmail(email);

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

export const updateUser = (id, userData) => {

    const updatedUser = userModel.getUserByIdAndUpdate(id, userData);

    return updatedUser;
};

export const deregisterUser = (id) => {

    const deregisteredUser = userModel.deregisterUserById(id);

    return deregisteredUser;
};
