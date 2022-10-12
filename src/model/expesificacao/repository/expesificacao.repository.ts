import { ICreateCategoryDTO } from "../../categoria/repository/repository-interface/categoriarepositori.interface.ts";
import { Especificacoes } from "../especificacoes.model";


export class especificacoesRepository {
    private especificacoesBanco: Especificacoes[]

    constructor() {
        this.especificacoesBanco = [];
    };

    creat(data: ICreateCategoryDTO): void {
        const date = new Date();
        const category = new Especificacoes();
        Object.assign(category, {
            nome: data.nome,
            descricao: data.descricao,
            create_at: date
        })

        this.especificacoesBanco.push(category)
    };
    findAll(): Especificacoes[] {
        return this.especificacoesBanco;
    };

    findByName(nome: string): Especificacoes | undefined {
        const categoriNome = this.especificacoesBanco.find((categoriNome) => categoriNome.nome === nome);
        return categoriNome;
    };
};
