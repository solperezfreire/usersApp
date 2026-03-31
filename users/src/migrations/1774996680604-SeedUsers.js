
export class SeedUsers1774996680604 {

    async up(queryRunner) {
        const exists = await queryRunner.query(
            `SELECT 1 FROM "users" LIMIT 1;`
        );

        if (exists.length > 0) {
            console.log('Seed skipped: ya hay datos');
            return;
        }

        await queryRunner.query(`
            INSERT INTO "users" 
            (id, name, surname, age, email, password, address, city, province, "isActive")
            VALUES
            ('1', 'Homero J', 'Simpson', 38, 'homerosimpson@gmail.com', 'password1', 'Avenida Siempreviva 742', 'Springfield', 'Oregon', true),
            ('2', 'Mirtha', 'Legrand', 15987516, 'mirthalegrand@gmail.com', 'password2', 'Av Libertador 1546', 'CABA', 'CABA', true),
            ('3', 'P', 'Sherman', 32, 'psherman@gmail.com', 'password3', 'Wallaby 42', 'Sydney', 'Nueva Gales del Sur', true),
            ('4', 'Suki', 'Chat', 4, 'suki@gmail.com', 'password4', '12 Lexington', 'London', 'London', true),
            ('5', 'Milka', 'Chat', 3, 'milka@gmail.com', 'password5', '652 5th avenue', 'Manhattan', 'New York', true),
            ('6', 'Merlina', 'Chat', 9, 'merlina@gmail.com', 'password6', 'Av des Champs-Elysees 52', 'Paris', 'Ile-de-France', true),
            ('7', 'Balu', 'Chien', 11, 'balu@gmail.com', 'password7', 'Gran Via 17', 'Madrid', 'Madrid', true);
        `);

        console.log('Seed migration ejecutada');
    }

    async down(queryRunner) {
    }

}
