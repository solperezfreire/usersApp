
export class CreateUsers1774994879028 {

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "users" (
                id varchar PRIMARY KEY,
                name varchar NOT NULL,
                surname varchar,
                age int,
                email varchar UNIQUE NOT NULL,
                password varchar NOT NULL,
                address varchar,
                city varchar,
                province varchar,
                "isActive" boolean
            );
        `);
    }

    async down(queryRunner) {
    }

}
