import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessoCadastroComponent } from './processo-cadastro/processo-cadastro.component';
import { ProcessoListarComponent } from './processo-listar/processo-listar.component';
import { ProcessoPesquisaComponent } from './processo-pesquisa/processo-pesquisa.component';

const routes: Routes = [
  {path: 'processos/cadastro/:codigoCampus', component: ProcessoCadastroComponent},
  {path: 'processos/listar/:codigoCampus', component: ProcessoListarComponent},
  {path: 'processos/pesquisa/:codigoCampus/:codigoProcesso', component: ProcessoPesquisaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessosRoutingModule { }
