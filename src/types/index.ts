export interface CasaPersonagem {
  id: string;
  nome: string;
  titulo: string;
  papel: string;
  idade?: number;
  raca?: string;
  classe?: string;
  arma?: string;
  poderesNativos?: string;
  comportamento?: string;
}

export interface Casa {
  id: string;
  nome: string;
  especialidade: string;
  simbolo: string;
  lema: string;
  valores: string[];
  historia: string;
  base: {
    fortaleza: string;
    peculiaridadeCultural: string;
  };
  demografia: {
    populacao: number;
    taxaMortalidade: string;
    dinamicaPopulacional: string;
  };
  militar: {
    tamanhoExercito: string;
    estiloCombate: string;
  };
  economia: {
    renda: string;
    produtos: string[];
  };
  politica: {
    aliancas: string[];
    adversarios: string[];
    conflitosAtuais: string;
  };
  personagensImportantes: CasaPersonagem[];
}

export interface CamelotDatabase {
  casas: Casa[];
}

export interface CasaRegra {
  id: string;
  nome: string;
  titulo: string;
  efeito: string;
}

export interface Atributo {
  nome: string;
  desc: string;
}

export interface RegrasDatabase {
  casas: CasaRegra[];
  atributos: Atributo[];
}
