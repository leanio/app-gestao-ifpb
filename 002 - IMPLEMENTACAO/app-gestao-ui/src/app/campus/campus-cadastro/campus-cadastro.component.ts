import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  codigoCampus: number;

  constructor(
    private campusService: CampusService,
    private usuarioService: UsuarioService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  salvar(form: NgForm) {
    if (this.isEditando()) {
      this.atualizar();
    } else {
      this.adicionar();
    }
  }

  ngOnInit(): void {
    this.carregarUsuarios();

    this.codigoCampus = this.route.snapshot.params.codigo;

    if(this.codigoCampus) {
      this.carregarCampus();
    }
  }

  adicionar(): void {
    this.campusService.adicionar(this.campus).then(() => {
      this.router.navigateByUrl('/usuarios/pesquisa');
    }).catch(error => this.errorHandlerService.handle(error));
  }

  atualizar(): void {
    this.campusService.atualizar(this.codigoCampus, this.campus).then(() => {
      this.router.navigateByUrl('/usuarios/pesquisa');
    }).catch(error => this.errorHandlerService.handle(error));
  }

  carregarCampus(): void {
    this.campusService.buscar(this.codigoCampus).then(dados => {
      this.campus = dados;
    }).catch(error => this.errorHandlerService.handle(error));
  }

  carregarUsuarios(): void {
    this.usuarioService.listar().then(dados => {
      this.listaUsuarios = dados;
    }).catch(error => this.errorHandlerService.handle(error));
  }

  isEditando() {
    return this.codigoCampus !== undefined;
  }

}
