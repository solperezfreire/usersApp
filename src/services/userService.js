import { users } from "../db/users.js";

export const getUser = (email) => {

    const userFound = users.find((user) => user.email == email);

    return userFound;
};