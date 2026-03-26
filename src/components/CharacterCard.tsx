"use client";
import { useState, useEffect } from "react";
import { CasaPersonagem } from "@/types";
import { X, Sword } from "lucide-react";

interface CharacterCardProps {
  npc: CasaPersonagem;
  casaId: string;
}

export default function CharacterCard({ npc, casaId }: CharacterCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isModalOpen]);

  return (
    <>
      {/* O CARD DE RETRATO MÍNIMO */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="group relative bg-[#060606] cursor-pointer border border-amber-900/20 rounded-sm transition-all duration-500 hover:border-amber-500 shadow-xl overflow-hidden flex flex-col"
      >
        {/* WATERMARK DO EMBLEMA DA CASA NO FUNDO DO CARD DO NPC */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
           <div 
              className="absolute -right-8 -bottom-8 w-56 h-56 bg-contain bg-center bg-no-repeat opacity-[0.04] group-hover:opacity-[0.2] transition-all duration-700 transform group-hover:scale-110 grayscale group-hover:grayscale-0 drop-shadow-2xl"
              style={{ backgroundImage: `url('/img/emblemas/${casaId}SF.png')` }} 
           />
        </div>

        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-900/40 group-hover:border-amber-500 transition-colors z-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-900/40 group-hover:border-amber-500 transition-colors z-10 pointer-events-none" />
        
        {/* Overlay que dá gradiente ao fundo para permitir a leitura perfeita */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/60 to-transparent pointer-events-none z-10" />

        <div className="p-8 relative z-20 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-200 group-hover:text-amber-400 transition-colors drop-shadow-md">
                {npc.nome}
              </h3>
              <p className="text-[10px] text-amber-700 font-bold uppercase tracking-[0.3em] mt-2">
                {npc.titulo}
              </p>
            </div>
            {npc.classe && (
               <div className="p-2 bg-black border border-amber-900/30 rounded shadow-md group-hover:border-amber-600/50 transition-colors text-amber-600">
                  <Sword size={18} />
               </div>
            )}
          </div>
          
          <p className="text-gray-400 font-sans text-sm leading-relaxed flex-grow italic line-clamp-3">
            "{npc.papel}"
          </p>

          <div className="mt-8 text-center text-[9px] uppercase tracking-widest text-amber-900 group-hover:text-amber-600 transition-colors">
            — Inspecionar Personagem —
          </div>
        </div>
      </div>

      {/* MODAL ENXUTO E COM FOTO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex justify-center items-center p-4 md:p-8 animate-fade-in">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer" 
            onClick={() => setIsModalOpen(false)} 
          />

          <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-amber-900/40 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-20 flex flex-col md:flex-row rounded-sm overflow-hidden">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-amber-500 z-50 p-2 bg-black/60 rounded border border-gray-800 transition-colors"
            >
              <X size={20} />
            </button>

            {/* FOTO DO PERSONAGEM (ESQUERDA) */}
            <div className="w-full md:w-2/5 h-64 md:h-auto min-h-[400px] bg-[#050505] border-b md:border-b-0 md:border-r border-amber-900/30 relative flex flex-col items-center justify-center overflow-hidden">
               
               <img 
                 src={`/img/personagens/${npc.id}.jpg`}
                 alt={`Retrato de ${npc.nome}`}
                 className={`absolute inset-0 w-full h-full object-cover opacity-80 ${imgFailed ? 'hidden' : 'block'}`}
                 onError={() => setImgFailed(true)}
               />
               
               {/* Fallback caso a imagem não exista */}
               {imgFailed && (
                 <div className="relative z-10 text-center px-4 opacity-20 pointer-events-none mix-blend-screen">
                    <span className="block text-6xl mb-4">👤</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-serif border-t border-gray-800 pt-2 block">Retrato Pendente</span>
                 </div>
               )}
            </div>

            {/* DADOS DO PERSONAGEM (DIREITA) */}
            <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col max-h-[85vh] overflow-y-auto">
               <h2 className="text-4xl font-serif font-bold text-amber-500 mb-1 drop-shadow-md">
                 {npc.nome}
               </h2>
               <div className="text-amber-700 font-bold uppercase tracking-[0.2em] mb-6 text-xs border-b border-amber-900/20 pb-4 inline-block">
                 {npc.titulo}
               </div>

               <p className="text-gray-300 font-sans text-sm leading-relaxed italic border-l-2 border-amber-800/40 pl-4 mb-8">
                 "{npc.papel}"
               </p>

               {/* Atributos Básicos Comprimidos */}
               {npc.classe ? (
                 <div className="grid grid-cols-2 gap-4 mb-8 bg-black/50 p-4 border border-amber-900/10 rounded-sm">
                   <div>
                     <span className="block text-[9px] text-amber-700 uppercase tracking-widest mb-1">Classe / Raça</span>
                     <span className="text-gray-200 font-serif text-sm">{npc.classe} &bull; {npc.raca}</span>
                   </div>
                   {npc.arma && (
                     <div>
                       <span className="block text-[9px] text-amber-700 uppercase tracking-widest mb-1">Arma</span>
                       <span className="text-amber-500 font-serif text-sm">{npc.arma}</span>
                     </div>
                   )}
                 </div>
               ) : (
                 <div className="mb-8 p-3 border border-gray-800 text-xs text-gray-500 text-center uppercase tracking-widest bg-black/20">
                   Dados Confidenciais
                 </div>
               )}

               {npc.poderesNativos && (
                 <div className="mb-6">
                   <h4 className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-2">Dádiva / Poder</h4>
                   <p className="text-gray-400 text-sm font-sans leading-relaxed">{npc.poderesNativos}</p>
                 </div>
               )}

               {npc.comportamento && (
                 <div>
                   <h4 className="text-[10px] font-bold text-amber-600 uppercase tracking-[0.2em] mb-2">Perfil Base</h4>
                   <p className="text-gray-400 text-sm font-sans leading-relaxed text-justify">{npc.comportamento}</p>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
