import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { NotificacaoService } from './../notificacao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  codigoUsuario: number;

  notificacoes: [];

  constructor(
    private notificacaoService: NotificacaoService,
    private route: ActivatedRoute,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.codigoUsuario = this.route.snapshot.params.codigoUsuario;
    this.listar();
  }

  listar(): void {
    this.notificacaoService.listar(this.codigoUsuario).then(dados => {
      this.notificacoes = dados;
    }).catch(error => this.errorHandlerService.handle(error));
  }

}
