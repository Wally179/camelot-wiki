import HeroMist from "@/components/HeroMist";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    href: "/regras",
    icon: "⚔️",
    title: "Criar Ficha",
    description:
      "O guia definitivo para os 22 pontos, escolha de Casas e o despertar da sua Arma de Ardan.",
  },
  {
    href: "/casas",
    icon: "🛡️",
    title: "As 10 Casas",
    description:
      "As linhagens, exércitos e Lordes que controlam a política e o sangue de Camelot.",
  },
  {
    href: "/mundo",
    icon: "🌍",
    title: "O Mundo",
    description:
      "A geografia opressiva da ilha e os mistérios que cercam o Cristal de Ardan.",
  },
  {
    href: "/capitulos",
    icon: "📜",
    title: "Crônicas",
    description:
      "O diário da Nova Távola. Do treinamento no Crisol até os feitos lendários.",
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      {/* O Hero com a névoa e o castelo */}
      <HeroMist />

      {/* Grid de Navegação Estilizado (Componentizado) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>

      {/* Seção de Lore de Rodapé */}
      <div className="relative bg-black/60 border-l-4 border-amber-600 p-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/5 blur-[50px] pointer-events-none" />
        <h3 className="text-amber-600 font-bold text-xs mb-4 uppercase tracking-[0.3em]">
          Protocolo da Nova Távola
        </h3>
        <p className="text-gray-400 leading-relaxed font-serif italic text-lg max-w-4xl">
          "As informações contidas nesta Wiki representam o conhecimento comum e
          rumores estabelecidos no reino. Nem tudo o que está escrito é a
          verdade absoluta. Confiem nos seus instintos, desconfiem dos Lordes e
          lembrem-se: a Coroa de Wallace exige sacrifícios."
        </p>
      </div>
    </div>
  );
}
