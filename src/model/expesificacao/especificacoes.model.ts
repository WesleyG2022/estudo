import { v4 as uuidv4 } from 'uuid';

export class Especificacoes {
    id?: string;
    nome?: string;
    descricao?: string;
    create_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
};
