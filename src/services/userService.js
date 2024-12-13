import { users } from "../db/users.js";
import { getUser } from "../models/users.js";

export const getUserService = (id) => {

    const userFound = getUser(id);

    return userFound;
};