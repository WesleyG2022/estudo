import { Router } from "express"
import { categoryRepository } from "../model/categoria/repository/category.repository";
import { CriarCategoriaController } from "../model/categoria/use-case/criar-categoria.controller";
import { criarCategoriaUseCase } from "../model/categoria/use-case/criar-categoria/criar-categoria.use-case";
import { listarTodosUseCase } from "../model/categoria/use-case/lista-todos/lista-todos.use-case";

const categoriaRoutes = Router();

const categoriaRepository = new categoryRepository()
const criarUseCase = new criarCategoriaUseCase(categoriaRepository)
const listaTodos = new listarTodosUseCase(categoriaRepository)
const criarCategoriaController = new CriarCategoriaController(criarUseCase, listaTodos);

categoriaRoutes.post('/', (req, res) => {
    return criarCategoriaController.criar(req, res);
});

categoriaRoutes.get('/', (req, res) => {
    return criarCategoriaController.listarTodos(req, res);
});

export { categoriaRoutes }