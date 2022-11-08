import "reflect-metadata";
import { Clientes } from "../entities/clientes";
import { DataSource } from "typeorm";
import { Livros } from "../entities/livros";

const Connection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "api",
  entities: [Clientes, Livros],
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
