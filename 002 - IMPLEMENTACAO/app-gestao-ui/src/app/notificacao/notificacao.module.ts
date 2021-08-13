import { DialogModule } from 'primeng/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';

import { NotificacaoRoutingModule } from './notificacao-routing.module';
import { NotificacaoComponent } from './notificacao/notificacao.component';


@NgModule({
  declarations: [NotificacaoComponent],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    DialogModule,

    NotificacaoRoutingModule
  ]
})
export class NotificacaoModule { }
