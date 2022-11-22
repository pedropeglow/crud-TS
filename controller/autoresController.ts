import Connection from "../connection/connection";
import { Autor } from "../entities/autor";

export class AutoresController {
  autoresRepository = Connection.getRepository(Autor);

  listar = async (req: any, res: any) => {
    const autores: any = await this.autoresRepository.find();
    res.send(autores);
    console.log("Consulta realizada com sucesso!");
  };

  buscarPorId = async (req: any, res: any) => {
    const id_autor = req.params.id_autor;
    const autores = await this.autoresRepository.findOneBy({
      id_autor: id_autor,
    });
    res.json(autores);
    console.log("Consulta realizada com sucesso!");
  };

  inserir = async (req: any, res: any) => {
    console.log("body", req.body);
    const user = await this.autoresRepository.create(req.body);
    const results = await this.autoresRepository.save(user);

    res.json({
      message: "Cliente Inserido com Sucesso!",
      payload: results,
    });
  };

  deletar = async (req: any, res: any) => {
    const user = await this.autoresRepository.delete(req.params.id_autor);
    res.json({
      message: "Cliente Excluído com Sucesso",
    });
  };
}
