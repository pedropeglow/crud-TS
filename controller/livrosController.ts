import Connection from "../connection/connection";
import { Livro } from "../entities/livro";

export class LivrosController {
  livrosRepository = Connection.getRepository(Livro);

  listar = async (req: any, res: any) => {
    const livros: any = await this.livrosRepository.find();
    res.send(livros);
    console.log("Consulta feita com sucesso!");
  };

  buscarPorId = async (req: any, res: any) => {
    const id_livro = req.params.id_livro;

    const clientes = await this.livrosRepository.findOneBy({
      id_livro: id_livro,
    });

    res.json(clientes);
  };

  inserir = async (req: any, res: any) => {
    console.log("body", req.body);
    const user = await this.livrosRepository.create(req.body);
    const results = await this.livrosRepository.save(user);

    res.json({
      message: "success",
      payload: results,
    });
  };

  deletar = async (req: any, res: any) => {
    const user = await this.livrosRepository.delete(req.params.matricula);
    res.json({
      message: "Cliente Excluído com Sucesso",
    });
  };

  atualizar = async (req: any, res: any) => {
    const user = await this.livrosRepository.findOne(req.params.id);
    this.livrosRepository.merge(user, req.body);
    const result = await this.livrosRepository.save(user);
    res.json({
      message: "success",
      payload: result,
    });
  };
}
