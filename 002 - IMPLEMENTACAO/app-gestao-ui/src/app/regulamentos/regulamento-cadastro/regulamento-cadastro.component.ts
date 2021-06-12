import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegulamentoService } from '../regulamento.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-regulamento-cadastro',
  templateUrl: './regulamento-cadastro.component.html',
  styleUrls: ['./regulamento-cadastro.component.css']
})
export class RegulamentoCadastroComponent implements OnInit {

  regulamento: any;

  constructor(
    private regulamentoService: RegulamentoService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.regulamento = event.target.files[0];
    }
    
  }

  onSubmit() {
    this.regulamentoService.subirRegulamentoPdf(this.regulamento, 1, 1).then(() => {
      console.log('sucesso');
    }).catch(e => {
      this.errorHandlerService.handle(e);
      
    })
  }

}