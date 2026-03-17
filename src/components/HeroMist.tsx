"use client";
import { useState } from "react";

export default function HeroMist() {
  const [mistCleared, setMistCleared] = useState(false);

  return (
    <div
      className={`relative h-[500px] mb-12 overflow-hidden flex flex-col justify-center items-center text-center cursor-crosshair transition-all duration-[2000ms] shadow-2xl rounded-sm border-amber-900/20 border`}
      onMouseEnter={() => setMistCleared(true)}
    >
      {/* IMAGEM DE FUNDO (Agora vai aparecer porque você moveu para /public) */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-[4000ms] ${
          mistCleared ? "opacity-50 scale-100" : "opacity-0 scale-110"
        }`}
        style={{ backgroundImage: "url('/camelot-bg.jpg')" }}
      />

      {/* OVERLAY DE TEXTURA E ESCURECIMENTO */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />

      {/* 🛡️ DECORAÇÃO DE RPG (Cantoneiras) */}
      <div
        className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-1000 ${mistCleared ? "opacity-100" : "opacity-0"}`}
      >
        {/* Cantos decorados com CSS puro */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-amber-700/60 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-amber-700/60 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-amber-700/60 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-amber-700/60 rounded-br-lg" />
      </div>

      {/* NÉVOA (O VÉU) */}
      <div
        className={`absolute inset-0 z-50 pointer-events-none transition-all duration-[3000ms] ${mistCleared ? "opacity-0 invisible" : "opacity-100"}`}
      >
        <div className="absolute inset-0 bg-[#0f1115]/90 backdrop-blur-2xl"></div>
        <p className="absolute inset-0 flex items-center justify-center text-amber-600/40 font-serif tracking-[0.5em] animate-pulse italic">
          ATRAVESSE O VÉU
        </p>
      </div>

      {/* CONTEÚDO REVELADO */}
      <div className="relative z-40 px-6">
        <h1
          className={`text-6xl md:text-8xl mb-4 transition-all duration-[2500ms] font-serif ${
            mistCleared
              ? "text-amber-500 opacity-100 translate-y-0"
              : "text-transparent opacity-0 translate-y-10"
          }`}
          style={{
            textShadow: "2px 2px 0px #451a03, 0 0 30px rgba(180, 83, 9, 0.4)",
          }}
        >
          Camelot
        </h1>

        <div
          className={`h-px w-64 bg-gradient-to-r from-transparent via-amber-800 to-transparent mx-auto mb-6 transition-all duration-[3000ms] delay-500 ${mistCleared ? "w-full opacity-100" : "w-0 opacity-0"}`}
        />

        <p
          className={`text-xl md:text-2xl text-gray-200 max-w-2xl font-serif italic leading-relaxed transition-all duration-[2000ms] delay-1000 ${
            mistCleared
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          "Onde o aço encontra o mito, e o Véu protege os últimos sobreviventes
          da Ordem."
        </p>
      </div>
    </div>
  );
}
