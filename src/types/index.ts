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

// Tormenta20 Calculator Types
export type AtributoKey = "FOR" | "DES" | "CON" | "INT" | "SAB" | "CAR";

export interface T20RacaSubtipo {
  id: string;
  nome: string;
  modificadores?: Partial<Record<AtributoKey, number>>;
}

export interface T20Raca {
  id: string;
  nome: string;
  flexivel?: boolean;
  qtdFlex?: number;
  flexValues?: number[]; // se presente, ex: [2, 2, -1]
  modificadores?: Partial<Record<AtributoKey, number>>;
  subtipos?: T20RacaSubtipo[];
  restricoes?: string[];
}

export interface T20Classe {
  id: string;
  nome?: string;
  tipo: "conjurador" | "hibrido" | "marcial" | "especialista";
  atributoChave: string | string[];
  pv: { nivel1: number; porNivel: number };
  pmPorNivel: number[];
}

export interface T20Casa {
  id: string;
  nome: string;
  bonus: Partial<Record<AtributoKey, number>>;
  desc: string;
}

export interface T20Database {
  racas: T20Raca[];
  classes: T20Classe[];
  casas: T20Casa[];
}

