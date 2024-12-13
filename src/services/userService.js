import { users } from "../db/users.js";
import { getUser, postUser } from "../models/users.js";

export const getUserService = (id) => {

    const userFound = getUser(id);

    return userFound;
};

export const postUserService = (userData) => {

    const newUser = postUser(userData);

    return newUser;
};