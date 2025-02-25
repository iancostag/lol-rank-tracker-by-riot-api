import { Entity,Column, PrimaryGeneratedColumn  } from "typeorm";

@Entity()
export class Jogadore {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    puuid : string

    @Column()
    gameName : string

    @Column()
    tagLine : string

    // @Column()
    // vitorias : number


}
