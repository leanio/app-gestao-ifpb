export class UsuarioOutput {
    nome: string;
    email: string;
    matricula: string;
    
    toModel(dados: any) {
        this.nome = dados.nome;
        this.email = dados.email;
        this.matricula = dados.matricula;
    }
}

export class UsuarioInput extends UsuarioOutput {
    senha: string;
    campus = {
        id: undefined
    }
}

export class CampusOutput {
    id: number;
    nomeCampus: string;
    nomeInstituicao: string;
    protocolo: ProtocoloOutput;
    responsavel: UsuarioOutput;

    toModel(dados: any) {
        this.nomeCampus = dados.nomeCampus;
        this.nomeInstituicao = dados.nomeInstituicao;
        this.protocolo = dados.protocolo;
        this.responsavel = dados.responsavel;
    }
}

export class CampusInput {
    nomeCampus: string;
    nomeInstituicao: string;
    protocolo = new ProtocoloOutput();
    responsavel = {
        id: undefined
    }
}

export class ProtocoloOutput {
    email: string;
    telefone: string;
}

export class ProcessoInput {
    nome: string;
}

export class ProcessoOutputListar {
    id: number;
    nome: string;
}

export class ProcessoOutputBuscar {
    id: number;
    nome: string;
    anexos: AnexoOutput[];
    faqs: FaqOutput[];
    guias: GuiaOutput[];
    regulamentos: RegulamentoOutput[];
}

export class RegulamentoOutput {
    id: number;
    documento: DocumentoOutput;
}

export class AnexoOutput {
    id: number;
    documento: DocumentoOutput;
}

export class GuiaOutput {
    id: number;
    documento: DocumentoOutput;
}

export class DocumentoOutput {
    id: number;
    contentType: string;
    nomeArquivo: string;
    url: string;
    descricao: string;
    titulo: string;
}

export class FaqOutput {
    id: number;
    ativa: boolean;
    pergunta: string;
    resposta: string;
}

export class FaqPerguntaInput {
    pergunta: string;
}

export class FaqRespostaInput {
    resposta: string;
}

export class EmailRecoverPassword {
    to: string;
}

export class ModelNovaSenha {
    novaSenha: number;
}

export class EnviarNotificacaoInput {
    message: string;
    title: string;
    token: string;
    topic: string;
}

export class EnviarNotificacaoOutput {
    message: string;
}

export class NotificacaoOutput {
    corpo: string;
    titulo: string;
}