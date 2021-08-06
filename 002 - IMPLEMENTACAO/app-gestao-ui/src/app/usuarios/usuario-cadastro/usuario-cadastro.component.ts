import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/autenticacao/auth.service';
import { CampusService } from 'src/app/campus/campus.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { CampusOutput, UsuarioInput } from 'src/app/core/model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  usuario = new UsuarioInput();
  codigoUsuario: number;

  listaCampus: any;

  constructor(
    private usuarioService: UsuarioService,
    private campusService: CampusService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService

  ) { }

  ngOnInit(): void {
    this.codigoUsuario = this.route.snapshot.params.codigo;

    if(this.codigoUsuario) {
      this.carregarUsuario(this.codigoUsuario)
    }

    this.carregarListaCampus();
  }

  salvar(form: NgForm) {
    if (this.isEditando()) {
      this.atualizar();
    } else {
      this.adicionar();
    }
  }

  carregarUsuario(codigoUsuario: number) {
    this.usuarioService.buscar(codigoUsuario).then(dados => {
      this.usuario.toModel(dados);
    }).catch(error => this.errorHandlerService.handle(error));
  }

  carregarListaCampus() {
    this.campusService.listar().then(dados => {
      this.listaCampus = dados.map(d => {
        return {label: d.nomeCampus + ' - ' + d.nomeInstituicao, value: d.id}
      })
    }).catch(error => this.errorHandlerService.handle(error));
  }

  adicionar() {
    this.usuarioService.adicionar(this.usuario).then(dados => {
      if (this.authService.isAutenticado()) {
        this.router.navigateByUrl('/usuarios/pesquisa');
      } else {
        this.router.navigateByUrl('/login');
      }

      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário cadastrado'});
    }).catch(error => this.errorHandlerService.handle(error));
  }

  atualizar() {
    this.usuarioService.atualizar(this.codigoUsuario, this.usuario).then(dados => {
      this.router.navigateByUrl('/usuarios/pesquisa');
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário atualizado'});
    }).catch(error => this.errorHandlerService.handle(error));
  }

  isEditando() {
    return this.codigoUsuario !== undefined;
  }

}
