import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
  }

  login(email: string, senha: string) {
    this.authService.autenticar(email, senha).then(() => {
      
    }).catch(erro => this.errorHandlerService.handle(erro));
  }

  teste() {
    this.authService.teste();
  }

}
