import { users } from "../db/users.js";

export const getUser = (id) => {

    const userFound = users.find((user) => user.id == id);

    return userFound;
};

export const postUser = (userData) => {

    const { name, surname, age, email, address, city, province } = userData;

    const newId = users[users.length - 1].id + 1;

    const newUser = {
        id: newId,
        name: name,
        surname: surname,
        age: age,
        email: email,
        address: address,
        city: city,
        province: province
    };

    users.push(newUser);

    return newUser.id;
};