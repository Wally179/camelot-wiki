"use client";
import { useState, useMemo, useEffect } from "react";
import { X, Dices } from "lucide-react";
import t20Json from "@/data/tormenta20.json";
import { T20Database, T20Raca, T20Classe, T20RacaSubtipo, T20Casa, AtributoKey } from "@/types";

const db = t20Json as unknown as T20Database;

const CLASSE_NOMES: Record<string, string> = {
  arcanista:"Arcanista", barbaro:"Bárbaro", bardo:"Bardo", bucaneiro:"Bucaneiro",
  cacador:"Caçador", cavaleiro:"Cavaleiro", clerigo:"Clérigo", druida:"Druida",
  guerreiro:"Guerreiro", inventor:"Inventor", ladino:"Ladino", lutador:"Lutador",
  nobre:"Nobre", paladino:"Paladino",
};
const TIPO_LABEL: Record<string, string> = {
  conjurador:"Conj.", hibrido:"Híb.", marcial:"Marc.", especialista:"Esp.",
};
const ATRIBUTOS: AtributoKey[] = ["FOR","DES","CON","INT","SAB","CAR"];
const COST: Record<number,number> = { 8:-2,9:-1,10:0,11:1,12:2,13:3,14:5,15:7,16:10,17:13,18:16 };
const MIN_S=8, MAX_S=18, POOL=22, DEFAULT_NIVEL=3;

const classNome = (c:T20Classe) => c.nome ?? CLASSE_NOMES[c.id] ?? c.id;
const calcMod = (v:number) => Math.floor((v-10)/2);
const modStr = (m:number) => m>=0?`+${m}`:`${m}`;
const costOf = (s:number) => COST[s]??0;
const totalSpent = (scores:Record<AtributoKey,number>) => ATRIBUTOS.reduce((a,k)=>a+costOf(scores[k]),0);
const calcPV = (c:T20Classe,cm:number,n:number) => c.pv.nivel1+(n-1)*c.pv.porNivel+cm*n;
const calcPM = (c:T20Classe,n:number) => c.pmPorNivel[n-1]??c.pmPorNivel.at(-1)!;
const keyLabel = (c:T20Classe) => Array.isArray(c.atributoChave)?c.atributoChave.join("/"):c.atributoChave;
const primaryKey = (c:T20Classe) => Array.isArray(c.atributoChave)?c.atributoChave[0]:c.atributoChave;

// Clean, properly sized select
function Sel({label,val,onChange,children,warn}:{label:string;val:string;onChange:(s:string)=>void;children:React.ReactNode;warn?:boolean}){
  return(
    <div className="flex flex-col">
      <label className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-1">{label}</label>
      <select value={val} onChange={e=>onChange(e.target.value)}
        className={`bg-[#0b0b0d] border text-sm px-3 py-2 rounded-sm focus:outline-none transition-colors w-full sm:min-w-[160px]
          ${warn?"border-amber-700/40 text-amber-300":"border-white/10 text-gray-300 focus:border-amber-600/50"}`}>
        {children}
      </select>
    </div>
  );
}

