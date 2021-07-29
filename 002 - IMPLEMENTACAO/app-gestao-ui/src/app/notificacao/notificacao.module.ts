import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacaoRoutingModule } from './notificacao-routing.module';
import { NotificacaoComponent } from './notificacao/notificacao.component';


@NgModule({
  declarations: [NotificacaoComponent],
  imports: [
    CommonModule,
    NotificacaoRoutingModule
  ]
})
export class NotificacaoModule { }
