export default function Footer() {
  return (
    <footer className="relative mt-20 pb-10 overflow-hidden">
      {/* Degradê que faz o site "sumir" na escuridão */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-[#08090a] to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 border-t border-amber-900/10 pt-10 flex flex-col items-center">
        <div className="flex items-center gap-6 mb-4 opacity-40">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-900" />
          <span className="text-amber-700 font-serif italic text-xs tracking-[0.5em] uppercase">
            Væ Victis
          </span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-900" />
        </div>

        <p className="text-gray-600 font-serif text-[9px] uppercase tracking-[0.3em] text-center leading-loose">
          Camelot Wiki • Registro Criptografado da Nova Távola <br />
          <span className="text-gray-800">
            Desenvolvido nas sombras por Wallace
          </span>
        </p>
      </div>
    </footer>
  );
}
