import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { CampusInput, UsuarioOutput } from 'src/app/core/model';
import { UsuarioService } from 'src/app/usuarios/usuario.service';
import { CampusService } from '../campus.service';

@Component({
  selector: 'app-campus-cadastro',
  templateUrl: './campus-cadastro.component.html',
  styleUrls: ['./campus-cadastro.component.css']
})
export class CampusCadastroComponent implements OnInit {
  
  campus = new CampusInput();

  listaUsuarios: any;

  constructor(
    private campusService: CampusService,
    private usuarioService: UsuarioService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  adicionar(): void {
    this.campusService.adicionar(this.campus).then(() => {
      this.router.navigateByUrl('/usuarios/pesquisa');
    }).catch(error => this.errorHandlerService.handle(error));
  }

  carregarUsuarios() {
    this.usuarioService.listar().then(dados => {
      this.listaUsuarios = dados;
    }).catch(error => this.errorHandlerService.handle(error));
  }

}
