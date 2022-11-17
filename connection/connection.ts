import "reflect-metadata";
import { Cliente } from "../entities/cliente";
import { DataSource } from "typeorm";
import { Livros } from "../entities/livros";

const Connection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "api",
  entities: [Cliente, Livros],
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
