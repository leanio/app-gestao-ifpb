import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificacaoComponent } from './notificacao/notificacao.component';

const routes: Routes = [
  {path: 'notificacoes/listar/:codigoUsuario', component: NotificacaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class NotificacaoRoutingModule { }
