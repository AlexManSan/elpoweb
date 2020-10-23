import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { Tpposcirurgica } from '../../tpposcirurgicas/shared/tpposcirurgica.model';
import { Ssuporte } from '../../ssuportes/shared/ssuporte.model';
import { Tpcirurgia } from '../../tpcirurgias/shared/tpcirurgia.model';
import { Pmembro } from '../../pmembros/shared/pmembro.model';
import { Tpanestesia } from '../../tpanestesias/shared/tpanestesia.model';
import { Ipaciente } from '../../ipacientes/shared/ipaciente.model';
import { Comorbidade } from '../../comorbidades/shared/comorbidade.model';
import { Paciente } from '../../pacientes/shared/paciente.model';

export class Elpo extends BaseResourceModel {
    constructor(
        id?: number,
        public data?: string,
        public totalScore?: number,
        public risco?: string,
        public tpPosicaoCirurgica?: Tpposcirurgica,
        public superficieSuporte?: Ssuporte,
        public tpCirurgia?: Tpcirurgia,
        public posicaoMembros?: Pmembro,
        public tpAnestesia?: Tpanestesia,
        public idadePaciente?: Ipaciente,
        public comorbidade?: Comorbidade,
        public paciente?: Paciente
    ) { super(); }

    // metodo recebe um json e retorna uma nova instância da classe entry com os dados do json
    static fromJson(jsonData: any): Elpo {
        return Object.assign(new Elpo(), jsonData);
    }
}