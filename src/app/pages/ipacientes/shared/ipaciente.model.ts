import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Ipaciente extends BaseResourceModel {
    constructor(
        id?: number,
        public idade?: string,
        public score?: number
    ) { super(); }

    // metodo recebe um json e retorna uma nova instância da classe entry com os dados do json
    static fromJson(jsonData: any): Ipaciente {
        return Object.assign(new Ipaciente(), jsonData);
    }
}