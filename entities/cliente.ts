import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  matricula: number;

  @Column()
  nome_cliente: string;

  @Column()
  telefone_cliente: string;
}
