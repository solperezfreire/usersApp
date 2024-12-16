import userModel from '../models/userModel.js';

export const getUser = (id) => {

    const userFound = userModel.getUser(id);

    return userFound;
};

export const createUser = (userData) => {

    const hasNullValue = Object.values(userData).some(value => value === null || value == '');

    if (hasNullValue) {
        return;
    }

    const newUser = userModel.postUser(userData);

    return newUser;
};

export default {
    getUser,
    createUser
}