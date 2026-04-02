import Link from "next/link";
import dataJson from "@/data/regras.json";
import { RegrasDatabase } from "@/types";
import RegrasHero from "@/components/regras/RegrasHero";
import AttributeTable from "@/components/regras/AttributeTable";
import HouseTraitGrid from "@/components/regras/HouseTraitGrid";
import CharacterCalculator from "@/components/regras/CharacterCalculator";

const data = dataJson as RegrasDatabase;

export default function RegrasPage() {
  return (
    <div className="w-full max-w-full md:max-w-4xl lg:max-w-5xl mx-auto space-y-12 py-6 md:py-12 animate-fade-in font-serif text-gray-300 overflow-x-hidden">
      <RegrasHero />

      {/* PASSO 1: CONCEITO */}
      <section className="relative p-8 bg-black/30 border border-amber-900/20">
        <div className="absolute -top-4 left-6 bg-amber-900 px-4 py-1 text-xs font-bold uppercase tracking-widest text-black">
          Passo 01: O Conceito
        </div>
        <h2 className="text-3xl font-bold text-amber-600 mb-4">
          Quem é você na Távola?
        </h2>
        <p className="mb-6">
          Antes de olhar os números, você precisa de uma base. Mande no privado
          do <strong>Wallace</strong>:
        </p>
        <ul className="space-y-4 text-sm bg-black/40 p-6 border border-amber-900/10">
          <li>
            <span className="text-amber-500 font-bold">● NOME E CASA:</span> Sua
            Casa define sua herança (veja o Passo 3).
          </li>
          <li>
            <span className="text-amber-500 font-bold">● RAÇA E CLASSE:</span>{" "}
            Você é um Guerreiro Humano padrão ou um Inventor de Gofannon focado
            em tecnologia de Ardan?
          </li>
          <li>
            <span className="text-amber-500 font-bold">
              ● CONCEITO DA ARMA:
            </span>{" "}
            Descreva o "efeito visual". Ex: "Minha espada solta uma fumaça negra
            que cega os inimigos". O mestre vai transformar isso em regra de T20
            para você.
          </li>
        </ul>
      </section>

      {/* ANATOMIA DO PERSONAGEM */}
      <section className="bg-amber-900/5 border border-amber-900/20 p-8 rounded-sm">
        <h2 className="text-2xl font-bold text-amber-500 mb-4 uppercase tracking-tighter">
          A Estrutura do Herói
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          Em Camelot, seu personagem é a soma de três pilares. Escolher um não
          anula o outro:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border-l-2 border-amber-700 bg-black/20">
            <h4 className="font-bold text-gray-100">1. Raça</h4>
            <p className="text-xs text-gray-500 mt-2">
              Sua biologia. Dá bônus fixos nos atributos e habilidades passivas
              (ex: Visão no Escuro, Resistências).
            </p>
          </div>
          <div className="p-4 border-l-2 border-amber-700 bg-black/20">
            <h4 className="font-bold text-gray-100">2. Classe</h4>
            <p className="text-xs text-gray-500 mt-2">
              Sua profissão e estilo de luta. Define seus PVs, PMs e os poderes
              que você ganha a cada nível.
            </p>
          </div>
          <div className="p-4 border-l-2 border-amber-700 bg-black/20">
            <h4 className="font-bold text-gray-100">3. A Nova Távola</h4>
            <p className="text-xs text-gray-500 mt-2 text-amber-600/80 italic font-bold">
              A Distinção de Prestígio. É um título que concede a Arma de Ardan
              e os direitos políticos de Camelot sem ocupar o lugar da sua
              classe.
            </p>
          </div>
        </div>
      </section>

      <AttributeTable atributos={data.atributos} />

      {/* PASSO 2: CALCULADORA DE ATRIBUTOS */}
      <section className="border border-amber-900/20 bg-black/20 rounded-sm px-8 py-6 flex flex-wrap items-center justify-between gap-6">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-amber-700 font-bold mb-1">Passo 02</div>
          <h2 className="text-2xl font-bold text-amber-500 font-serif">Distribua seus Atributos</h2>
          <p className="text-sm text-gray-500 mt-1.5 max-w-md">
            Use <strong className="text-amber-500">22 pontos</strong> para distribuir entre os 6 atributos. Cada atributo começa em 10 — baixar abaixo de 10 (mín. 8) devolve pontos.
            Bônus de raça e classe são aplicados depois.
          </p>
        </div>
        <CharacterCalculator />
      </section>

      <HouseTraitGrid casas={data.casas} />

      {/* PASSO 03: PODERES DA DISTINÇÃO */}
      <section className="relative p-8 md:p-10 bg-black/30 border border-amber-900/20 rounded-sm">
        <div className="absolute -top-4 left-6 bg-amber-900 px-4 py-1 text-xs font-bold uppercase tracking-widest text-black">
          Passo 03: Poderes da Distinção
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-amber-600 mb-4 pr-2">
          A Nova Távola e os seus poderes
        </h2>
        <p className="text-gray-400 leading-relaxed mb-2 max-w-3xl">
          Além dos poderes da sua classe, quem pertence à Nova Távola pode escolher{" "}
          <strong className="text-gray-300">poderes de Distinção</strong> ao subir de nível: em
          geral, quando ganharia um <strong className="text-gray-300">Poder de Classe</strong>, você
          pode abrir mão dele para pegar um poder da lista da Distinção — se cumprir admissão e
          pré-requisitos (nível, perícias, outros poderes, etc.).
        </p>
        <p className="text-sm text-gray-500 mb-8 max-w-3xl">
          Não há limite máximo de quantos poderes da Distinção você pode ter ao longo da campanha; o
          primeiro costuma entrar a partir do nível 4. Admissão em Caer Dhu e a mecânica estão na
          página dedicada; a lista pública de poderes só aparece quando o mestre liberar no site.
        </p>
        <Link
          href="/regras/nova-tavola"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-amber-600 text-black text-sm font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-black/40 hover:bg-amber-500 hover:shadow-amber-900/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          Abrir guia da Nova Távola
        </Link>
      </section>

      {/* PASSO 4: A ARMA E O MANA */}
      <section className="border-2 border-red-900/20 p-10 bg-red-950/5 rounded-sm">
        <h2 className="text-3xl text-red-600 font-bold uppercase mb-6">
          Passo 04: A Arma de Ardan & Mana
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-amber-500 font-bold uppercase text-sm">
              Como funciona o PM (Pontos de Mana):
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Em Tormenta 20, <strong>Mana é seu fôlego</strong>. Guerreiros usam para
              ataques especiais, Magos para feitiços e você usa para ativar sua
              Arma de Ardan. Se seus PMs chegarem a 0, você é um civil comum.{" "}
              <strong>Gerencie este recurso com sua vida.</strong>
            </p>
            <div className="space-y-2 border-l-2 border-amber-900 pl-4">
              <p className="text-xs">
                <strong className="text-amber-600 tracking-widest uppercase">
                  Nível 3 (Agora):
                </strong>{" "}
                Você já tem o "Despertar". Custo: 1 a 2 PM.
              </p>
              <p className="text-xs text-gray-600 italic">
                Ex: "Gaste 1 PM para sua espada brilhar e dar +1d6 de dano".
              </p>
            </div>
          </div>

          <div className="p-6 bg-black/60 border border-red-900/40">
            <h4 className="text-red-600 font-bold uppercase text-xs mb-4">
              O Perigo da Sobrecarga
            </h4>
            <p className="text-sm text-gray-400 mb-4 italic">
              "O Cristal de Ardan não é uma ferramenta estável. Ele é uma fera
              enjaulada no seu aço."
            </p>
            <p className="text-xs text-red-400 bg-red-900/10 p-4 border border-red-900/20">
              Se você tirar um <strong>1 Natural</strong> em um teste usando sua
              arma, o poder falha violentamente. Você recebe dano direto igual a
              metade do custo de PM da habilidade (Ardan corrompendo sua carne).
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST FINAL */}
      <section className="pt-10 text-center">
        <h2 className="text-2xl text-amber-500 font-bold mb-6 italic tracking-widest">
          Checklist de Conclusão
        </h2>
        <div className="flex flex-wrap justify-center gap-8 text-[10px] text-gray-500 uppercase tracking-widest">
          <span>[ ] Nível Inicial: 3</span>
          <span>[ ] 22 Pontos Gastos</span>
          <span>[ ] Escolheu Casa</span>
          <span>[ ] 2 Poderes de Classe Escolhidos</span>
          <span>[ ] Mandou pro Wallace</span>
        </div>
      </section>
    </div>
  );
}
