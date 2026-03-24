import HeroMist from "@/src/components/HeroMist";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in pb-20 font-serif">
      {/* O Hero com a névoa e o castelo */}
      <HeroMist />

      {/* Grid de Navegação Estilizado */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {/* Card 1: Regras (NOVO) */}
        <Link
          href="/regras"
          className="group bg-black/40 border border-amber-900/20 p-8 hover:border-amber-500 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-8xl">⚔️</span>
          </div>
          <h2 className="text-2xl font-bold text-amber-500 mb-3 uppercase tracking-tighter">
            Criar Ficha
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            O guia definitivo para os 22 pontos, escolha de Casas e o despertar
            da sua Arma de Ardan.
          </p>
        </Link>

        {/* Card 2: As 10 Casas */}
        <Link
          href="/casas"
          className="group bg-black/40 border border-amber-900/20 p-8 hover:border-amber-500 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-8xl">🛡️</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-200 mb-3 group-hover:text-amber-400 transition-colors uppercase tracking-tighter">
            As 10 Casas
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            As linhagens, exércitos e Lordes que controlam a política e o sangue
            de Camelot.
          </p>
        </Link>

        {/* Card 3: O Mundo */}
        <Link
          href="/mundo"
          className="group bg-black/40 border border-amber-900/20 p-8 hover:border-amber-500 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-8xl">🌍</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-200 mb-3 group-hover:text-amber-400 transition-colors uppercase tracking-tighter">
            O Mundo
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A geografia opressiva da ilha e os mistérios que cercam o Cristal de
            Ardan.
          </p>
        </Link>

        {/* Card 4: Capítulos */}
        <Link
          href="/capitulos"
          className="group bg-black/40 border border-amber-900/20 p-8 hover:border-amber-500 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-8xl">📜</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-200 mb-3 group-hover:text-amber-400 transition-colors uppercase tracking-tighter">
            Crônicas
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            O diário da Nova Távola. Do treinamento no Crisol até os feitos
            lendários.
          </p>
        </Link>
      </div>

      {/* Seção de Lore de Rodapé */}
      <div className="relative bg-black/60 border-l-4 border-amber-600 p-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/5 blur-[50px] pointer-events-none" />
        <h3 className="text-amber-600 font-bold text-xs mb-4 uppercase tracking-[0.3em]">
          Protocolo da Nova Távola
        </h3>
        <p className="text-gray-400 leading-relaxed font-serif italic text-lg max-w-4xl">
          "As informações contidas nesta Wiki representam o conhecimento comum e
          rumores estabelecidos no reino. Nem tudo o que está escrito é a
          verdade absoluta. Confiem nos seus instintos, desconfiem dos Lordes e
          lembrem-se: a Coroa de Wallace exige sacrifícios."
        </p>
      </div>
    </div>
  );
}
