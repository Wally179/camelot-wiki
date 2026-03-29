import { CasaRegra } from "@/types";

interface HouseTraitGridProps {
  casas: CasaRegra[];
}

// Attribute bonuses per house, mirrored from tormenta20.json casas array
const CASA_BONUS: Record<string, Record<string, number>> = {
  cador:      { FOR: 1, CON: 1 },
  dughall:    { CAR: 1, INT: 1 },
  morholt:    { CON: 1, DES: 1 },
  gofannon:   { FOR: 1, INT: 1 },
  macailpein: { DES: 1, SAB: 1 },
  nechtan:    { SAB: 1, CAR: 1 },
  artos:      { CON: 1, FOR: 1 },
  ogham:      { DES: 1, INT: 1 },
  llyr:       { FOR: 1, CON: 1 },
  pwyll:      { INT: 1, SAB: 1 },
};

export default function HouseTraitGrid({ casas }: HouseTraitGridProps) {
  return (
    <section className="space-y-10">
      <h2 className="text-3xl text-amber-600 font-bold uppercase tracking-widest">
        Passo 03: Escolha sua Herança
      </h2>
      <p className="text-gray-400 italic leading-relaxed">
        Cada Casa concede um benefício passivo que representa seu treinamento ou
        genética. Escolha com sabedoria, pois isso define sua utilidade no grupo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {casas.map((casa) => {
          const bonuses = CASA_BONUS[casa.id] ?? {};
          return (
            <div
              key={casa.id}
              className="group relative p-6 border border-amber-900/20 bg-[#08080a] hover:border-amber-500 transition-all flex flex-col overflow-hidden"
            >
              {/* Watermark */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
                <div
                  className="absolute -right-8 -bottom-8 w-48 h-48 bg-contain bg-center bg-no-repeat opacity-[0.4] lg:opacity-[0.04] group-hover:opacity-[0.4] transition-all duration-700 transform group-hover:scale-110 grayscale-0 lg:grayscale group-hover:grayscale-0 drop-shadow-2xl"
                  style={{ backgroundImage: `url('/img/emblemas/${casa.id}SF.png')` }}
                />
              </div>

              <div className="relative z-10 flex flex-col h-full bg-gradient-to-tr from-[#050505]/95 via-[#050505]/60 lg:via-transparent to-transparent -m-6 p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-100 group-hover:text-amber-400">
                    {casa.nome}
                  </h3>
                  <span className="text-[10px] bg-amber-900/20 text-amber-600 px-2 py-1 rounded border border-amber-900/30 flex-shrink-0 ml-2">
                    HABILIDADE
                  </span>
                </div>

                <p className="text-amber-700 font-bold text-xs uppercase mb-2 tracking-widest drop-shadow-md">
                  {casa.titulo}
                </p>

                {/* Attribute bonus pills */}
                {Object.keys(bonuses).length > 0 && (
                  <div className="flex gap-1.5 mb-3">
                    {Object.entries(bonuses).map(([attr, val]) => (
                      <span key={attr}
                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border border-amber-700/30 bg-amber-900/15 text-amber-400 rounded-sm">
                        +{val} {attr}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm text-gray-400 leading-relaxed font-light mt-auto">
                  {casa.efeito}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

