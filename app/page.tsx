import HeroMist from "@/src/components/HeroMist";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in pb-20">
      <HeroMist />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Link
          href="/casas"
          className="group bg-[#1a1c23] border border-gray-800 rounded-xl p-8 hover:border-amber-600 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-9xl">🛡️</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-200 mb-3 group-hover:text-amber-400 transition-colors">
            As 10 Casas
          </h2>
          <p className="text-gray-400 text-sm">
            Conheça as linhagens, os exércitos e os Lordes que controlam a
            política, a economia e a magia de Camelot.
          </p>
        </Link>

        {/* Card 2: O Mundo */}
        <Link
          href="/mundo"
          className="group bg-[#1a1c23] border border-gray-800 rounded-xl p-8 hover:border-amber-600 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-9xl">🌍</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-200 mb-3 group-hover:text-amber-400 transition-colors">
            O Mundo
          </h2>
          <p className="text-gray-400 text-sm">
            Explore a geografia opressiva da ilha, o império do Cristal de Ardan
            e a misteriosa fronteira de Inis Fae.
          </p>
        </Link>

        {/* Card 3: Capítulos */}
        <Link
          href="/capitulos"
          className="group bg-[#1a1c23] border border-gray-800 rounded-xl p-8 hover:border-amber-600 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-9xl">📜</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-200 mb-3 group-hover:text-amber-400 transition-colors">
            Diário de Campanha
          </h2>
          <p className="text-gray-400 text-sm">
            Reviva os acontecimentos da Nova Távola. Do treinamento infernal no
            Crisol até o Teste Final.
          </p>
        </Link>
      </div>

      {/* Seção de Regras ou Avisos (Pode ser editada depois) */}
      <div className="bg-[#0f1115] border-l-4 border-amber-600 p-8 rounded-r-lg">
        <h3 className="text-amber-500 font-bold text-lg mb-2 uppercase tracking-widest">
          Aviso aos Jogadores
        </h3>
        <p className="text-gray-300 leading-relaxed">
          As informações contidas nesta Wiki representam o conhecimento comum e
          rumores estabelecidos no reino. Nem tudo o que está escrito é a
          verdade absoluta. Confiem nos seus instintos, desconfiem dos Lordes e
          lembrem-se: a Coroa de Wallace exige sacrifícios.
        </p>
      </div>
    </div>
  );
}
