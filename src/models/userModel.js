import { users } from "../db/users.js";
import argon2 from 'argon2';

export const getUserById = (id) => {

    const userFound = users.find((user) => user.id == id);

    return userFound;
};

export const getAllUsers = () => {

    return users;
};

export const insert = async (userData) => {

    const { name, surname, age, email, address, city, province, password } = userData;

    const newId = users[users.length - 1].id + 1;

    const hash = await argon2.hash(password);

    const newUser = {
        id: newId,
        name: name,
        surname: surname,
        age: age,
        email: email,
        password: hash,
        address: address,
        city: city,
        province: province,
        isActive: true
    };

    users.push(newUser);

    return newId;
};

export const getUserByIdAndUpdate = (id, userData) => {

    users[id - 1].age = userData.age;
    users[id - 1].email = userData.email;
    users[id - 1].address = userData.address;
    users[id - 1].city = userData.city;
    users[id - 1].province = userData.province;

    const updatedUser = users.find((user) => user.id == id);

    return updatedUser;
};

export const getUserByEmail = (email) => {

    const userFound = users.find((user) => user.email == email);

    return userFound;
};

export const deregisterUserById = (id) => {

    const deregisterdedUser = users.find((user) => user.id == id);

    if (deregisterdedUser) {
        users[id - 1].isActive = false;
    }

    return deregisterdedUser;
};


