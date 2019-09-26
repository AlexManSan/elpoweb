import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Ssuporte extends BaseResourceModel {
    constructor(
        id?: number,
        public descricao?: string,
        public score?: number
    ) { super(); }

    // metodo recebe um json e retorna uma nova instância da classe entry com os dados do json
    static fromJson(jsonData: any): Ssuporte {
        return Object.assign(new Ssuporte(), jsonData);
    }
}