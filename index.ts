import * as express from "express";
import { connection } from "./connection/connection";
import { clientes } from "./entities/clientes";
import * as cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

const server = app.listen(3000, () => {
  console.log("Iniciando na porta ", +PORT);
});
app.get("/api", (req, res) => {
  res.send("Bem-vindo a API");
});
connection
  .then(async (connection) => {
    console.log("connected");
    const clientesRepository = connection.getRepository(clientes);
    app.get("/api/clientes", async (req, res) => {
      const clientes = await clientesRepository.find();
      res.send(clientes);
    });
    app.post("/api/clientes", async (req, res) => {
      console.log("body", req.body);
      const user = await clientesRepository.create(req.body);
      const results = await clientesRepository.save(user);

      res.json({
        message: "success",
        payload: results,
      });
    });
    app.get("/api/clientes/:matricula", async (req, res) => {
      console.log("called");
      console.log(req.params.matricula);
      const user = await clientesRepository.findOne({
        where: { matricula: req.params.matricula },
      });
      res.json({
        message: "success",
        payload: user,
      });
    });
    app.delete("/api/clientes/:matricula", async (req, res) => {
      const user = await clientesRepository.delete(req.params.matricula);
      res.json({
        message: "success",
      });
    });
    app.put("/api/clientes/:matricula", async (req, res) => {
      const user = await clientesRepository.findOne(req.params.matricula);
      clientesRepository.merge(user, req.body);
      const result = await clientesRepository.save(user);
      res.json({
        message: "success",
        payload: result,
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
