import { Request, Response } from "express";
import Connection from "../connection/connection";
import { Cliente } from "../entities/cliente";

export class ClientesController {
  clientesRepository = Connection.getRepository(Cliente);

  listar = async (req: any, res: any) => {
    const clientes: any = await this.clientesRepository.find();
    res.send(clientes);
    console.log("Consulta realizada com sucesso!");
  };

  buscarPorMatricula = async (req: any, res: any) => {
    const matricula = req.params.matricula;
    const clientes = await this.clientesRepository.findOneBy({
      matricula: matricula,
    });
    res.json(clientes);
    console.log("Consulta realizada com sucesso!");
  };

  inserir = async (req: any, res: any) => {
    console.log("body", req.body);
    const user = await this.clientesRepository.create(req.body);
    const results = await this.clientesRepository.save(user);

    res.json({
      message: "Cliente Inserido com Sucesso!",
      payload: results,
    });
  };

  deletar = async (req: any, res: any) => {
    const user = await this.clientesRepository.delete(req.params.matricula);
    res.json({
      message: "Cliente Excluído com Sucesso",
    });
  };
}
