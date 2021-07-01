import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ProcessoOutputBuscar } from 'src/app/core/model';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-processo-pesquisa',
  templateUrl: './processo-pesquisa.component.html',
  styleUrls: ['./processo-pesquisa.component.css']
})
export class ProcessoPesquisaComponent implements OnInit {

  processo = new ProcessoOutputBuscar();

  codigoCampus: number;
  codigoProcesso: number;

  constructor(
    private processoService: ProcessoService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.codigoCampus = this.route.snapshot.params.codigoCampus;
    this.codigoProcesso = this.route.snapshot.params.codigoProcesso;

    this.buscar();
  }

  buscar(): void {
    this.processoService.buscar(this.codigoCampus, this.codigoProcesso).then(dados => {
      this.processo = dados;
    });
  }

  remover(codigoRegulamento: number): void {
    this.processoService.removerRegulamento(this.codigoCampus, this.codigoProcesso, codigoRegulamento).then(dados => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Regulamento removido'});
    })
  }

  abrirArquivo(url: string) {
    window.open(url, '_blank');
  }

  subirRegulamentoPdf(event) {
    let regulamento: any;

    for(let file of event.files) {
      regulamento = file;
    }

    this.processoService.subirRegulamentoPdf(regulamento, this.codigoCampus, this.codigoProcesso).then(() => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Regulamento salvo'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });

  }

}
