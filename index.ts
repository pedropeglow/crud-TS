const express = require("express");
import Connection from "./connection/connection";
Connection;
import rotasCliente from "./routes/clientesRoutes";
import rotasLivro from "./routes/livrosRoutes";
import rotasAutor from "./routes/autoresRoutes";
var cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = 3030;

const server = app.listen(3030, () => {
  console.log("Iniciando na porta ", +PORT);
});

app.get("/api", (req, res) => {
  res.send("Bem-vindo a API");
});

app.use("/api/cliente", rotasCliente);
app.use("/api/livro", rotasLivro);
app.use("/api/autor", rotasAutor);
