"use client";

import { useCallback, useEffect, useState, type ComponentType } from "react";

const STORAGE_KEY = "camelot-nova-tavola-nivel";

function MistOverlay({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-sm"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d12]/95 via-[#1a1f28]/88 to-[#0a0d12]/95" />
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 40%, rgba(148, 163, 184, 0.25) 0%, transparent 55%),
            radial-gradient(ellipse 60% 40% at 30% 70%, rgba(71, 85, 105, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 50% 35% at 75% 65%, rgba(100, 116, 139, 0.18) 0%, transparent 45%)`,
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[2px] md:backdrop-blur-md" />
      <div
        className="absolute inset-0 opacity-[0.14] animate-pulse"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-slate-400/10 to-transparent blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
    </div>
  );
}

export default function NovaTavolaPowersVault() {
  const [level, setLevel] = useState(3);
  const [hydrated, setHydrated] = useState(false);
  const [PowersList, setPowersList] = useState<ComponentType | null>(null);
  const [loadError, setLoadError] = useState(false);

  const unlocked = level >= 4;

  useEffect(() => {
    setHydrated(true);
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw !== null) {
        const n = parseInt(raw, 10);
        if (!Number.isNaN(n) && n >= 1 && n <= 20) setLevel(n);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const persistLevel = useCallback((n: number) => {
    try {
      sessionStorage.setItem(STORAGE_KEY, String(n));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    persistLevel(level);
  }, [hydrated, level, persistLevel]);

  useEffect(() => {
    if (!unlocked) {
      setPowersList(null);
      setLoadError(false);
      return;
    }
    let cancelled = false;
    setLoadError(false);
    import("./nova-tavola-powers-list")
      .then((mod) => {
        if (!cancelled) setPowersList(() => mod.NovaTavolaPowersList);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [unlocked]);

  const List = PowersList;

  return (
    <section className="space-y-6">
      <div className="border-b border-amber-900/30 pb-6">
        <h2 className="text-3xl font-bold text-gray-100 mb-2">Lista de Poderes da Distinção</h2>
        <p className="text-gray-500 text-sm">
          Ao subir de nível, caso atenda aos pré-requisitos, você pode escolher um dos poderes no
          lugar de um poder de classe. O treinamento completo permanece velado até o marco de
          progressão adequado.
        </p>
      </div>

      <div className="relative rounded-sm border border-amber-900/25 bg-black/20 min-h-[280px] md:min-h-[320px]">
        <MistOverlay active={!unlocked || !List} />

        <div className="relative z-30 p-6 md:p-8">
          <div className="max-w-md mx-auto text-center space-y-4">
            <label htmlFor="nova-tavola-nivel" className="block text-[11px] uppercase tracking-widest text-amber-700 font-bold">
              Nível do personagem
            </label>
            <input
              id="nova-tavola-nivel"
              type="range"
              min={1}
              max={20}
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none bg-amber-950/80 accent-amber-600 cursor-pointer"
            />
            <p className="text-2xl font-bold text-amber-500 tabular-nums">{level}</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              {unlocked ? (
                <span className="text-amber-600/90">A névoa se abre — a lista é carregada neste dispositivo.</span>
              ) : (
                <>
                  Suba o nível para <strong className="text-gray-400">4 ou mais</strong> para dissipar o véu sobre os
                  poderes (marco típico do primeiro Poder de Distinção).
                </>
              )}
            </p>
          </div>
        </div>

        {loadError && unlocked && (
          <div className="relative z-30 px-6 pb-6 text-center text-sm text-red-400">
            Não foi possível carregar a lista. Atualize a página e tente de novo.
          </div>
        )}

        {unlocked && List && (
          <div className="relative z-10 px-6 pb-8 md:px-8 pt-2">
            <List />
          </div>
        )}
      </div>
    </section>
  );
}
