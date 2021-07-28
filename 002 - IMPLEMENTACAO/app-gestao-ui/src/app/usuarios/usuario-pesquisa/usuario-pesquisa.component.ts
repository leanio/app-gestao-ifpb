import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/autenticacao/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.css']
})
export class UsuarioPesquisaComponent implements OnInit {

  usuarios = []

  constructor(
    private usuarioService: UsuarioService,
    private errorHandlerService: ErrorHandlerService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.usuarioService.listar().then(dados => {
      this.usuarios = dados;
    }).catch(erro => this.errorHandlerService.handle(erro));
  }

}