export default function CharacterCalculator() {
  const [open, setOpen] = useState(false);
  const [racaId, setRacaId] = useState("");
  const [subId, setSubId] = useState("");
  const [clsId, setClsId] = useState("");
  const [casaId, setCasaId] = useState("");
  const [nivel, setNivel] = useState(DEFAULT_NIVEL);
  const [scores, setScores] = useState<Record<AtributoKey,number>>({FOR:10,DES:10,CON:10,INT:10,SAB:10,CAR:10});
  const [flex, setFlex] = useState<AtributoKey[]>([]);

  useEffect(()=>{
    document.body.style.overflow=open?"hidden":"";
    return()=>{document.body.style.overflow="";};
  },[open]);

  const raca=db.racas.find(r=>r.id===racaId) as T20Raca|undefined;
  const cls=db.classes.find(c=>c.id===clsId) as T20Classe|undefined;
  const sub=raca?.subtipos?.find(s=>s.id===subId) as T20RacaSubtipo|undefined;
  const casa=db.casas.find(c=>c.id===casaId) as T20Casa|undefined;

  const allMods=useMemo(()=>{
    const r:Partial<Record<AtributoKey,number>>={};
    const m=(src?:Partial<Record<AtributoKey,number>>)=>{
      if(!src)return;
      for(const[k,v]of Object.entries(src))r[k as AtributoKey]=(r[k as AtributoKey]??0)+(v??0);
    };
    m(raca?.modificadores); m(sub?.modificadores);
    flex.forEach(a=>{r[a]=(r[a]??0)+1;});
    m(casa?.bonus);
    return r;
  },[raca,sub,flex,casa]);

  const rem = POOL-totalSpent(scores);

  function chg(attr:AtributoKey,d:number){
    const n=scores[attr]+d;
    if(n<MIN_S||n>MAX_S)return;
    if(costOf(n)-costOf(scores[attr])>rem)return;
    setScores(p=>({...p,[attr]:n}));
  }
  function togFlex(a:AtributoKey){
    if(raca?.restricoes?.includes(a))return;
    const lim=raca?.qtdFlex??3;
    setFlex(p=>p.includes(a)?p.filter(x=>x!==a):p.length>=lim?p:[...p,a]);
  }
  function chgRaca(id:string){setRacaId(id);setSubId("");setFlex([]);}

  const fin=useMemo(()=>
    Object.fromEntries(ATRIBUTOS.map(a=>[a,scores[a]+(allMods[a]??0)])) as Record<AtributoKey,number>
  ,[scores,allMods]);

  const conMod=calcMod(fin.CON), desMod=calcMod(fin.DES);
  const pk=cls?primaryKey(cls):null;
  const keyMod=pk?calcMod(fin[pk as AtributoKey]??10):0;
  const isCaster=cls&&["conjurador","hibrido"].includes(cls.tipo);

  const remColor=rem<0?"text-red-400":rem===0?"text-green-400":rem<=5?"text-amber-300":"text-gray-200";

  const classesByTipo=useMemo(()=>{
    const g:Record<string,T20Classe[]>={};
    db.classes.forEach(c=>{if(!g[c.tipo])g[c.tipo]=[];g[c.tipo].push(c);});
    return g;
  },[]);

  return (
    <>
      {/* TRIGGER */}
      <button onClick={()=>setOpen(true)}
        className="group inline-flex items-center gap-3 px-6 py-4 border border-amber-900/30 bg-[#09090b] shadow-xl
          hover:border-amber-600/50 hover:bg-amber-950/20 active:scale-[0.98]
          transition-all duration-200 rounded-sm">
        <Dices size={20} className="text-amber-600 group-hover:text-amber-400 flex-shrink-0"/>
        <div className="text-left">
          <span className="block text-sm font-bold text-amber-500 uppercase tracking-widest font-serif leading-none mb-1">Abrir Calculadora</span>
          <span className="block text-xs text-gray-500">Montagem de Ficha Compacta</span>
        </div>
      </button>

      {/* MODAL */}
      {open&&(
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={e=>{if(e.target===e.currentTarget)setOpen(false);}}>

          <div className="relative bg-[#08080a] border border-white/10 rounded-sm shadow-2xl flex flex-col overflow-hidden max-w-full w-full sm:w-max sm:min-w-[480px] max-h-[90vh]">

            {/* ── HEADER ── */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0b0b0d] flex-shrink-0">
              <div className="flex items-center gap-2">
                <Dices size={16} className="text-amber-600"/>
                <span className="text-xs sm:text-sm text-amber-500 font-bold uppercase tracking-widest">Montagem de Ficha</span>
              </div>
              <div className="flex items-center gap-4">
                <div className={`px-3 py-1 border rounded-sm flex items-baseline gap-1 ${rem<0?"border-red-900/40 bg-red-950/20":"border-white/10"}`}>
                  <span className={`font-bold font-sans text-xl ${remColor}`}>{rem}</span>
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">pts</span>
                </div>
                <button onClick={()=>setOpen(false)} className="text-gray-500 hover:text-amber-400 transition-colors p-1 bg-white/5 rounded-sm hover:bg-white/10">
                  <X size={18}/>
                </button>
              </div>
            </div>

            {/* ── SCROLLABLE ── */}
            <div className="overflow-y-auto flex-1 p-5 space-y-6">

              {/* SELECTS: 2-col layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Sel label="Raça" val={racaId} onChange={chgRaca}>
                  <option value="">— Raça —</option>
                  {db.racas.map(r=><option key={r.id} value={r.id}>{r.nome}</option>)}
                </Sel>
                <Sel label="Classe" val={clsId} onChange={setClsId}>
                  <option value="">— Classe —</option>
                  {Object.entries(classesByTipo).map(([tipo,cls])=>(
                    <optgroup key={tipo} label={TIPO_LABEL[tipo]??tipo}>
                      {cls.map(c=><option key={c.id} value={c.id}>{classNome(c)}</option>)}
                    </optgroup>
                  ))}
                </Sel>
                {raca?.subtipos&&raca.subtipos.length>0&&(
                  <Sel label="Subtipo" val={subId} onChange={setSubId} warn>
                    <option value="">— Subtipo —</option>
                    {raca.subtipos.map(s=><option key={s.id} value={s.id}>{s.nome}</option>)}
                  </Sel>
                )}
                <Sel label="Casa" val={casaId} onChange={setCasaId}>
                  <option value="">— Casa Livre —</option>
                  {db.casas.map(c=><option key={c.id} value={c.id}>{c.nome}</option>)}
                </Sel>
              </div>

              {/* FLEX BONUS */}
              {raca?.flexivel&&(
                <div className="border border-white/5 bg-black/40 px-4 py-3 rounded-sm">
                  <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest mb-2">
                    Distribuir {raca.qtdFlex} Pontos Livres ({flex.length}/{raca.qtdFlex})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ATRIBUTOS.map(a=>{
                      const locked=raca.restricoes?.includes(a);
                      return(
                        <button key={a} onClick={()=>togFlex(a)} disabled={locked}
                          className={`text-xs px-3 py-1 border rounded-sm transition-all font-bold active:scale-95
                            ${locked?"border-gray-800 text-gray-800 cursor-not-allowed":
                              flex.includes(a)?"border-amber-600 bg-amber-900/40 text-amber-400":
                              "border-white/10 text-gray-400 hover:border-amber-700/60"}`}>{a}</button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CLASS + CASA INFO BOXES */}
              {(cls||casa)&&(
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cls ? (
                    <div className="border border-white/10 bg-black/40 p-4 rounded-sm space-y-1.5 text-gray-500 text-xs">
                      <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">{classNome(cls)}</p>
                      <p><strong className="text-gray-400">Tipo:</strong> {TIPO_LABEL[cls.tipo]}</p>
                      <p><strong className="text-gray-400">Chave:</strong> <span className="text-amber-500 font-bold">{keyLabel(cls)}</span></p>
                      <p><strong className="text-gray-400">PV/nível:</strong> {cls.pv.nivel1} + {cls.pv.porNivel}</p>
                      <p><strong className="text-gray-400">PM (Nív. {nivel}):</strong> <span className="text-blue-400 font-bold">{calcPM(cls,nivel)}</span></p>
                    </div>
                  ) : <div/>}

                  {casa ? (
                    <div className="border border-amber-900/40 bg-amber-950/20 p-4 rounded-sm space-y-1.5 text-gray-500 text-xs">
                      <p className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2">{casa.nome}</p>
                      <p className="leading-relaxed">{casa.desc}</p>
                      <p className="text-amber-500 font-bold mt-2">
                        Bônus: {Object.entries(casa.bonus).map(([k,v])=>`${k} ${v!>0?"+":""}${v}`).join(", ")}
                      </p>
                    </div>
                  ) : <div/>}
                </div>
              )}

              {/* NÍVEL + 4 STATS */}
              <div className="border border-white/10 bg-black/20 rounded-sm p-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-widest text-amber-700 font-bold">Nível do Personagem</span>
                  <div className="flex items-center gap-2 ml-auto">
                    <button onClick={()=>setNivel(n=>Math.max(1,n-1))}
                      className="w-7 h-7 flex items-center justify-center border border-white/10 text-amber-500 hover:bg-amber-900/20 rounded-sm text-lg font-bold transition-all active:scale-95">−</button>
                    <span className="text-xl font-bold font-sans text-gray-100 w-8 text-center">{nivel}</span>
                    <button onClick={()=>setNivel(n=>Math.min(20,n+1))}
                      className="w-7 h-7 flex items-center justify-center border border-white/10 text-amber-500 hover:bg-amber-900/20 rounded-sm text-lg font-bold transition-all active:scale-95">+</button>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    {l:"PV Max",  v:cls?calcPV(cls,conMod,nivel):"—", c:"text-red-400"},
                    {l:"PM Max",  v:cls?calcPM(cls,nivel):"—",         c:"text-blue-400"},
                    {l:"Defesa", v:10+desMod,                          c:"text-amber-400"},
                    {l:isCaster?"CD Magia":"Iniciativa", c:"text-purple-400",
                      v:isCaster?(10+nivel+keyMod):modStr(desMod)},
                  ].map(({l,v,c})=>(
                    <div key={l} className="border border-white/5 bg-[#0a0a0c] py-3 rounded-sm text-center">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-600">{l}</p>
                      <p className={`font-bold font-sans text-xl mt-1 leading-none ${c}`}>{v}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ATTRIBUTE TABLE */}
              <div className="overflow-x-auto border border-white/5 rounded-sm">
                <table className="w-full text-xs box-border">
                  <thead>
                    <tr className="text-[10px] uppercase tracking-widest font-bold text-gray-500 border-b border-white/10 bg-[#0b0b0d]">
                      <th className="text-left py-2.5 px-3">Atrib</th>
                      <th className="text-center py-2.5 px-3">Comprado</th>
                      <th className="text-center py-2.5 px-3">Custo</th>
                      <th className="text-center py-2.5 px-3">Bônus</th>
                      <th className="text-center py-2.5 px-3 text-amber-500">Final</th>
                      <th className="text-center py-2.5 px-3">Mod</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ATRIBUTOS.map(attr=>{
                      const score=scores[attr], cost=costOf(score), bonus=allMods[attr]??0;
                      const final=fin[attr], m=calcMod(final);
                      const isKey=pk===attr||(Array.isArray(cls?.atributoChave)&&cls?.atributoChave.includes(attr));
                      const nextCost=score<MAX_S?(COST[score+1]??99)-cost:99;

                      return(
                        <tr key={attr} className={`border-b border-white/5 ${isKey?"bg-amber-900/10":""} hover:bg-white/[0.03] transition-colors`}>
                          <td className="py-2.5 px-3">
                            <span className={`font-bold text-sm ${isKey?"text-amber-400":"text-gray-300"}`}>{attr}</span>
                            {isKey&&<span className="text-amber-700 ml-1.5 hidden sm:inline">★</span>}
                          </td>
                          <td className="py-2.5 px-3">
                            <div className="flex items-center justify-center gap-2">
                              <button onClick={()=>chg(attr,-1)} disabled={score<=MIN_S}
                                className="w-6 h-6 flex items-center justify-center border border-white/10 text-gray-400 hover:border-amber-600 hover:text-amber-400 disabled:opacity-20 transition-all rounded-sm font-bold text-sm active:scale-95">−</button>
                              <span className="font-bold font-sans text-gray-100 w-6 text-center text-sm">{score}</span>
                              <button onClick={()=>chg(attr,1)} disabled={score>=MAX_S||nextCost>rem}
                                className="w-6 h-6 flex items-center justify-center border border-white/10 text-gray-400 hover:border-amber-600 hover:text-amber-400 disabled:opacity-20 transition-all rounded-sm font-bold text-sm active:scale-95">+</button>
                            </div>
                          </td>
                          <td className="py-2.5 px-3 text-center text-sm font-sans">
                            <span className={cost<0?"text-green-500":cost===0?"text-gray-600":"text-amber-500"}>
                              {cost===0?"·":`${cost>0?"+":""}${cost}`}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-center text-sm font-sans font-medium">
                            {bonus!==0
                              ?<span className={bonus>0?"text-blue-400":"text-red-400"}>{bonus>0?`+${bonus}`:bonus}</span>
                              :<span className="text-gray-700">·</span>}
                          </td>
                          <td className="py-2.5 px-3 text-center font-bold text-gray-100 text-base font-sans">{final}</td>
                          <td className="py-2.5 px-3 text-center text-sm">
                            <span className={`font-bold font-sans ${m>0?"text-green-400":m<0?"text-red-400":"text-gray-500"}`}>{modStr(m)}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-5 py-3 border-t border-white/10 flex-shrink-0 flex items-center justify-between bg-[#0b0b0d]">
              <p className="text-[10px] text-gray-600 font-serif italic text-center w-full sm:text-left sm:w-auto">
                <span className="text-amber-700">★</span> atributo chave · mod=⌊(val−10)÷2⌋
              </p>
              <button onClick={()=>setOpen(false)}
                className="hidden sm:block text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-amber-400 border border-white/10 hover:border-amber-900/50 px-4 py-1.5 rounded-sm transition-colors">
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
