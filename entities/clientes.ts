import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Clientes {
  @PrimaryGeneratedColumn()
  matricula: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;
}
