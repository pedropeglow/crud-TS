import Connection from "../connection/connection";
import { Livro } from "../entities/livro";

export class LivrosController {
  livrosRepository = Connection.getRepository(Livro);

  listar = async (req: any, res: any) => {
    try {
      const livros: any = await this.livrosRepository.find();
      return res.status(200).json(livros);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  buscarPorId = async (req: any, res: any) => {
    try {
      const id_livro = req.params.id_livro;
      const livro = await this.livrosRepository.findOneBy({
        id_livro: id_livro,
      });
      return res.status(200).json(livro);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  inserir = async (req: any, res: any) => {
    try {
      const livro = await this.livrosRepository.create(req.body);
      const results = await this.livrosRepository.save(livro);
      return res.status(200).json({
        message: "Livro Inserido com Sucesso",
        payload: results,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  deletar = async (req: any, res: any) => {
    try {
      const livro = await this.livrosRepository.delete(req.params.id_livro);
      return res.status(200).json({ message: "Livro Excluído com Sucesso" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  atualizar = async (req: any, res: any) => {
    try {
      const cliente = await this.livrosRepository.findOne(req.params.id_livro);
      this.livrosRepository.merge(cliente, req.body);
      const result = await this.livrosRepository.save(cliente);
      return res
        .status(200)
        .json({ message: "Livro atualizado com sucesso", payload: result });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
