import { users } from "../db/users.js";
export const getUser = (id) => {

    const userFound = users.find((user) => user.id == id);

    return userFound;
};