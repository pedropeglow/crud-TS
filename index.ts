const express = require("express");
import Connection from "./connection/connection";
Connection;
import rotasCliente from "./routes/clientesRoutes";
import rotasLivros from "./routes/livrosRoutes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

const server = app.listen(3000, () => {
  console.log("Iniciando na porta ", +PORT);
});

app.get("/api", (req, res) => {
  res.send("Bem-vindo a API");
});

app.use("/api/clientes", rotasCliente);
app.use("/api/livros", rotasLivros);
