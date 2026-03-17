import Link from "next/link";

export default function MundoPage() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-20">
      <header className="mb-14 border-b border-gray-800 pb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-4">
          O Véu de Bruma
        </h1>
        <p className="text-xl text-amber-500 font-semibold uppercase tracking-widest">
          O Guia do Cenário de Camelot
        </p>
      </header>

      <article className="prose prose-invert prose-amber max-w-none text-gray-300 leading-relaxed space-y-10 text-lg">
        {/* Premissa */}
        <section>
          <h2 className="text-3xl font-bold text-gray-100 mb-4 border-l-4 border-amber-600 pl-4">
            O Refúgio Selvagem
          </h2>
          <p>
            O mundo lá fora é implacável. No continente, superpotências travam
            uma cruzada sanguinária contra qualquer criatura mágica ou ligada ao
            submundo. Mas no meio do oceano, protegida por um "Véu de Bruma"
            impenetrável, existe um refúgio ancestral: <strong>Camelot</strong>.
          </p>
          <p>
            Esqueçam os contos de fadas com cavaleiros brilhantes. A Camelot de
            hoje é uma ilha hostil de cultura celta, dominada por florestas
            densas e fortalezas rústicas. O Véu que esconde a ilha é alimentado
            pelos <strong>Cristais de Ardan</strong>, um minério nativo que
            amplifica a magia de quem o usa, mas que atrai monstros colossais e
            corrompe os fracos. O Véu não é uma prisão; quem quiser pode sair
            para o continente... mas quem sai, nunca mais consegue voltar.
          </p>
        </section>

        {/* O Rei e a Távola em Ruínas */}
        <section>
          <h2 className="text-3xl font-bold text-gray-100 mb-4 border-l-4 border-amber-600 pl-4">
            O Rei Arqueiro e a Távola em Ruínas
          </h2>
          <p>
            Quem governa este caos não é um homem de espada, mas o{" "}
            <strong className="text-gray-100">Rei William Wallace</strong>, um
            arqueiro brilhante, pragmático e letal. Ele tenta manter a paz
            convocando os líderes das 10 Grandes Casas para a Távola Redonda.
            Cada um deles possui uma arma forjada 100% em Cristal de Ardan, o
            que lhes concede poderes quase divinos.
          </p>
          <p>
            O problema? Eles odeiam-se profundamente. A Távola é um barril de
            pólvora político. Todos sorriem para o Rei na corte, mas mantêm as
            facas escondidas nas costas uns dos outros. Suas alianças são
            baseadas em chantagem, fome e ganância.
          </p>
        </section>

        {/* As Fadas */}
        <section>
          <h2 className="text-3xl font-bold text-gray-100 mb-4 border-l-4 border-amber-600 pl-4">
            O Relógio das Fadas
          </h2>
          <p>
            Como se a guerra fria interna não bastasse, o Véu de Bruma está a
            encolher. A magia que protege Camelot está exausta. Nas bordas do
            arquipélago fica <strong>Inis Fae</strong>, a ilhota das fadas. Em
            50 anos, a ilha delas ficará fora da barreira mágica, e elas
            definharão até à morte.
          </p>
          <p>
            Desesperadas para sobreviver, as fadas estão a forçar a entrada para
            o centro de Camelot. Algumas casas querem massacrá-las agora mesmo,
            outras querem usá-las, e se o Rei Wallace tomar a decisão errada, a
            ilha inteira mergulha numa guerra civil sanguinolenta.
          </p>
        </section>
      </article>

      {/* Guia de Criação */}
      <div className="mt-16 bg-[#0f1115] border-t-4 border-amber-600 p-8 rounded-b-xl shadow-2xl">
        <h3 className="text-2xl font-bold text-gray-100 mb-6 uppercase tracking-wider">
          Criação de Personagem (Nível 3)
        </h3>
        <p className="text-gray-400 mb-6">
          Para forjar o seu prodígio da Nova Távola, defina três coisas
          essenciais:
        </p>

        <ul className="space-y-6 text-gray-300">
          <li className="flex gap-4">
            <span className="text-amber-500 font-bold text-xl">1.</span>
            <div>
              <strong className="text-gray-100 block mb-1">
                A Casa de Origem (O seu sangue)
              </strong>
              <p className="text-sm">
                De qual dos 10 clãs você foi tirado aos 6 anos? Era um nobre
                purista? Um mutante? Um filho de ferreiro? O ideal é que cada
                jogador seja de uma Casa diferente.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-amber-500 font-bold text-xl">2.</span>
            <div>
              <strong className="text-gray-100 block mb-1">
                A Arma de Assinatura
              </strong>
              <p className="text-sm">
                Qual é a sua arma principal? Ela é uma obra-prima de aço,
                possuindo apenas uma pequena "lasca" ou "pó" de Ardan
                incrustado. Armas puras de cristal são o prêmio máximo do
                futuro.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-amber-500 font-bold text-xl">3.</span>
            <div>
              <strong className="text-gray-100 block mb-1">
                O Poder Nativo (A sua Centelha)
              </strong>
              <p className="text-sm">
                O que a sua alma faz o cristal despertar? Manipular a gravidade?
                Ficar intangível? Fazer o sangue ferver? Pense no conceito puro,
                e o Mestre adaptará para as regras consumindo Pontos de Mana.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
