import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { Tpposcirurgica } from '../../tpposcirurgicas/shared/tpposcirurgica.model';

export class Recomendacoes extends BaseResourceModel {
    constructor(
        id?: number,
        public regiaoCorpo?: string,
        public recomendacoes?: number,
        public tpPosicaoCirurgicaId?: number,
        public tpPosicaoCirurgica?: Tpposcirurgica
    ) { super(); }

    // metodo recebe um json e retorna uma nova instância da classe entry com os dados do json
    static fromJson(jsonData: any): Recomendacoes {
        return Object.assign(new Recomendacoes(), jsonData);
    }
}