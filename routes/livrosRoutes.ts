import { Router } from "express";
import { LivrosController } from "../controller/livrosController";

const express = require("express");
const rotas = Router();

const controller = new LivrosController();

rotas.get("/", controller.listar);
rotas.get("/:id", controller.buscarPorId);
rotas.post("/", controller.inserir);

export default rotas;
