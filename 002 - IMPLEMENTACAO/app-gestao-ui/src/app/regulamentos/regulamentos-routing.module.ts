import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegulamentoCadastroComponent } from './regulamento-cadastro/regulamento-cadastro.component';

const routes: Routes = [
  {path: 'regulamentos/cadastro', component: RegulamentoCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegulamentosRoutingModule { }
