import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "varchar"
        },
        name: {
            type: "varchar"
        },
        surname: {
            type: "varchar"
        },
        age: {
            type: "int"
        },
        email: {
            type: "varchar",
            unique: true
        },
        password: {
            type: "varchar"
        },
        address: {
            type: "varchar"
        },
        city: {
            type: "varchar"
        },
        province: {
            type: "varchar"
        },
        isActive: {
            type: "boolean"
        }
    }
});