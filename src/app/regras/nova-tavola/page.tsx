import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import NovaTavolaPowersVault from "@/components/regras/NovaTavolaPowersVault";

export const metadata: Metadata = {
  title: "Nova Távola | Camelot Wiki",
  description:
    "Distinção de prestígio Tormenta20: admissão em Caer Dhu e mecânica de poderes da Nova Távola.",
};

export default function NovaTavolaPage() {
  return (
    <div className="w-full max-w-full md:max-w-4xl lg:max-w-5xl mx-auto space-y-12 py-6 md:py-12 animate-fade-in font-serif text-gray-300 overflow-x-hidden">
      <Breadcrumbs
        crumbs={[
          { label: "Criar Ficha", href: "/regras" },
          { label: "Nova Távola" },
        ]}
      />

      <header className="text-center border-b border-amber-900/30 pb-10">
        <p className="text-[10px] uppercase tracking-[0.35em] text-amber-700 font-bold mb-3">
          Tormenta20 · Distinção
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-3">Nova Távola</h1>
        <p className="text-lg text-amber-500/90 font-semibold tracking-wide">
          A Distinção: A Nova Távola
        </p>
      </header>

      <section className="relative p-8 bg-black/30 border border-amber-900/20">
        <div className="absolute -top-4 left-6 bg-amber-900 px-4 py-1 text-xs font-bold uppercase tracking-widest text-black">
          Conceito
        </div>
        <h2 className="text-2xl font-bold text-amber-600 mb-4">O que é esta Distinção</h2>
        <p className="leading-relaxed text-gray-400">
          No sistema de Tormenta20, a Distinção representa um caminho único que o personagem trilha,
          não consumindo níveis de classe, mas permitindo que ele compre poderes exclusivos ao subir de
          nível, representando o seu treinamento especial.
        </p>
        <p className="leading-relaxed text-gray-400 mt-4">
          A Nova Távola não é um grupo que qualquer aventureiro pode pedir para entrar. Vocês foram
          moldados desde a infância na Fortaleza Negra (Caer Dhu), submetidos aos testes físicos e
          psicológicos implacáveis de Scáthach e à visão tática fria de William Wallace.
        </p>
      </section>

      <section className="bg-amber-900/5 border border-amber-900/20 p-8 rounded-sm">
        <h2 className="text-2xl font-bold text-amber-500 mb-4 uppercase tracking-tighter">
          Admissão
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Ter sido recrutado (ou levado) na infância para Caer Dhu. Sobreviver aos &quot;Invernos de
          Sangue&quot; sob a tutela de Scáthach (a Mãe Sombria) e ser pessoalmente ungido pelo Rei
          Arqueiro para portar uma Arma de Ardanita. Você deve possuir pelo menos nível 3 de
          personagem.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-100 border-l-4 border-amber-600 pl-4">
          Como e Quando Pegar os Poderes
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Você não ganha poderes de Distinção &quot;de graça&quot; ou em níveis pré-determinados. Em
          Tormenta20, a Distinção oferece uma nova lista de poderes que o personagem pode escolher.
        </p>

        <div className="grid gap-6 md:grid-cols-1">
          <div className="p-6 bg-black/40 border border-amber-900/20">
            <h3 className="font-bold text-amber-500 mb-2">Mecânica padrão</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sempre que o seu personagem subir de nível e ganhar a habilidade &quot;Poder de
              Classe&quot; (o que acontece em quase todos os níveis pares, ou em todos os níveis
              dependendo da classe), ele pode optar por abrir mão de pegar um poder da sua classe
              original para escolher um Poder da Distinção, desde que cumpra os pré-requisitos daquele
              poder.
            </p>
          </div>
          <div className="p-6 bg-black/40 border border-amber-900/20">
            <h3 className="font-bold text-amber-500 mb-2">Quantidade</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Não há um limite máximo. Um jogador pode pegar apenas 1 poder da Nova Távola e focar o
              resto na sua classe, ou pode pegar todos eles ao longo da campanha, sacrificando a
              progressão das habilidades da sua classe base em prol do treinamento militar de Caer
              Dhu.
            </p>
          </div>
          <div className="p-6 bg-black/40 border border-amber-900/20">
            <h3 className="font-bold text-amber-500 mb-2">Nível mínimo</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Como a admissão exige ser nível 3, o primeiro poder da Distinção geralmente é pego no
              Nível 4 ou superior.
            </p>
          </div>
        </div>
      </section>

      <NovaTavolaPowersVault />
    </div>
  );
}
