import { Router } from "express"
import { categoryRepository } from "../model/categoria/repository/category.repository";
import { CriarCategoriaController } from "../model/categoria/use-case/criar-categoria.controller";
import { criarCategoriaUseCase } from "../model/categoria/use-case/criar-categoria/criar-categoria.use-case";
import { listarTodosUseCase } from "../model/categoria/use-case/lista-todos/lista-todos.use-case";
import { UploadUseCase } from "../model/categoria/use-case/upload.use-case";
import { UploadCrv } from "../@core/service/upload-crv.service";

const categoriaRoutes = Router();

const multerUploadCrv = new UploadCrv()

const categoriaRepository = new categoryRepository()
const criarUseCase = new criarCategoriaUseCase(categoriaRepository)
const listaTodos = new listarTodosUseCase(categoriaRepository)
const uploadCategory = new UploadUseCase(categoriaRepository)
const criarCategoriaController = new CriarCategoriaController(criarUseCase, listaTodos, uploadCategory);

categoriaRoutes.post('/', (req, res) => {
    return criarCategoriaController.criar(req, res);
});

categoriaRoutes.get('/', (req, res) => {
    return criarCategoriaController.listarTodos(req, res);
});

categoriaRoutes.post('/import', multerUploadCrv.execult().single("file"), (req, res) => {
    return criarCategoriaController.upload(req, res)
});

export { categoriaRoutes }