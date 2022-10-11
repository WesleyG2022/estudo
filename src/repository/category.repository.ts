import { Categoria } from "../model/categoria.model";

export interface ICreateCategoryDTO {
    nome: string;
    descricao: string;
}

class categoryRepository {
    private categoriaBanco: Categoria[]

    constructor() {
        this.categoriaBanco = [];
    };

    creat(data: ICreateCategoryDTO): void {
        const date = new Date();
        const category = new Categoria();
        /*category.nome = nome;
        category.descricao = descricao;
        category.create_at = data;*/
        Object.assign(category, {
            nome: data.nome,
            descricao: data.descricao,
            create_at: date
        })

        this.categoriaBanco.push(category)
    };
    findAll(): Categoria[] {
        return this.categoriaBanco;
    };

    findByName(nome: string): Categoria | undefined {
        const categoriNome = this.categoriaBanco.find((categoriNome) => categoriNome.nome === nome);
        return categoriNome;
    };
}

export { categoryRepository };