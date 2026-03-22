import { AppDataSource } from '../config/data-source.js';
import { User } from '../entities/User.js';

export const seed = async () => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repo = AppDataSource.getRepository(User);
    /*
        const existing = await repo.find();
        if (existing.length > 0) {
            console.log('Seed already executed');
            return;
        }
    */

    console.log("Antes de save");
    await repo.save([
        {
            id: '1',
            name: 'Homero J',
            surname: 'Simpson',
            age: 38,
            email: 'homerosimpson@gmail.com',
            password: 'password1',
            address: 'Avenida Siempreviva 742',
            city: 'Springfield',
            province: 'Oregon',
            isActive: true
        },
        {
            id: '2',
            name: 'Mirtha',
            surname: 'Legrand',
            age: 15987516,
            email: 'mirthalegrand@gmail.com',
            password: 'password2',
            address: 'Av Libertador 1546',
            city: 'CABA',
            province: 'CABA',
            isActive: true
        },
        {
            id: '3',
            name: 'P',
            surname: 'Sherman',
            age: 32,
            email: 'psherman@gmail.com',
            password: 'password3',
            address: 'Wallaby 42',
            city: 'Sydney',
            province: 'Nueva Gales del Sur',
            isActive: true
        },
        {
            id: '4',
            name: 'Suki',
            surname: 'Chat',
            age: 4,
            email: 'suki@gmail.com',
            password: 'password4',
            address: '12 Lexington',
            city: 'London',
            province: 'London',
            isActive: true
        },
        {
            id: '5',
            name: 'Milka',
            surname: 'Chat',
            age: 3,
            email: 'milka@gmail.com',
            password: 'password5',
            address: '652 5th avenue',
            city: 'Manhattan',
            province: 'New York',
            isActive: true
        },
        {
            id: '6',
            name: 'Merlina',
            surname: 'Chat',
            age: 9,
            email: 'merlina@gmail.com',
            password: 'password6',
            address: 'Av des Champs-Elysees 52',
            city: 'Paris',
            province: 'Ile-de-France',
            isActive: true
        },
        {
            id: '7',
            name: 'Balu',
            surname: 'Chien',
            age: 11,
            email: 'balu@gmail.com',
            password: 'password7',
            address: 'Gran Via 17',
            city: 'Madrid',
            province: 'Madrid',
            isActive: true
        }
    ]);

    console.log('Seed executed');

    await AppDataSource.destroy();
};

seed()
    .then(() => {
        console.log("Seed finished");
        process.exit(0);
    })
    .catch((err) => {
        console.error("Error en seed:", err);
        process.exit(1);
    });