import Link from "next/link";

export default function CapitulosIndexPage() {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in pb-20">
      <div className="mb-12 border-b border-gray-800 pb-6">
        <h1 className="text-4xl font-bold text-amber-500 mb-2">
          Diário de Campanha
        </h1>
        <p className="text-gray-400 text-lg">
          Os registros oficiais da Nova Távola. O que está escrito aqui é o que
          sobreviveu ao Véu.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Capítulo 0 - Liberado */}
        <Link
          href="/capitulos/0"
          className="group bg-[#16181d] border border-gray-700 rounded-xl p-8 hover:border-amber-500 transition-all flex flex-col md:flex-row md:items-center gap-6 relative overflow-hidden"
        >
          <div className="bg-[#0f1115] w-16 h-16 rounded-lg flex items-center justify-center border border-gray-800 group-hover:border-amber-500/50 flex-shrink-0">
            <span className="text-3xl text-amber-600 font-bold">0</span>
          </div>
          <div>
            <p className="text-amber-700 text-xs font-bold uppercase tracking-widest mb-1">
              Prelúdio
            </p>
            <h2 className="text-2xl font-bold text-gray-200 group-hover:text-amber-400 transition-colors">
              O Crisol de Caer Dhu
            </h2>
            <p className="text-gray-400 mt-2 text-sm line-clamp-2">
              A infância roubada. Anos de treinamento brutal sob os olhos
              impiedosos de Scáthach e a sombra de William Wallace.
            </p>
          </div>
          <div className="md:ml-auto">
            <span className="text-amber-600 font-semibold text-sm group-hover:translate-x-2 transition-transform inline-block">
              Ler Registro →
            </span>
          </div>
        </Link>

        {/* Capítulo 1 - Bloqueado (Exemplo de UI) */}
        <div className="bg-[#0f1115] border border-gray-900 rounded-xl p-8 opacity-60 flex flex-col md:flex-row md:items-center gap-6 cursor-not-allowed">
          <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center border border-gray-800 flex-shrink-0">
            <span className="text-xl text-gray-700 font-bold">🔒</span>
          </div>
          <div>
            <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mb-1">
              Capítulo 1
            </p>
            <h2 className="text-xl font-bold text-gray-500">O Teste Final</h2>
            <p className="text-gray-600 mt-2 text-sm">
              (Acesso restrito. O evento ainda não ocorreu na linha do tempo
              atual.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
