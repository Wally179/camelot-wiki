"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Shield, Map, Scroll, Sword, Home } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Início", href: "/", icon: <Home size={20} /> },
    { name: "As 10 Casas", href: "/casas", icon: <Shield size={20} /> },
    { name: "O Mundo", href: "/mundo", icon: <Map size={20} /> },
    { name: "Crônicas", href: "/capitulos", icon: <Scroll size={20} /> },
    { name: "Criar Ficha", href: "/regras", icon: <Sword size={20} /> },
  ];

  return (
    <>
      {/* BOTÃO MOBILE - Fica no topo direito para não cobrir títulos */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-amber-600 text-black rounded-md lg:hidden shadow-lg shadow-black"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* OVERLAY MOBILE */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR ESTRUTURA */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-40
          w-64 bg-[#0a0a0a] border-r border-amber-900/20
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="p-8 flex flex-col h-full">
          <h2 className="text-amber-500 font-bold tracking-[0.2em] text-xl mb-10 border-b border-amber-900/30 pb-4">
            CAMELOT{" "}
            <span className="text-[10px] block text-gray-500 font-sans tracking-normal">
              WIKI OFICIAL
            </span>
          </h2>

          <nav className="space-y-2 flex-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-amber-500 hover:bg-amber-950/10 transition-all group border-l-2 border-transparent hover:border-amber-600"
              >
                <span className="group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="font-serif uppercase text-sm tracking-widest">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* RODAPÉ DA SIDEBAR */}
          <div className="pt-6 border-t border-amber-900/10 bg-black/20 text-[10px] text-gray-600 uppercase tracking-widest italic">
            Pela Honra de Wallace
          </div>
        </div>
      </aside>
    </>
  );
}
