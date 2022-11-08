import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Livros {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isnb: string;

  @Column()
  nome: string;

  @Column()
  autor: string;

  @Column()
  editora: string;

  @Column()
  ano_publicacao: string;
}
