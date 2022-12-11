import Connection from "../connection/connection";
import { Autor } from "../entities/autor";

export class AutoresController {
  autoresRepository = Connection.getRepository(Autor);

  listar = async (req: any, res: any) => {
    try {
      const autores: any = await this.autoresRepository.find();
      return res.status(200).json(autores);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  buscarPorId = async (req: any, res: any) => {
    try {
      const autores = await this.autoresRepository.findOneBy({
        id_autor: req.params.id_autor,
      });
      if(autores){
        return res.status(200).json(autores);
      }else{
        return res.status(200).json({message: "Autor não encontrado!"})
      }
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  inserir = async (req: any, res: any) => {
    if(req.body.nome_autor){
      try {
        const autor = await this.autoresRepository.create(req.body);
        const results = await this.autoresRepository.save(autor);
        return res
          .status(200)
          .json({ message: "Autor Inserido com Sucesso!", payload: results });
      } catch (error) {
        return res.status(500).json({ error });
      }
    }else{
      return res.status(400).json({message: "Preencha os campos corretamente!"})
    }
  };

  deletar = async (req: any, res: any) => {
    const autores = await this.autoresRepository.findOneBy({
      id_autor: req.params.id_autor,
    });
    if (!autores){
      return res.status(404).json ({message: "Autor não encontrado!"})
    } else {
      try {
        const user = await this.autoresRepository.delete(req.params.id_autor);
        return res.status(200).json({
          message: "Autor Excluído com Sucesso!",
        });
      } catch (error) {
        return res.status(500).json({ error });
      }
      
    }
  };

  atualizar = async (req: any, res: any) => {
    const { id_autor } = req.params;
    try {
      const autor_update = await this.autoresRepository.update(
        id_autor,
        req.body
      );
      const autores = await this.autoresRepository.findOneBy({
        id_autor: req.params.id_autor,
      });
      if(autores){
        if(req.body.nome_autor){
          return res.status(200).json({
            message: "Autor atualizado com sucesso."
          });
        }else{
          return res.status(400).json({
            message: "Preencha os campos corretamente!"
          })
        }
      }else{
        return res.status(200).json(({message: "Autor não encontrado"}))
      }
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao tentar atualizar autor.",
        info: error,
      });
    }
}}
