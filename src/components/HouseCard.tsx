import Link from "next/link";
import { Casa } from "@/types";

interface HouseCardProps {
  casa: Casa;
}

export default function HouseCard({ casa }: HouseCardProps) {
  return (
    <Link
      href={`/casas/${casa.id}`}
      className="group block relative bg-[#08080a] border border-amber-900/10 rounded-sm hover:border-amber-600 active:border-amber-500 overflow-hidden transition-all duration-500 shadow-md hover:shadow-[0_0_20px_rgba(217,119,6,0.2)] hover:-translate-y-1 active:scale-[0.98]"
    >
      {/* WATERMARK DO EMBLEMA DA CASA NO FUNDO DO CARD */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">

         {/* Imagem do Brasão muito grande, cortada nas bordas e atuando como marca d'água gótica */}
         <div 
            className="absolute -right-8 -bottom-8 w-56 h-56 bg-contain bg-center bg-no-repeat opacity-[0.4] lg:opacity-[0.04] group-hover:opacity-[0.4] transition-all duration-700 transform group-hover:scale-110 grayscale-0 lg:grayscale group-hover:grayscale-0 drop-shadow-2xl"
            style={{ backgroundImage: `url('/img/emblemas/${casa.id}SF.png')` }} 
         />
      </div>

      {/* CONTEÚDO DE TEXTO - Totalmente sobreposto à marca d'água com degrader sutil */}
      <div className="p-8 text-left relative z-10 h-full flex flex-col bg-gradient-to-tr from-[#050505]/95 via-transparent to-transparent">
        
        <h3 className="text-3xl font-serif font-bold text-amber-500 mb-1 group-hover:text-amber-400 drop-shadow-xl transition-colors duration-500">
          {casa.nome}
        </h3>
        
        <p className="text-xs text-amber-700/80 uppercase tracking-widest font-bold mb-6 font-serif">
          {casa.especialidade}
        </p>
        
        <p className="text-gray-400 text-sm mb-8 flex-grow italic line-clamp-3 leading-relaxed border-l-[3px] border-amber-900/30 pl-4 group-hover:border-amber-600/50 transition-colors duration-500">
          "{casa.lema}"
        </p>

        <div className="mt-auto pt-6 border-t border-amber-900/10 text-[10px] text-gray-500 font-serif uppercase tracking-[0.2em] group-hover:text-amber-500 transition-colors duration-500 flex items-center justify-between">
          <span>Inspecionar Retiro</span>
          <span className="text-amber-700 group-hover:translate-x-2 transition-transform duration-500">→</span>
        </div>
      </div>
    </Link>
  );
}
