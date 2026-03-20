import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryColumn()
    id;

    @Column()
    name;

    @Column({ unique: true })
    email;

    @Column()
    age;

    @Column()
    isActive;
}