import { Router } from "express"
import { categoryRepository } from "../repository/category.repository";


const categoriaRoutes = Router();

const categoriaRepository = new categoryRepository()

categoriaRoutes.post('/', (req, res) => {
    const { nome, descricao } = req.body;
    const validNome = categoriaRepository.findByName(nome);

    if (!validNome) {
        categoriaRepository.creat({ nome, descricao })
        console.log(categoriaRepository)
        res.status(200).send();
    }

    res.status(400).json({ erro: " E necessario que nome seja diferente!" })


});

categoriaRoutes.get('/', (req, res) => {
    const all = categoriaRepository.findAll()
    res.json(all)
});

export { categoriaRoutes }