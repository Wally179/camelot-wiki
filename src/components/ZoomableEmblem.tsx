"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ZoomableEmblem({ casaId }: { casaId: string }) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (zoomed) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [zoomed]);

  return (
    <>
      <div 
        onClick={() => setZoomed(true)}
        className="w-32 h-32 md:w-40 md:h-40 shrink-0 border border-amber-900/40 bg-[#050505] shadow-2xl flex items-center justify-center overflow-hidden relative rounded-sm cursor-zoom-in group hover:border-amber-500 transition-colors"
      >
         <div 
           className="absolute inset-2 bg-contain bg-center bg-no-repeat opacity-90 group-hover:scale-110 transition-transform duration-500" 
           style={{ backgroundImage: `url('/img/emblemas/${casaId}.png')` }} 
         />
      </div>

      {zoomed && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setZoomed(false)}
        >
          <button className="absolute top-6 right-6 text-gray-500 hover:text-amber-500 z-50 p-2 bg-black/60 rounded border border-gray-800 transition-colors cursor-pointer">
            <X size={24} />
          </button>
          
          <img 
            src={`/img/emblemas/${casaId}.png`} 
            alt="Emblema em Alta Definição" 
            className="max-w-[90vw] max-h-[90vh] object-contain drop-shadow-[0_0_80px_rgba(217,119,6,0.4)] transition-transform duration-300 scale-100"
          />
        </div>
      )}
    </>
  );
}
