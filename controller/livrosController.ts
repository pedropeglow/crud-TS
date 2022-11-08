import Connection from "../connection/connection";
import { Livros } from "../entities/livros";

export class LivrosController {
  livrosRepository = Connection.getRepository(Livros);

  listar = async (req: any, res: any) => {
    const livros: any = await this.livrosRepository.find();
    res.send(livros);
    console.log("Consulta feita com sucesso!");
  };

  buscarPorId = async (req: any, res: any) => {
    const id = req.params.id;

    const clientes = await this.livrosRepository.findOneBy({
      id: id,
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

  excluir = async (req: any, res: any) => {
    const user = await this.livrosRepository.delete(req.params.id);
    res.json({
      message: "success",
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
