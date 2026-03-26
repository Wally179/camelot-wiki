import { Atributo } from "@/types";

interface AttributeTableProps {
  atributos: Atributo[];
}

export default function AttributeTable({ atributos }: AttributeTableProps) {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl text-amber-600 font-bold uppercase tracking-widest">
          Passo 02: Atributos (22 Pontos)
        </h2>
        <div className="flex-1 h-[1px] bg-amber-900/30" />
      </div>

      <p className="text-gray-400">
        Diferente de outros sistemas, aqui você "compra" sua força. Todos começam
        com <strong>10</strong> em tudo. Você tem <strong>22 pontos</strong>. Quanto
        maior o valor, mais caro fica o próximo ponto.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-amber-900/20 p-6 bg-amber-950/5">
        {atributos.map((atrib) => (
          <div key={atrib.nome} className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-amber-500">{atrib.nome}</h3>
            <p className="text-xs text-gray-500 leading-normal">{atrib.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-black/60 p-6 border-t-2 border-amber-600">
        <h4 className="text-amber-500 font-bold mb-4 uppercase text-sm tracking-widest text-center">
          Tabela de Preços (Custo Acumulado)
        </h4>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 text-center font-mono text-sm">
          {[
            { v: "11:", c: "1pt" },
            { v: "12:", c: "2pt" },
            { v: "13:", c: "3pt" },
            { v: "14:", c: "4pt" },
            { v: "15:", c: "6pt" },
            { v: "16:", c: "8pt" },
            { v: "17:", c: "11pt" },
            { v: "18:", c: "14pt" },
          ].map((item, idx) => (
            <div key={idx} className="border border-amber-900/30 p-2">
              {item.v} <span className="text-amber-500">{item.c}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10px] text-gray-600 uppercase text-center italic tracking-widest">
          DICA: Foque 18 no seu atributo principal. Inteligência dá mais
          perícias.
        </p>
      </div>
    </section>
  );
}
