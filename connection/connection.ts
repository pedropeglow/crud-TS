import { clientes } from "../entities/clientes";
import { createConnection } from "typeorm";

export const connection = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "api",
  entities: [clientes],
  synchronize: true,
  logging: false,
});
