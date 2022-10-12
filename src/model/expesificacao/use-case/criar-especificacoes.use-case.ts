import { IEspecificacaoRepositoryInterface } from "../repository/repository-interface/especificacoes-repositori.interface.ts";

interface IRequest {
    nome: string;
    descricao: string;
};

export class CriarEspecificacoesUseCase {
    constructor(private criarEspecificacoes: IEspecificacaoRepositoryInterface) { }
    execult(data: IRequest): void {
        try {
            const validNome = this.criarEspecificacoes.findByName(data.nome);

            if (!validNome) {

                this.criarEspecificacoes.creat({
                    nome: data.nome,
                    descricao: data.descricao
                });
            };

        } catch {
            throw new Error("Essa especificação já existe!");
        };

    };
};