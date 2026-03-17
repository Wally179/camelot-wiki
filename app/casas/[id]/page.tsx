import { notFound } from "next/navigation";
import Link from "next/link";
import db from "../../../src/data/camelot.json";

export default async function CasaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const casa = db.casas.find((c) => c.id === id);

  if (!casa) notFound();

  return (
    <div className="max-w-7xl mx-auto animate-fade-in pb-20">
      {/* Botão Voltar Estilizado */}
      <Link
        href="/casas"
        className="group inline-flex items-center text-amber-700 hover:text-amber-400 mb-12 transition-all font-serif uppercase tracking-widest text-sm"
      >
        <span className="mr-2 transition-transform group-hover:-translate-x-2">
          ←
        </span>
        Voltar ao Conselho
      </Link>

      {/* HEADER DA CASA: O Estandarte */}
      <header className="relative border-b-2 border-amber-900/30 pb-12 mb-16">
        <div className="absolute -bottom-[2px] left-0 w-32 h-[2px] bg-amber-500 shadow-[0_0_15px_rgba(217,119,6,0.8)]" />

        <p className="text-amber-700 font-serif italic text-xl mb-2">
          {casa.especialidade}
        </p>
        <h1
          className="text-7xl font-serif font-bold text-gray-100 mb-6 tracking-tighter"
          style={{ textShadow: "2px 2px 0px #000" }}
        >
          {casa.nome}
        </h1>

        <div className="max-w-3xl border-l-2 border-amber-800/40 pl-8 py-2">
          <p className="text-gray-400 text-xl font-serif italic leading-relaxed">
            "{casa.historia}"
          </p>
        </div>
      </header>

      {/* BLOCOS DE INFO: O Relatório de Inteligência */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <div className="bg-black/40 backdrop-blur-md border border-amber-900/20 p-8 rounded-sm">
          <h3 className="text-amber-600 font-serif font-bold uppercase tracking-widest text-sm mb-4">
            Domínio e Sede
          </h3>
          <p className="text-gray-300 font-serif">
            <strong className="text-amber-800 uppercase text-xs">
              Fortaleza:
            </strong>{" "}
            {casa.base.fortaleza}
          </p>
          <p className="text-gray-300 font-serif mt-2">
            <strong className="text-amber-800 uppercase text-xs">
              Cultura:
            </strong>{" "}
            {casa.base.peculiaridadeCultural}
          </p>
        </div>

        <div className="lg:col-span-2 bg-black/40 backdrop-blur-md border border-amber-900/20 p-8 rounded-sm flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-amber-600 font-serif font-bold uppercase tracking-widest text-sm mb-4">
              Poder Militar
            </h3>
            <p className="text-gray-300 font-serif text-sm leading-relaxed">
              {casa.militar.estiloCombate}
            </p>
            <p className="text-amber-500 font-bold mt-2 font-serif tracking-tighter">
              {casa.militar.tamanhoExercito} Lâminas
            </p>
          </div>
          <div className="w-px bg-amber-900/20 hidden md:block" />
          <div className="flex-1">
            <h3 className="text-amber-600 font-serif font-bold uppercase tracking-widest text-sm mb-4">
              Economia
            </h3>
            <p className="text-gray-300 font-serif text-sm leading-relaxed">
              {casa.economia.renda}
            </p>
            <p className="text-amber-500 font-bold mt-2 font-serif italic italic">
              Ativo Vital: Cristal de Ardan
            </p>
          </div>
        </div>
      </div>

      {/* MEMBROS: As Cartas dos Personagens */}
      <h2 className="text-4xl font-serif font-bold text-gray-200 mb-12 flex items-center gap-4">
        Membros Notáveis
        <div className="flex-1 h-[1px] bg-gradient-to-r from-amber-900/50 to-transparent" />
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {casa.personagensImportantes.map((npc) => (
          <div
            key={npc.id || npc.nome}
            className="group relative bg-[#0a0b0e] border-2 border-amber-900/30 rounded-sm p-1 transition-all hover:border-amber-600"
          >
            {/* Decoração Estilo Carta */}
            <div className="border border-amber-900/20 p-6 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="text-6xl font-serif font-bold">🛡️</span>
              </div>

              <div className="mb-6 relative z-10">
                <h3 className="text-3xl font-serif font-bold text-amber-500 group-hover:text-amber-400 transition-colors">
                  {npc.nome}
                </h3>
                <p className="text-xs text-amber-800 font-bold uppercase tracking-[0.2em]">
                  {npc.titulo}
                </p>
              </div>

              <p className="text-gray-300 font-serif italic mb-6 leading-relaxed flex-grow">
                {npc.papel}
              </p>

              {/* Box de Atributos RPG (Se houver) */}
              {npc.classe && (
                <div className="mt-auto bg-black/60 border-t border-amber-900/40 -mx-6 -mb-6 p-6 grid grid-cols-2 gap-4 text-xs font-serif">
                  <div className="flex flex-col">
                    <span className="text-amber-800 uppercase font-bold tracking-tighter">
                      Classe / Raça
                    </span>
                    <span className="text-gray-400">
                      {npc.classe} • {npc.raca}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-amber-800 uppercase font-bold tracking-tighter">
                      Arma de Assinatura
                    </span>
                    <span className="text-gray-400">{npc.arma}</span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-amber-900/20 text-gray-500 italic">
                    "{npc.comportamento}"
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
