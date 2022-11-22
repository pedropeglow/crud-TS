import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  id_autor: number;

  @Column()
  nome_autor: string;
}
