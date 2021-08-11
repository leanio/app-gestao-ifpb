import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusCadastroComponent } from './campus-cadastro/campus-cadastro.component';
import { CampusPesquisaComponent } from './campus-pesquisa/campus-pesquisa.component';

const routes: Routes = [
  {path: 'campus/pesquisa', component: CampusPesquisaComponent},
  {path: 'campus/cadastro', component: CampusCadastroComponent},
  {path: 'campus/atualizar/:codigo', component: CampusCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampusRoutingModule { }
