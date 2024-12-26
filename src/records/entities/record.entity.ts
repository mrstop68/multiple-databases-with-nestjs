import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('records')
export class RecordPostgres {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    phone: string;

    @Column()
    email: string;

}
