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
      const id_autor = req.params.id_autor;
      const autores = await this.autoresRepository.findOneBy({
        id_autor: id_autor,
      });
      return res.status(200).json(autores);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  inserir = async (req: any, res: any) => {
    try {
      const autor = await this.autoresRepository.create(req.body);
      const results = await this.autoresRepository.save(autor);
      return res
        .status(200)
        .json({ message: "Autor Inserido com Sucesso!", payload: results });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  deletar = async (req: any, res: any) => {
    try {
      const user = await this.autoresRepository.delete(req.params.id_autor);
      return res.status(200).json({
        message: "Autor Excluído com Sucesso!",
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  atualizar = async (req: any, res: any) => {
    try {
      const autor = await this.autoresRepository.findOne(req.params.id_autor);
      this.autoresRepository.merge(autor, req.body);
      const result = await this.autoresRepository.save(autor);
      return res
        .status(200)
        .json({ message: "Autor atualizado com sucesso", payload: result });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
