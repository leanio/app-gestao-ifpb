import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/autenticacao/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { EnviarNotificacaoInput, UsuarioOutput } from 'src/app/core/model';
import { NotificacaoService } from 'src/app/notificacao/notificacao.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.css']
})
export class UsuarioPesquisaComponent implements OnInit {

  usuarios = []

  usuarioNotificacao = new UsuarioOutput();
  notificacao = new EnviarNotificacaoInput();
  modalNotificacao: boolean;
  codigoCampus: number;

  constructor(
    private usuarioService: UsuarioService,
    private notificacaoService: NotificacaoService,
    private messageService: MessageService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.codigoCampus = this.route.snapshot.params.codigoCampus;
    if(this.codigoCampus){
      this.listarUsuariosPorCampus();
    }else{
      this.listarUsuarios();
    }
  }

  listarUsuarios(): void {
    this.usuarioService.listar().then(dados => {
      this.usuarios = dados;
    }).catch(erro => this.errorHandlerService.handle(erro));
  }

  listarUsuariosPorCampus(): void {
    this.usuarioService.listarPorCampus(this.codigoCampus).then(dados => {
      this.usuarios = dados;
    }).catch(erro => this.errorHandlerService.handle(erro));
  }

  enviarNotificacao(): void {
    this.notificacaoService.notificar(this.notificacao).then(() => {
      this.modalNotificacao = false;
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Notificação enviada'});
    }).catch(e => this.errorHandlerService. handle(e));
  }

  selecionarUsuarioParaNotificar(usuario: any): void {
    this.renovarNotificacao();
    this.renovarUsuarioNotificacao();
    this.usuarioNotificacao = usuario;
    this.notificacao.token = usuario.tokenFirebase;
    this.modalNotificacao = true;
  }

  renovarNotificacao(): void {
    this.notificacao = new EnviarNotificacaoInput();
  }

  renovarUsuarioNotificacao(): void {
    this.usuarioNotificacao = new UsuarioOutput();
  }

}
