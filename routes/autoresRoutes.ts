import { Router } from "express";
import { AutoresController } from "../controller/autoresController";

const express = require("express");
const rotas = Router();

const controller = new AutoresController();

rotas.get("/", controller.listar);
rotas.get("/:id_autor", controller.buscarPorId);
rotas.post("/", controller.inserir);
rotas.delete("/:id_autor", controller.deletar);

export default rotas;
