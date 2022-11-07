import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class clientes {
  @PrimaryGeneratedColumn()
  matricula: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;
}
