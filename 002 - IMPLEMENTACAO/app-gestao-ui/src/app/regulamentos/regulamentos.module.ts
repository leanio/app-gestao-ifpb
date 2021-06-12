import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegulamentosRoutingModule } from './regulamentos-routing.module';
import { RegulamentoCadastroComponent } from './regulamento-cadastro/regulamento-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegulamentoCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    RegulamentosRoutingModule
  ]
})
export class RegulamentosModule { }
