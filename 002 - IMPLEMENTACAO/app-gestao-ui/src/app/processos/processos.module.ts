import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DialogModule} from 'primeng/dialog';

import { ProcessosRoutingModule } from './processos-routing.module';
import { ProcessoCadastroComponent } from './processo-cadastro/processo-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ProcessoListarComponent } from './processo-listar/processo-listar.component';
import { ProcessoPesquisaComponent } from './processo-pesquisa/processo-pesquisa.component';



@NgModule({
  declarations: [ProcessoCadastroComponent, ProcessoListarComponent, ProcessoPesquisaComponent],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    TableModule,
    CardModule,
    TabViewModule,
    FileUploadModule,
    InputTextareaModule,
    DialogModule,

    ProcessosRoutingModule
  ]
})
export class ProcessosModule { }
