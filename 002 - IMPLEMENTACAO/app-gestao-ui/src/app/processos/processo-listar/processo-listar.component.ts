import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/autenticacao/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ProcessoOutputListar } from 'src/app/core/model';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-processo-listar',
  templateUrl: './processo-listar.component.html',
  styleUrls: ['./processo-listar.component.css']
})
export class ProcessoListarComponent implements OnInit {

  processos: ProcessoOutputListar[];
  codigoCampus: number;

  constructor(
    private processoService: ProcessoService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.codigoCampus = this.route.snapshot.params.codigoCampus;
    this.listar();
  }

  listar(): void {
    this.processoService.listar(this.codigoCampus).then(dados => {
      this.processos = dados;
    }).catch(error => this.errorHandlerService.handle(error));
  }

  novoProcesso(): void {
    this.router.navigateByUrl('/processos/cadastro/'+this.codigoCampus);
  }

}
