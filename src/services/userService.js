import * as userModel from '../models/userModel.js';

export const getUser = (id) => {

    const userFound = userModel.getUserById(id);

    return userFound;
};

export const getUserByEmail = (email) => {

    const userFound = userModel.getUserByEmail(email);

    return userFound;
};

export const createUser = (userData) => {

    const newUser = userModel.insert(userData);

    return newUser;
};

export const updateUser = (id, userData) => {

    const updatedUser = userModel.getUserByIdAndUpdate(id, userData);

    return updatedUser;
};

export const deregisterUser = (id) => {

    const deregisteredUser = userModel.deregisterUserById(id);

    return deregisteredUser;
};
