import { CasaRegra } from "@/types";

interface HouseTraitGridProps {
  casas: CasaRegra[];
}

export default function HouseTraitGrid({ casas }: HouseTraitGridProps) {
  return (
    <section className="space-y-10">
      <h2 className="text-3xl text-amber-600 font-bold uppercase tracking-widest">
        Passo 03: Escolha sua Herança
      </h2>
      <p className="text-gray-400 italic leading-relaxed">
        Cada Casa concede um benefício passivo que representa seu treinamento ou
        genética. Escolha com sabedoria, pois isso define sua utilidade no
        grupo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {casas.map((casa) => (
          <div
            key={casa.id}
            className="group relative p-6 border border-amber-900/20 bg-[#08080a] hover:border-amber-500 transition-all flex flex-col overflow-hidden"
          >
            {/* WATERMARK DO EMBLEMA DA CASA NO FUNDO DO CARD */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
              <div 
                className="absolute -right-8 -bottom-8 w-48 h-48 bg-contain bg-center bg-no-repeat opacity-[0.4] lg:opacity-[0.04] group-hover:opacity-[0.4] transition-all duration-700 transform group-hover:scale-110 grayscale-0 lg:grayscale group-hover:grayscale-0 drop-shadow-2xl"
                style={{ backgroundImage: `url('/img/emblemas/${casa.id}SF.png')` }} 
              />
            </div>

            <div className="relative z-10 flex flex-col h-full bg-gradient-to-tr from-[#050505]/95 via-[#050505]/60 lg:via-transparent to-transparent -m-6 p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-100 group-hover:text-amber-400">
                  {casa.nome}
                </h3>
                <span className="text-[10px] bg-amber-900/20 text-amber-600 px-2 py-1 rounded border border-amber-900/30">
                  HABILIDADE
                </span>
              </div>
              <p className="text-amber-700 font-bold text-xs uppercase mb-3 tracking-widest drop-shadow-md">
                {casa.titulo}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed font-light mt-auto">
                {casa.efeito}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
