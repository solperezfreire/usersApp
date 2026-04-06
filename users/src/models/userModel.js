import { AppDataSource } from "../config/data-source.js";
import { User } from "../entities/User.js";
import argon2 from 'argon2';
import { ulid } from 'ulid';

const getUsersTable = () => AppDataSource.getRepository(User);

const users = getUsersTable();

export const getUserById = async (id) => {

    const userFound = await users.findOneBy({ id });

    return userFound;
};

export const getAllUsers = async () => {

    return await users.find();
};

export const insert = async (userData) => {

    const { name, surname, age, email, address, city, province, password } = userData;

    const newId = ulid();

    const hash = await argon2.hash(password);

    const newUser = users.create({
        id: newId,
        name,
        surname,
        age,
        email,
        password: hash,
        address,
        city,
        province,
        isActive: true
    });

    await users.save(newUser);

    return newId;
};

export const getUserByIdAndUpdate = async (id, userData) => {

    const updatedUser = await users.update({ id },
        {
            age: userData.age,
            email: userData.email,
            address: userData.address,
            city: userData.city,
            province: userData.province
        }
    );

    return await users.findOneBy({ id });
};

export const getUserByEmail = async (email) => {

    const userFound = await users.findOneBy({ email });

    return userFound;
};

export const deregisterUserById = async (id) => {

    const deregisterdedUser = await users.update({ id },
        {
            isActive: false
        }
    );

    return await users.findOneBy({ id });
};


