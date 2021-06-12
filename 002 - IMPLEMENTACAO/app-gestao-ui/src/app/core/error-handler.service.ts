import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) { }

  handle(errorResponse: any) {
    let sumario = "Erro";
    let detalhe = 'Erro ao processar serviço remoto. Tente novamente!';
    
    if (typeof errorResponse === 'string') {
      detalhe = errorResponse;
    }

    if (errorResponse instanceof HttpErrorResponse) {
      try {
        if (errorResponse.error.error_description) {
          detalhe = errorResponse.error.error_description;
        }

        if (errorResponse.error.detail) {
          detalhe = errorResponse.error.detail;
        }

        if (errorResponse.error.title) {
          sumario = errorResponse.error.title;
        }

      } catch (e) {}
    }
    this.messageService.add({severity: 'error', summary: sumario, detail: detalhe});
  }

}
