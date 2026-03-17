import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0a0b0e] h-screen fixed top-0 left-0 flex flex-col z-50 shadow-[5px_0_15px_rgba(0,0,0,0.5)]">
      {/* Detalhe de Borda de Metal na Direita */}
      <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-amber-900/40 to-transparent" />

      {/* Título Estilizado */}
      <div className="p-8 mb-4 border-b border-amber-900/20">
        <h2
          className="text-3xl font-serif font-bold text-amber-600 tracking-tighter uppercase"
          style={{ textShadow: "1px 1px 0px #000" }}
        >
          Camelot
        </h2>
        <div className="h-[1px] w-12 bg-amber-800/50 mt-1" />
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2 font-bold">
          Wiki Oficial
        </p>
      </div>

      {/* Navegação com Efeito de "Inscrição" */}
      <nav className="flex flex-col px-4 gap-2">
        {[
          { name: "Início", href: "/" },
          { name: "O Mundo", href: "/mundo" },
          { name: "As 10 Casas", href: "/casas" },
          { name: "Diário de Campanha", href: "/capitulos" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group relative px-4 py-3 text-gray-400 hover:text-amber-500 transition-all font-serif italic text-lg border border-transparent hover:border-amber-900/30 hover:bg-amber-950/10 rounded-sm"
          >
            {/* Indicador de Seleção Celta */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-amber-700 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-1" />
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Rodapé "Grimório" */}
      <div className="mt-auto p-6 border-t border-amber-900/20 bg-black/20 text-center">
        <p className="text-[10px] text-amber-900 font-bold uppercase tracking-widest leading-tight">
          Protegido pelo <br /> Véu de Bruma
        </p>
      </div>
    </aside>
  );
}
