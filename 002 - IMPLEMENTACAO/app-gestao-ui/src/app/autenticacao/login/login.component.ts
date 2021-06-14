import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from '../auth.service';
import { ViewEncapsulation} from '@angular/core';
import { EmailRecoverPassword } from 'src/app/core/model';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modalEsqueceuSenha: boolean;

  emailRecoverPassword = new EmailRecoverPassword();

  constructor(
    public authService: AuthService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
  }

  login(email: string, senha: string): void {
    this.authService.autenticar(email, senha).then(() => {

    }).catch(erro => this.errorHandlerService.handle(erro));
  }

  enviarSenha(): void {
    this.authService.enviarSenha(this.emailRecoverPassword).then(() => {
      this.modalEsqueceuSenha = false;
    }).catch(erro => this.errorHandlerService.handle(erro));
  }

  abrirModalEsqueceuSenha(): void {
    this.modalEsqueceuSenha = true;
  }

}
