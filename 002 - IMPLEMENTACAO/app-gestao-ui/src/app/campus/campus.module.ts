import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampusRoutingModule } from './campus-routing.module';
import { CampusPesquisaComponent } from './campus-pesquisa/campus-pesquisa.component';
import { CampusCadastroComponent } from './campus-cadastro/campus-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [CampusPesquisaComponent, CampusCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    TableModule,
    CardModule,
    TabViewModule,
    DropdownModule,

    CampusRoutingModule
  ]
})
export class CampusModule { }
