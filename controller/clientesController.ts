import { Request, Response } from "express";
import Connection from "../connection/connection";
import { Clientes } from "../entities/clientes";

export class ClientesController {
  clientesRepository = Connection.getRepository(Clientes);

  listar = async (req: any, res: any) => {
    const clientes: any = await this.clientesRepository.find();
    res.send(clientes);
    console.log("Consulta feita com sucesso!");
  };

  buscarPorMatricula = async (req: any, res: any) => {
    const matricula = req.params.matricula;

    const clientes = await this.clientesRepository.findOneBy({
      matricula: matricula,
    });

    res.json(clientes);
  };

  inserir = async (req: any, res: any) => {
    console.log("body", req.body);
    const user = await this.clientesRepository.create(req.body);
    const results = await this.clientesRepository.save(user);

    res.json({
      message: "success",
      payload: results,
    });
  };
}
