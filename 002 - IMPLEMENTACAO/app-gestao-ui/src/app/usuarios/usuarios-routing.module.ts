import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioPesquisaComponent } from './usuario-pesquisa/usuario-pesquisa.component';

const routes: Routes = [
  {path: 'usuarios/cadastro', component: UsuarioCadastroComponent},
  {path: 'usuarios/atualizar/:codigo', component: UsuarioCadastroComponent},
  {path: 'usuarios/pesquisa', component: UsuarioPesquisaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
