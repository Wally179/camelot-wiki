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
            className="group p-6 border border-amber-900/20 bg-black/40 hover:border-amber-500 transition-all flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-amber-400">
                {casa.nome}
              </h3>
              <span className="text-[10px] bg-amber-900/20 text-amber-600 px-2 py-1 rounded">
                HABILIDADE ATIVA
              </span>
            </div>
            <p className="text-amber-700 font-bold text-xs uppercase mb-3 tracking-widest">
              {casa.titulo}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-light mt-auto">
              {casa.efeito}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
