import { users } from "../db/users.js";
import { getUser } from "../models/users.js";

export const getUserService = (email) => {

    const userFound = getUser(email);

    return userFound;
};