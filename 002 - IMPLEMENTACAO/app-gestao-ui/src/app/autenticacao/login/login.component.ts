import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from '../auth.service';
import { ViewEncapsulation} from '@angular/core';
import { EmailRecoverPassword, ModelNovaSenha } from 'src/app/core/model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/usuarios/usuario.service';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modalEsqueceuSenha: boolean;

  emailRecoverPassword = new EmailRecoverPassword();

  codigoRecuperadaoSenha: number;
  codigoUsuario: number;

  supostoCodigoRecuperacaoSenha: number;

  novaSenha: number;

  modelNovaSenha = new ModelNovaSenha();

  constructor(
    public authService: AuthService,
    private usuarioService: UsuarioService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router,
    private messageService: MessageService
  ) { 
    this.verificarAutenticacao(); 
  }

  ngOnInit(): void {
  }

  login(email: string, senha: string): void {
    this.authService.autenticar(email, senha).then(() => {
      this.verificarAutenticacao();
    }).catch(erro => this.errorHandlerService.handle(erro));
  }

  enviarCodigoRecuperacaoSenha(): void {
    this.authService.enviarCodigoRecuperacaoSenha(this.emailRecoverPassword).then(dados => {
      this.codigoUsuario = dados.usuarioId;
      this.codigoRecuperadaoSenha = dados.code;
    }).catch(erro => this.errorHandlerService.handle(erro));
  }

  abrirModalEsqueceuSenha(): void {
    this.modalEsqueceuSenha = true;
  }

  navegarParaHome(): void {
    this.router.navigateByUrl('/home');
  }

  verificarAutenticacao(): void {
    if (this.authService.isAutenticado()) {
      this.navegarParaHome();
    }
  }

  supostoCodigoRecuperacaoSenhaConfere(): boolean {
    return this.codigoRecuperadaoSenha && this.supostoCodigoRecuperacaoSenha && this.codigoRecuperadaoSenha == this.supostoCodigoRecuperacaoSenha;
  }

  salvarNovaSenha(): void {
    this.modelNovaSenha.novaSenha = this.novaSenha;
    this.usuarioService.atualizarSenha(this.codigoUsuario, this.modelNovaSenha).then(() => {
      this.modalEsqueceuSenha = false;
      this.renovarFormularioRecuperacaoSenha();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Senha alterada'});
    }).catch(erro => this.errorHandlerService.handle(erro));
  }

  renovarFormularioRecuperacaoSenha(): void {
    this.emailRecoverPassword = new EmailRecoverPassword();
    this.codigoRecuperadaoSenha = undefined;
    this.codigoUsuario = undefined;
    this.supostoCodigoRecuperacaoSenha = undefined;
    this.novaSenha = undefined;
  }

}