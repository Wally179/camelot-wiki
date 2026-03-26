"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield, Map, Scroll, Sword, Home } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Início", href: "/", icon: <Home size={20} /> },
    { name: "As 10 Casas", href: "/casas", icon: <Shield size={20} /> },
    { name: "O Mundo", href: "/mundo", icon: <Map size={20} /> },
    { name: "Crônicas", href: "/capitulos", icon: <Scroll size={20} /> },
    { name: "Criar Ficha", href: "/regras", icon: <Sword size={20} /> },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-amber-600 text-black rounded-md lg:hidden shadow-lg shadow-black"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full z-40
          w-64 bg-[#0a0a0a] border-r border-amber-900/20
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 flex flex-col justify-between
          shadow-[4px_0_24px_rgba(0,0,0,0.5)]
        `}
      >
        <div className="p-8 flex flex-col h-full">
          <h2 className="text-amber-500 font-bold tracking-[0.2em] text-xl mb-10 border-b border-amber-900/30 pb-4 font-serif">
            CAMELOT{" "}
            <span className="text-[10px] block text-gray-500 font-sans tracking-normal uppercase mt-1">
              Registro Oficial
            </span>
          </h2>

          <nav className="space-y-2 flex-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || (pathname?.startsWith(item.href) && item.href !== "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-4 px-4 py-3 transition-all group border-l-2
                    ${
                      isActive
                        ? "bg-amber-900/40 text-amber-500 border-amber-500 font-bold"
                        : "text-gray-400 border-transparent hover:text-amber-400 hover:bg-amber-950/20 hover:border-amber-700"
                    }
                  `}
                >
                  <span
                    className={`transition-transform duration-300 ${
                      isActive ? "scale-110 drop-shadow-[0_0_8px_rgba(217,119,6,0.8)]" : "group-hover:scale-110"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="font-serif uppercase text-sm tracking-widest">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* RODAPÉ DA SIDEBAR com toque Celta/Camelot */}
        <div className="pt-6 pb-6 border-t border-amber-900/10 bg-[#060606] text-center relative overflow-hidden">
           {/* Fundo sutil de textura verde escuro (Ogham) */}
           <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,30,20,0.2)] to-transparent pointer-events-none" />
           <span className="relative z-10 text-[9px] text-amber-700/60 uppercase tracking-widest font-serif italic">
            Pela Honra de Wallace
          </span>
        </div>
      </aside>
    </>
  );
}
