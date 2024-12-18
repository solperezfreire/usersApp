import { mandatoryFields } from '../db/users.js';
import userModel from '../models/userModel.js';

export const getUser = (id) => {

    const userFound = userModel.getUserById(id);

    return userFound;
};

export const createUser = (userData) => {

    const hasNullValue = Object.values(userData).some(value => value === null || value == '');
    const exists = (key) => Object.getOwnPropertyNames(userData).includes(key);
    const hasAllKeys = mandatoryFields.every(exists);

    if (hasNullValue || !hasAllKeys) {
        console.log('anda re piola')
        return;
    }

    const newUser = userModel.insert(userData);

    return newUser;
};

export default {
    getUser,
    createUser
}