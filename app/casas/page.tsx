import Link from "next/link";
import db from "../../src/data/camelot.json";

export default function CasasPage() {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in pb-20">
      {/* Cabeçalho da Página */}
      <div className="mb-12 border-b border-amber-900/20 pb-8">
        <h1
          className="text-5xl font-serif font-bold text-amber-500 mb-4"
          style={{ textShadow: "0 0 20px rgba(217,119,6,0.3)" }}
        >
          As 10 Grandes Casas
        </h1>
        <p className="text-gray-400 text-xl font-serif italic max-w-3xl leading-relaxed">
          "Escolha a sua lealdade com sabedoria. O Véu de Bruma não perdoa os
          fracos, e o sangue dita a lei em Camelot."
        </p>
      </div>

      {/* Grid de Cards Estilizados */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {db.casas.map((casa) => (
          <Link href={`/casas/${casa.id}`} key={casa.id} className="group">
            <div className="relative bg-black/40 backdrop-blur-md border border-amber-900/20 rounded-sm p-8 h-full flex flex-col transition-all duration-500 group-hover:border-amber-600/50 group-hover:bg-amber-950/10 group-hover:-translate-y-2 shadow-xl">
              {/* Detalhe de "Metal" nos cantos do Card */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-900/30 group-hover:border-amber-500 transition-colors" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-900/30 group-hover:border-amber-500 transition-colors" />

              {/* Título e Especialidade */}
              <div className="mb-6">
                <h2 className="text-3xl font-serif font-bold text-gray-200 group-hover:text-amber-400 transition-colors duration-300">
                  {casa.nome}
                </h2>
                <div className="h-[2px] w-12 bg-amber-800/40 my-2 group-hover:w-full transition-all duration-700" />
                <p className="text-xs text-amber-700 font-bold tracking-[0.2em] uppercase italic">
                  {casa.especialidade}
                </p>
              </div>

              {/* História resumida com Line Clamp */}
              <p className="text-gray-400 font-serif leading-relaxed flex-grow line-clamp-4 mb-8 group-hover:text-gray-200 transition-colors">
                {casa.historia}
              </p>

              {/* Rodapé do Card: Lema com Estilo de Selo */}
              <div className="mt-auto pt-6 border-t border-amber-900/10 text-center">
                <p className="text-sm text-amber-600/60 font-serif italic group-hover:text-amber-500 transition-colors">
                  "{casa.lema}"
                </p>
              </div>

              {/* Brilho de "Ardan" no fundo do card ao passar o mouse */}
              <div className="absolute inset-0 bg-radial-gradient from-amber-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
