import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/autenticacao/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { FaqOutput, FaqPerguntaInput, FaqRespostaInput, ProcessoOutputBuscar } from 'src/app/core/model';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-processo-pesquisa',
  templateUrl: './processo-pesquisa.component.html',
  styleUrls: ['./processo-pesquisa.component.css']
})
export class ProcessoPesquisaComponent implements OnInit {

  processo = new ProcessoOutputBuscar();

  codigoCampus: number;
  codigoProcesso: number;

  respondendoCodigoFaq: number;
  respostaFaq = new FaqRespostaInput();

  modalPergunta: boolean;
  perguntaFaq = new FaqPerguntaInput();

  descricaoAnexo: string;
  descricaoRegulamento: string;
  descricaoGuia: string;

  constructor(
    private processoService: ProcessoService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.codigoCampus = this.route.snapshot.params.codigoCampus;
    this.codigoProcesso = this.route.snapshot.params.codigoProcesso;

    this.buscar();
  }

  buscar(): void {
    this.processoService.buscar(this.codigoCampus, this.codigoProcesso).then(dados => {
      this.processo = dados;
    });
  }

  removerRegulamento(codigoRegulamento: number): void {
    this.processoService.removerRegulamento(this.codigoCampus, this.codigoProcesso, codigoRegulamento).then(dados => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Regulamento removido'});
    })
  }

  abrirArquivo(url: string) {
    window.open(url, '_blank');
  }

  subirRegulamentoPdf(event): void {
    const regulamento = event.files.shift();

    this.processoService.subirRegulamentoPdf(regulamento, this.descricaoRegulamento, this.codigoCampus, this.codigoProcesso).then(() => {
      this.renovarRegulamento();
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Regulamento salvo'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });

  }

  removerGuia(codigoGuia: number): void {
    this.processoService.removerGuia(this.codigoCampus, this.codigoProcesso, codigoGuia).then(dados => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Guia removido'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });
  }

  subirGuiaPdf(event): void {
    const guia = event.files.shift()

    this.processoService.subirGuiaPdf(guia, this.descricaoGuia, this.codigoCampus, this.codigoProcesso).then(() => {
      this.renovarGuia();
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Guia salva'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });

  }

  removerAnexo(codigoAnexo: number): void {
    this.processoService.removerAnexo(this.codigoCampus, this.codigoProcesso, codigoAnexo).then(dados => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Anexo removido'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });
  }

  subirAnexoPdf(event): void {
    const anexo = event.files.shift()

    this.processoService.subirAnexoPdf(anexo, this.descricaoAnexo, this.codigoCampus, this.codigoProcesso).then(() => {
      this.renovarAnexo();
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Anexo salvo'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });

  }

  ativarFaq(codigoFaq: number): void {
    this.processoService.ativarFaq(this.codigoCampus, this.codigoProcesso, codigoFaq).then(() => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Faq ativo'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });
  }

  inativarFaq(codigoFaq: number): void {
    this.processoService.inativarFaq(this.codigoCampus, this.codigoProcesso, codigoFaq).then(() => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Faq inativado'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });
  }

  removerFaq(codigoFaq: number): void {
    this.processoService.removerFaq(this.codigoCampus, this.codigoProcesso, codigoFaq).then(() => {
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Faq removido'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });
  }

  responder(): void {
    this.processoService.responder(this.codigoCampus, this.codigoProcesso, this.respondendoCodigoFaq, this.respostaFaq).then(() => {
      this.renovarRespondendoFaq();
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Faq respondido'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });
  }

  perguntar(): void {
    this.processoService.perguntar(this.codigoCampus, this.codigoProcesso, this.perguntaFaq).then(() => {
      this.renovarPerguntaFaq();
      this.buscar();
      this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Pergunta realizada com sucesso'});
    }).catch(e => {
      this.errorHandlerService.handle(e);
    });
  }

  selecionarFaq(faq: FaqOutput) {
    this.respondendoCodigoFaq = faq.id;
    this.respostaFaq.resposta = faq.resposta;
  }

  isRespondendoFaq(codigoFaq: number): boolean {
    return this.respondendoCodigoFaq === codigoFaq;
  }

  renovarRespondendoFaq(): void {
    this.respostaFaq = new FaqRespostaInput();
    this.respondendoCodigoFaq = undefined;
  }

  renovarPerguntaFaq(): void {
    this.perguntaFaq = new FaqPerguntaInput();
    this.modalPergunta = false;
  }

  renovarAnexo(): void {
    this.descricaoAnexo = undefined;
  }

  renovarRegulamento(): void {
    this.descricaoRegulamento = undefined;
  }

  renovarGuia(): void {
    this.descricaoGuia = undefined;
  }

  abrirModalPergunta(): void {
    this.modalPergunta = true;
  }

}
