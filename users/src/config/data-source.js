import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User.js';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User],
    migrations: ['src/migrations/*.js'],
    synchronize: false
});

await AppDataSource.initialize();
console.log('DB connected');