import * as userModel from '../models/userModel.js';

export const getUser = (id) => {

    const userFound = userModel.getUserById(id);

    return userFound;
};

export const createUser = (userData) => {

    const newUser = userModel.insert(userData);

    return newUser;
};
