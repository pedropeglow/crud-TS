import { Request, Response } from "express";
import Connection from "../connection/connection";
import { Cliente } from "../entities/cliente";

export class ClientesController {
  clientesRepository = Connection.getRepository(Cliente);

  listar = async (req: any, res: any) => {
    try {
      const clientes: any = await this.clientesRepository.find();

      return res.status(200).json(clientes);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  buscarPorMatricula = async (req: any, res: any) => {
    try {
      const matricula = req.params.matricula;
      const clientes = await this.clientesRepository.findOneBy({
        matricula: matricula,
      });
      return res.status(200).json(clientes);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  inserir = async (req: any, res: any) => {
    try {
      const cliente = await this.clientesRepository.create(req.body);
      const results = await this.clientesRepository.save(cliente);
      return res.status(200).json({
        message: "Cliente Inserido com Sucesso",
        payload: results,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  deletar = async (req: any, res: any) => {
    try {
      const cliente = await this.clientesRepository.delete(
        req.params.matricula
      );
      return res.status(200).json({ message: "Cliente Excluído com Sucesso" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  atualizar = async (req: any, res: any) => {
    try {
      const cliente = await this.clientesRepository.findOne(
        req.params.matricula
      );
      this.clientesRepository.merge(cliente, req.body);
      const result = await this.clientesRepository.save(cliente);
      return res
        .status(200)
        .json({ message: "Cliente atualizado com sucesso", payload: result });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
