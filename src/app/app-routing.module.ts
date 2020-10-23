import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'idade_pacientes', loadChildren: './pages/ipacientes/ipacientes.module#IpacientesModule' },
  { path: 'comorbidades', loadChildren: './pages/comorbidades/comorbidades.module#ComorbidadesModule' },
  { path: 'pmembros', loadChildren: './pages/pmembros/pmembros.module#PmembrosModule' },
  { path: 'ssuportes', loadChildren: './pages/ssuportes/ssuportes.module#SsuportesModule' },
  { path: 'tpanestesias', loadChildren: './pages/tpanestesias/tpanestesias.module#TpanestesiasModule' },
  { path: 'tpcirurgias', loadChildren: './pages/tpcirurgias/tpcirurgias.module#TpcirurgiasModule' },
  { path: 'tpposcirurgicas', loadChildren: './pages/tpposcirurgicas/tpposcirurgicas.module#TpposcirurgicasModule' },
  { path: 'recomendacoes', loadChildren: './pages/recomendacoes/recomendacoes.module#RecomendacoesModule' },
  { path: 'elpos', loadChildren: './pages/elpo/elpo.module#ElpoModule' },
  { path: 'elpos/pesq-elpo', loadChildren: './pages/elpo/elpo.module#ElpoModule' },
  { path: 'pacientes', loadChildren: './pages/pacientes/pacientes.module#PacientesModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
