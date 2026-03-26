import { notFound } from "next/navigation";
import Link from "next/link";
import dbJson from "@/data/camelot.json";
import { CamelotDatabase } from "@/types";
import CharacterCard from "@/components/CharacterCard";

const db = dbJson as CamelotDatabase;

import Breadcrumbs from "@/components/Breadcrumbs";
import ZoomableEmblem from "@/components/ZoomableEmblem";

export default async function CasaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const casa = db.casas.find((c) => c.id === id);

  if (!casa) notFound();

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      {/* Navegação Celta Estrutural */}
      <Breadcrumbs 
        crumbs={[
          { label: "O Conselho", href: "/casas" },
          { label: casa.nome }
        ]} 
      />

      {/* HEADER DA CASA: O Estandarte com Emblema */}
      <header className="relative border-b-2 border-amber-900/30 pb-12 mb-16 flex flex-col md:flex-row md:items-center gap-8">
        
        {/* Componente Clicável de Zoom para o Emblema */}
        <ZoomableEmblem casaId={casa.id} />

        <div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-amber-500 mb-4 drop-shadow-md">
            {casa.nome}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 italic font-serif">
            "{casa.lema}"
          </p>
          <div className="mt-4 inline-block bg-amber-950/30 border border-amber-900/40 px-4 py-1 text-amber-600 font-bold uppercase tracking-widest text-xs">
            {casa.especialidade}
          </div>
        </div>
      </header>
      <div className="max-w-3xl border-l-2 border-amber-800/40 pl-8 py-2 mb-16">
          <p className="text-gray-400 text-xl font-serif italic leading-relaxed">
            "{casa.historia}"
          </p>
        </div>

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
            <p className="text-amber-500 font-bold mt-2 font-serif italic">
              Ativos vitais: {casa.economia.produtos.join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* MEMBROS: As Cartas dos Personagens (Componentizadas) */}
      <h2 className="text-4xl font-serif font-bold text-gray-200 mb-12 flex items-center gap-4">
        Membros Notáveis
        <div className="flex-1 h-[1px] bg-gradient-to-r from-amber-900/50 to-transparent" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {casa.personagensImportantes.map((npc) => (
          <CharacterCard key={npc.id} npc={npc} casaId={casa.id} />
        ))}
      </div>
    </div>
  );
}
