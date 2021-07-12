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

  removerRegulamento(codigoRegulamento: number): void {
    this.processoService.removerRegulamento(this.codigoCampus, this.codigoProcesso, codigoRegulamento).then(dados => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Regulamento removido'});
    })
  }

  abrirArquivo(url: string) {
    window.open(url, '_blank');
  }

  subirRegulamentoPdf(event) {
    const regulamento = event.files.shift();

    this.processoService.subirRegulamentoPdf(regulamento, this.codigoCampus, this.codigoProcesso).then(() => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Regulamento salvo'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });

  }

  removerGuia(codigoGuia: number): void {
    this.processoService.removerGuia(this.codigoCampus, this.codigoProcesso, codigoGuia).then(dados => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Guia removido'});
    })
  }

  subirGuiaPdf(event) {
    const guia = event.files.shift()

    this.processoService.subirGuiaPdf(guia, this.codigoCampus, this.codigoProcesso).then(() => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Guia salva'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });

  }

  removerAnexo(codigoAnexo: number): void {
    this.processoService.removerAnexo(this.codigoCampus, this.codigoProcesso, codigoAnexo).then(dados => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Anexo removido'});
    })
  }

  subirAnexoPdf(event) {
    const anexo = event.files.shift()

    this.processoService.subirAnexoPdf(anexo, this.codigoCampus, this.codigoProcesso).then(() => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Anexo salvo'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });

  }

}
