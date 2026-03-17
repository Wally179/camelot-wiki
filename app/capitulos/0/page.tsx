import Link from "next/link";

export default function CapituloZeroPage() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-20">
      <Link
        href="/capitulos"
        className="inline-flex items-center text-amber-600 hover:text-amber-400 mb-8 transition-colors text-sm font-semibold uppercase tracking-widest"
      >
        <span>← Voltar para o Diário</span>
      </Link>

      <header className="mb-12 text-center">
        <p className="text-amber-700 font-bold uppercase tracking-[0.3em] text-sm mb-4">
          Prelúdio
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
          O Crisol de Caer Dhu
        </h1>
        <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
      </header>

      <article className="prose prose-invert prose-amber max-w-none text-gray-300 leading-relaxed space-y-6 text-lg">
        <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-amber-500 first-letter:mr-3 first-letter:float-left">
          William Wallace percebeu que a atual geração de lordes está podre e
          que os seus interesses vão destruir o reino. Em segredo, ele e a sua
          assassina de elite, Scáthach, iniciaram um projeto nas sombras. Vocês
          são o resultado desse projeto.
        </p>

        <p>
          Há mais de uma década, aos 6 anos de idade, vocês foram retirados das
          vossas famílias — entregues como "tributos", roubados ou recolhidos
          das ruas. Os vossos sobrenomes foram apagados. Vocês foram atirados em{" "}
          <strong>Caer Dhu (A Fortaleza Negra)</strong>, encravada nos penhascos
          mais gélidos da ilha, onde os ventos cortam como vidro.
        </p>

        <h3 className="text-2xl font-bold text-gray-100 mt-10 mb-4">
          O Inferno e a Matilha
        </h3>
        <p>
          O treino não aconteceu num pátio de castelo com espadas de madeira. A
          vossa rotina foi o inferno. Vocês aprenderam a caçar de olhos
          vendados, a resistir a venenos bebendo doses minúsculas diariamente, e
          a lutar contra feras gigantes. O objetivo era quebrar qualquer
          resquício de arrogância ou egoísmo das vossas antigas casas.
        </p>
        <p>
          Se um falhasse, todos dormiam ao relento. Vocês sangraram juntos e
          aprenderam que a única forma de sobreviver era confiar cegamente em
          quem estava ao lado. Vossos laços forjaram-se mais fortes do que
          qualquer família biológica.
        </p>

        <h3 className="text-2xl font-bold text-gray-100 mt-10 mb-4">
          A Senhora das Sombras e a "Mãe"
        </h3>
        <p>
          Para o resto de Camelot,{" "}
          <strong className="text-gray-100">Scáthach</strong> é o monstro do
          Rei. Os vossos pais biológicos entregaram-vos a ela com terror nos
          olhos. Mas a verdade que apenas a Nova Távola conhece é diferente. Ela
          sabia que o treino tinha de ser desumano, porque o mundo lá fora iria
          matá-los num segundo. Ela era o vosso carrasco de dia, para não terem
          de morrer à noite.
        </p>

        <p>
          Quando o sol se punha e os olhos do Rei não estavam sobre a fortaleza,
          a máscara de gelo caía:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-[#16181d] border border-gray-800 p-6 rounded-lg">
            <h4 className="text-amber-500 font-bold mb-2">
              As Rações Secretas
            </h4>
            <p className="text-sm text-gray-400">
              Quando a punição oficial por falhar era ficar três dias sem comer,
              Scáthach deixava misteriosamente pão quente, carne e doces
              roubados na vossa mesa de madrugada.
            </p>
          </div>
          <div className="bg-[#16181d] border border-gray-800 p-6 rounded-lg">
            <h4 className="text-amber-500 font-bold mb-2">
              Os Curativos Sombrios
            </h4>
            <p className="text-sm text-gray-400">
              Ela quebrava os vossos ossos no treino, mas à noite entrava nos
              quartos, passava unguentos mágicos que curavam a dor e ficava
              sentada em silêncio até a febre baixar.
            </p>
          </div>
          <div className="bg-[#16181d] border border-gray-800 p-6 rounded-lg">
            <h4 className="text-amber-500 font-bold mb-2">
              O Muro contra a Política
            </h4>
            <p className="text-sm text-gray-400">
              Ela queimava as cartas que os vossos pais verdadeiros enviavam.{" "}
              <em>
                "Eles não vos amam. Querem usar-vos como armas para matar os
                vossos irmãos de treino. Aqui, vocês são a minha matilha."
              </em>
            </p>
          </div>
          <div className="bg-[#16181d] border border-gray-800 p-6 rounded-lg">
            <h4 className="text-amber-500 font-bold mb-2">
              O Refúgio das Lágrimas
            </h4>
            <p className="text-sm text-gray-400">
              Se um de vocês acordasse a chorar com saudades de casa ou
              pesadelos, ela abraçava-vos em segredo, escondendo o vosso rosto
              na capa negra dela, e deixava-vos ser crianças até o choro acabar.
            </p>
          </div>
        </div>

        <p className="text-xl italic text-gray-400 text-center my-10">
          "Vocês não são apenas a elite militar de Camelot. Para Scáthach, vocês
          são os filhos que ela nunca pôde ter na vida de assassina. Ela
          forjou-vos no fogo, mas protegeu as vossas almas com a própria vida."
        </p>

        <div className="bg-[#0f1115] border border-gray-800 p-6 mt-12 rounded-lg text-center">
          <p className="text-amber-500 font-bold mb-2">O Fim do Treinamento</p>
          <p className="text-sm text-gray-500">
            Hoje, na faixa dos 20 anos, o vosso juramento não é para o Rei, mas
            para o futuro de Camelot. Vocês acabaram de ser soltos no maior
            ninho de cobras do mundo.
          </p>
        </div>
      </article>
    </div>
  );
}
