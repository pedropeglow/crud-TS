import Connection from "../connection/connection";
import { Autor } from "../entities/autor";
import { Livro } from "../entities/livro";

export class LivrosController {
  livrosRepository = Connection.getRepository(Livro);
  autoresRepository = Connection.getRepository(Autor);

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
      if (livro) {
        return res.status(200).json(livro);
      } else {
        return res.status(200).json("Livro não encontrado!");
      }
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  inserir = async (req: any, res: any) => {
    if (
      req.body.nome_livro &&
      req.body.editora &&
      req.body.ano_publicacao &&
      req.body.id_autor
    ) {
      try {
        const livro = await this.livrosRepository.create(req.body);
        const results = await this.livrosRepository.save(livro);
        return res.status(200).json("Livro Inserido com Sucesso");
      } catch (error) {
        return res.status(200).json("Autor Não Encontrado");
      }
    } else {
      return res.status(400).json("Preencha os campos corretamente");
    }
  };

  deletar = async (req: any, res: any) => {
    const livros = await this.livrosRepository.findOneBy({
      id_livro: req.params.id_livro,
    });
    if (!livros) {
      return res.status(400).json("Livro não encontrado");
    } else {
      try {
        const livro = await this.livrosRepository.delete(req.params.id_livro);
        return res.status(200).json("Livro Excluído com Sucesso");
      } catch (error) {
        return res.status(500).json({ error });
      }
    }
  };

  atualizar = async (req: any, res: any) => {
    const { id_livro } = req.params;
    try {
      const cliente_update = await this.livrosRepository.update(
        id_livro,
        req.body
      );
      const livros = await this.livrosRepository.findOneBy({
        id_livro: req.params.id_livro,
      });
      if (livros) {
        if (
          req.body.nome_livro ||
          req.body.editora ||
          req.body.ano_publicacao ||
          req.body.id_autor
        ) {
          return res.status(200).json("Livro atualizado com sucesso.");
        } else {
          return res.status(400).json("Preencha os campos corretamente");
        }
      } else {
        return res.status(200).json("Livro não encontrado");
      }
    } catch (error) {
      return res.status(500).json("Erro ao tentar atualizar livro.");
    }
  };
}
