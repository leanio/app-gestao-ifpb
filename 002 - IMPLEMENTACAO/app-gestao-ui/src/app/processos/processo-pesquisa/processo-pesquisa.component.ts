import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.codigoCampus = this.route.snapshot.params.codigoCampus;
    this.codigoProcesso = this.route.snapshot.params.codigoProcesso;

    this.buscar();
  }

  buscar(): void {
    this.processoService.buscar(1, 1).then(dados => {
      this.processo = dados;
    })
  }

  abrirArquivo(url: string) {
    window.open(url, '_blank');
  }

}
