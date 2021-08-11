import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../autenticacao/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  codigoCampus: number;

  constructor(
    public authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.codigoCampus = this.authService.jwtPayload.campus_id;

  }

  hubCampus(): String {
    if (this.authService.jwtPayload.authorities?.includes('CONSULTAR_CAMPUS')) {
      return "/campus/pesquisa/";
    }
    else {
      return "/notificacoes/listar/" + this.authService.jwtPayload.usuario_id;
    }
  }


}
