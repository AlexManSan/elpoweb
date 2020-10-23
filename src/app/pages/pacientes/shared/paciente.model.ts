import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Paciente extends BaseResourceModel {
    constructor(
        id?: number,
        public nome?: string,
        public idade?: number,
        public prontuario?: number
    ) { super(); }

    // metodo recebe um json e retorna uma nova instância da classe entry com os dados do json
    static fromJson(jsonData: any): Paciente {
        return Object.assign(new Paciente(), jsonData);
    }
}