import "reflect-metadata";
import { Cliente } from "../entities/cliente";
import { DataSource } from "typeorm";
import { Livro } from "../entities/livro";
import { Autor } from "../entities/autor";

const Connection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "progFullStack",
  entities: [Cliente, Autor, Livro],
  synchronize: true,
  logging: false,
});

Connection.initialize()
  .then(() => {
    console.log(`Banco de Dados inicializado com sucesso`);
  })
  .catch((err) => {
    console.error(`Banco de Dados não inicializado`, err);
  });

export default Connection;
