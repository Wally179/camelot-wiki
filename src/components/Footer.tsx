export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-amber-900/10 pt-16 pb-12 bg-gradient-to-b from-transparent via-[#060606] to-black">
      <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-6 mb-6 opacity-40">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-900" />
          <span className="text-amber-700 font-serif italic text-xs tracking-[0.5em] uppercase">
            Væ Victis
          </span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-900" />
        </div>

        <p className="text-gray-600 font-serif text-[10px] uppercase tracking-[0.3em] text-center leading-loose">
          Camelot Wiki &bull; Registro Criptografado da Nova Távola <br />
          <span className="text-gray-800">
            Desenvolvido nas sombras por Wallace
          </span>
        </p>
      </div>
    </footer>
  );
}
