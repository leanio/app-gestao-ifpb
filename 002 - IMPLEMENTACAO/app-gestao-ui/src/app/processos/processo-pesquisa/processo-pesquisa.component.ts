import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  regulamento: any;

  codigoCampus: number;
  codigoProcesso: number;

  constructor(
    private processoService: ProcessoService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute
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

  abrirArquivo(url: string) {
    window.open(url, '_blank');
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.regulamento = event.target.files[0];
    }
  }

  onSubmit() {
    this.processoService.subirRegulamentoPdf(this.regulamento, this.codigoCampus, this.codigoProcesso).then(() => {
      this.buscar();
    }).catch(e => {
      this.errorHandlerService.handle(e);
    })
  }

}
