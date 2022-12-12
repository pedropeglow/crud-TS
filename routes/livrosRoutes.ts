import { Router } from "express";
import { LivrosController } from "../controller/livrosController";

const express = require("express");
const rotas = Router();

const controller = new LivrosController();

rotas.get("/", controller.listar);
rotas.get("/:id_livro", controller.buscarPorId);
rotas.post("/", controller.inserir);
rotas.delete("/:id_livro", controller.deletar);
rotas.put("/:id_livro", controller.atualizar);

export default rotas;
