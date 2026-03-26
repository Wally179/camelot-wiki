import dbJson from "@/data/camelot.json";
import { CamelotDatabase } from "@/types";
import HouseCard from "@/components/HouseCard";

const db = dbJson as CamelotDatabase;

export default function CasasPage() {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      {/* Cabeçalho da Página */}
      <div className="mb-12 border-b border-amber-900/20 pb-8">
        <h1
          className="text-5xl font-serif font-bold text-amber-500 mb-4"
          style={{ textShadow: "0 0 20px rgba(217,119,6,0.3)" }}
        >
          As 10 Grandes Casas
        </h1>
        <p className="text-gray-400 text-xl font-serif italic max-w-3xl leading-relaxed">
          "Escolha a sua lealdade com sabedoria. O Véu de Bruma não perdoa os
          fracos, e o sangue dita a lei em Camelot."
        </p>
      </div>

      {/* Grid de Cards Estilizados (Componentizado) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {db.casas.map((casa) => (
          <HouseCard key={casa.id} casa={casa} />
        ))}
      </div>
    </div>
  );
}
