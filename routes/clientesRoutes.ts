import { Router } from "express";

const express = require("express");
const rota = Router();

rota.get("/", controller.listar);
rota.post("/", controller.inserir);
rota.get(":matricula", controller.buscarPorId);
rota.delete(":id", controller.deletar);
