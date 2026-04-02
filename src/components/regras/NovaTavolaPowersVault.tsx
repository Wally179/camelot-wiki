"use client";

import { useCallback, useEffect, useState, type ComponentType } from "react";
import {
  NOVA_TAVOLA_NIVEL_MAXIMO,
  REVEAL_NOVA_TAVOLA_POWERS,
} from "@/config/campaign";

const STORAGE_KEY = "camelot-nova-tavola-nivel";

function clampLevel(n: number, max: number): number {
  if (Number.isNaN(n) || n < 1) return 1;
  if (n > max) return max;
  return Math.floor(n);
}

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
  const nivelMax = NOVA_TAVOLA_NIVEL_MAXIMO;
  const [level, setLevel] = useState(1);
  const [hydrated, setHydrated] = useState(false);
  const [PowersList, setPowersList] = useState<ComponentType | null>(null);
  const [loadError, setLoadError] = useState(false);

  const reveal = REVEAL_NOVA_TAVOLA_POWERS;

  useEffect(() => {
    setHydrated(true);
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw !== null) {
        const n = parseInt(raw, 10);
        setLevel(clampLevel(n, nivelMax));
      }
    } catch {
      /* ignore */
    }
  }, [nivelMax]);

  const persistLevel = useCallback(
    (n: number) => {
      try {
        sessionStorage.setItem(STORAGE_KEY, String(n));
      } catch {
        /* ignore */
      }
    },
    []
  );

  useEffect(() => {
    if (!hydrated) return;
    persistLevel(level);
  }, [hydrated, level, persistLevel]);

  useEffect(() => {
    if (!reveal) {
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
  }, [reveal]);

  const List = PowersList;
  const showMist = !reveal || (reveal && !List);

  return (
    <section className="space-y-6">
      <div className="border-b border-amber-900/30 pb-6">
        <h2 className="text-3xl font-bold text-gray-100 mb-2">
          Lista de Poderes da Distinção
        </h2>
        <p className="text-gray-500 text-sm">
          {reveal ? (
            <>
              Ao subir de nível, caso atenda aos pré-requisitos, você pode
              escolher um dos poderes no lugar de um poder de classe.
            </>
          ) : (
            <>
              A lista detalhada dos poderes permanece indisponível neste
              registro público até liberação do mestre de campanha.
            </>
          )}
        </p>
      </div>

      <div className="rounded-sm border border-amber-900/25 bg-black/20 overflow-hidden">
        <div className="relative z-40 border-b border-amber-900/20 bg-black/40 px-6 py-5">
          <label
            htmlFor="nova-tavola-nivel"
            className="block text-[11px] uppercase tracking-widest text-amber-700 font-bold mb-3"
          >
            Nível do personagem (limite no site)
          </label>
          <input
            id="nova-tavola-nivel"
            type="range"
            min={1}
            max={nivelMax}
            step={1}
            value={level}
            onChange={(e) => setLevel(clampLevel(Number(e.target.value), nivelMax))}
            className="w-full h-2 rounded-full appearance-none bg-amber-950/80 accent-amber-600 cursor-pointer"
          />
          <div className="mt-2 flex items-baseline justify-between gap-4 text-sm text-gray-500">
            <span>
              Nível <strong className="text-amber-500 tabular-nums text-lg">{level}</strong>
              <span className="text-gray-600"> / {nivelMax}</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-amber-900/70">
              não é possível ultrapassar {nivelMax} aqui
            </span>
          </div>
        </div>

        <div className="relative min-h-[240px] md:min-h-[280px]">
          <MistOverlay active={showMist} />

          {!reveal && (
            <div className="relative z-30 flex min-h-[240px] md:min-h-[280px] items-center justify-center px-6 py-12">
              <p className="max-w-md text-center text-sm leading-relaxed text-amber-800/90 md:text-amber-700/80">
                O véu não se dissipa.
              </p>
            </div>
          )}

          {reveal && !List && !loadError && (
            <div className="relative z-30 flex min-h-[200px] items-center justify-center px-6">
              <p className="text-xs uppercase tracking-widest text-amber-900/50">
                Carregando lista…
              </p>
            </div>
          )}

          {reveal && loadError && (
            <div className="relative z-30 px-6 pb-6 pt-8 text-center text-sm text-red-400">
              Não foi possível carregar a lista. Atualize a página e tente de
              novo.
            </div>
          )}

          {reveal && List && (
            <div className="relative z-10 max-h-[min(70vh,52rem)] overflow-y-auto px-6 pb-8 md:px-8 pt-6">
              <List />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
