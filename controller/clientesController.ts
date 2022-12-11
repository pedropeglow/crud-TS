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
      if (clientes == null){
        return res.status(200).json({message: "Nenhum cliente encontrado!"})
      }else{
        return res.status(200).json(clientes);
      }
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  inserir = async (req: any, res: any) => {
    if (req.body.nome_cliente && req.body.telefone_cliente){
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
    }else {
      return res.status(400).json({message: "Preencha corretamente os campos"})
    }
  };

  deletar = async (req: any, res: any) => {
    const clientes = await this.clientesRepository.findOneBy({
      matricula: req.params.matricula,
    });
    if (!clientes) {
      return res.status(400).json({
        message: "Cliente não encontrado"
      })
    } else {
      try {
        const cliente = await this.clientesRepository.delete(
          req.params.matricula
        );
        return res.status(200).json({ message: "Cliente Excluído com Sucesso" });
      } catch (error) {
        return res.status(500).json({ error });
      }
    }
  };

  atualizar = async (req: any, res: any) => {
    const { matricula } = req.params;
    try {
      const cliente_update = await this.clientesRepository.update(
        matricula,
        req.body
      );
      const clientes = await this.clientesRepository.findOneBy({
        matricula: req.params.matricula,
      });
      if(clientes){
        if(req.body.nome_cliente || req.body.telefone_cliente){
          return res.status(200).json({
            message: "Cliente atualizado com sucesso."
          });
        }else{
          return res.status(400).json({message: "Preencha os campos corretamente!"})
        }
      }else{
        return res.status(200).json({message: "Cliente não encontrado"})
      }
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao tentar atualizar cliente.",
        info: error,
      });
    }
  };
}
