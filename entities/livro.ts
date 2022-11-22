import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id_livro: number;

  @Column()
  isnb: string;

  @Column()
  nome_livro: string;

  @Column()
  editora: string;

  @Column()
  ano_publicacao: string;

  @Column()
  id_autor: number;
}
