import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Login extends BaseResourceModel {
    constructor(
        id?: number,
        public email?: string,
        public senha?: string,
    ) { super(); }

    // metodo recebe um json e retorna uma nova instância da classe entry com os dados do json
    static fromJson(jsonData: any): Login {
        return Object.assign(new Login(), jsonData);
    }
}