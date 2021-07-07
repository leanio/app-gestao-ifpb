import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ProcessoInput } from 'src/app/core/model';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-processo-cadastro',
  templateUrl: './processo-cadastro.component.html',
  styleUrls: ['./processo-cadastro.component.css']
})
export class ProcessoCadastroComponent implements OnInit {

  processo = new ProcessoInput();

  codigoCampus: number;

  constructor(
    private processoService: ProcessoService,
    private route: ActivatedRoute,
    private router: Router,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.codigoCampus = this.route.snapshot.params.codigoCampus;
  }

  adicionar(): void {
    this.processoService.adicionar(this.codigoCampus, this.processo).then(dados => {
      this.router.navigateByUrl(`processos/pesquisa/${this.codigoCampus}/${dados.id}`);
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Processo salvo'});
    }).catch(error => this.errorHandlerService.handle(error));
  }

}
