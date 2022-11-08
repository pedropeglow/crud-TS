import { Router } from "express";
import { ClientesController } from "../controller/clientesController";

const express = require("express");
const rotas = Router();

const controller = new ClientesController();

rotas.get("/", controller.listar);
rotas.get("/:matricula", controller.buscarPorMatricula);
rotas.post("/", controller.inserir);

export default rotas;
