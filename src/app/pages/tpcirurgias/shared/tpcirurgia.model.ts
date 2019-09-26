import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Tpcirurgia extends BaseResourceModel {
    constructor(
        id?: number,
        public descricao?: string,
        public score?: number
    ) { super(); }

    // metodo recebe um json e retorna uma nova instância da classe entry com os dados do json
    static fromJson(jsonData: any): Tpcirurgia {
        return Object.assign(new Tpcirurgia(), jsonData);
    }
}