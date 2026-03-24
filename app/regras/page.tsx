import data from "./regras.json";

export default function RegrasPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-20 py-12 animate-fade-in font-serif text-gray-300">
      {/* HEADER PEDAGÓGICO */}
      <header className="border-b border-amber-900/40 pb-10">
        <h1 className="text-6xl font-bold text-amber-500 mb-6 tracking-tighter">
          Manual do Recruta: <span className="text-gray-100">O Crisol</span>
        </h1>
        <p className="text-xl leading-relaxed text-gray-400 italic">
          "Não basta sobreviver ao treinamento de Scáthach; você deve entender a
          arma que empunha e o sangue que corre em suas veias. Siga este guia
          para transcrever sua essência para o papel."
        </p>
      </header>

      {/* PASSO 1: CONCEITO */}
      <section className="relative p-8 bg-black/30 border border-amber-900/20">
        <div className="absolute -top-4 left-6 bg-amber-900 px-4 py-1 text-xs font-bold uppercase tracking-widest text-black">
          Passo 01: O Conceito
        </div>
        <h2 className="text-3xl font-bold text-amber-600 mb-4">
          Quem é você na Távola?
        </h2>
        <p className="mb-6">
          Antes de olhar os números, você precisa de uma base. Mande no privado
          do <strong>Wallace</strong>:
        </p>
        <ul className="space-y-4 text-sm bg-black/40 p-6 border border-amber-900/10">
          <li>
            <span className="text-amber-500 font-bold">● NOME E CASA:</span> Sua
            Casa define sua herança (veja o Passo 3).
          </li>
          <li>
            <span className="text-amber-500 font-bold">● RAÇA E CLASSE:</span>{" "}
            Você é um Guerreiro Humano padrão ou um Inventor de Gofannon focado
            em tecnologia de Ardan?
          </li>
          <li>
            <span className="text-amber-500 font-bold">
              ● CONCEITO DA ARMA:
            </span>{" "}
            Descreva o "efeito visual". Ex: "Minha espada solta uma fumaça negra
            que cega os inimigos". O mestre vai transformar isso em regra de T20
            para você.
          </li>
        </ul>
      </section>
      {/* ANATOMIA DO PERSONAGEM */}
      <section className="bg-amber-900/5 border border-amber-900/20 p-8 rounded-sm">
        <h2 className="text-2xl font-bold text-amber-500 mb-4 uppercase tracking-tighter">
          A Estrutura do Herói
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          Em Camelot, seu personagem é a soma de três pilares. Escolher um não
          anula o outro:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border-l-2 border-amber-700 bg-black/20">
            <h4 className="font-bold text-gray-100">1. Raça</h4>
            <p className="text-xs text-gray-500 mt-2">
              Sua biologia. Dá bônus fixos nos atributos e habilidades passivas
              (ex: Visão no Escuro, Resistências).
            </p>
          </div>
          <div className="p-4 border-l-2 border-amber-700 bg-black/20">
            <h4 className="font-bold text-gray-100">2. Classe</h4>
            <p className="text-xs text-gray-500 mt-2">
              Sua profissão e estilo de luta. Define seus PVs, PMs e os poderes
              que você ganha a cada nível.
            </p>
          </div>
          <div className="p-4 border-l-2 border-amber-700 bg-black/20">
            <h4 className="font-bold text-gray-100">3. A Nova Távola</h4>
            <p className="text-xs text-gray-500 mt-2 text-amber-600/80 italic font-bold">
              A Distinção de Prestígio. É um título que concede a Arma de Ardan
              e os direitos políticos de Camelot sem ocupar o lugar da sua
              classe.
            </p>
          </div>
        </div>
      </section>
      {/* PASSO 2: ATRIBUTOS DETALHADOS */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl text-amber-600 font-bold uppercase tracking-widest">
            Passo 02: Atributos (22 Pontos)
          </h2>
          <div className="flex-1 h-[1px] bg-amber-900/30" />
        </div>

        <p className="text-gray-400">
          Diferente de outros sistemas, aqui você "compra" sua força. Todos
          começam com <strong>10</strong> em tudo. Você tem{" "}
          <strong>22 pontos</strong>. Quanto maior o valor, mais caro fica o
          próximo ponto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-amber-900/20 p-6 bg-amber-950/5">
          {data.atributos.map((atrib) => (
            <div key={atrib.nome} className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-amber-500">{atrib.nome}</h3>
              <p className="text-xs text-gray-500 leading-normal">
                {atrib.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-black/60 p-6 border-t-2 border-amber-600">
          <h4 className="text-amber-500 font-bold mb-4 uppercase text-sm tracking-widest text-center">
            Tabela de Preços (Custo Acumulado)
          </h4>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 text-center font-mono text-sm">
            <div className="border border-amber-900/30 p-2">
              11: <span className="text-amber-500">1pt</span>
            </div>
            <div className="border border-amber-900/30 p-2">
              12: <span className="text-amber-500">2pt</span>
            </div>
            <div className="border border-amber-900/30 p-2">
              13: <span className="text-amber-500">3pt</span>
            </div>
            <div className="border border-amber-900/30 p-2">
              14: <span className="text-amber-500">4pt</span>
            </div>
            <div className="border border-amber-900/30 p-2">
              15: <span className="text-amber-500">6pt</span>
            </div>
            <div className="border border-amber-900/30 p-2">
              16: <span className="text-amber-500">8pt</span>
            </div>
            <div className="border border-amber-900/30 p-2">
              17: <span className="text-amber-500">11pt</span>
            </div>
            <div className="border border-amber-900/30 p-2">
              18: <span className="text-amber-500">14pt</span>
            </div>
          </div>
          <p className="mt-4 text-[10px] text-gray-600 uppercase text-center italic tracking-widest">
            DICA: Foque 18 no seu atributo principal. Inteligência dá mais
            perícias.
          </p>
        </div>
      </section>

      {/* PASSO 3: AS CASAS (DETALHADO) */}
      <section className="space-y-10">
        <h2 className="text-3xl text-amber-600 font-bold uppercase tracking-widest">
          Passo 03: Escolha sua Herança
        </h2>
        <p className="text-gray-400 italic leading-relaxed">
          Cada Casa concede um benefício passivo que representa seu treinamento
          ou genética. Escolha com sabedoria, pois isso define sua utilidade no
          grupo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.casas.map((casa) => (
            <div
              key={casa.id}
              className="group p-6 border border-amber-900/20 bg-black/40 hover:border-amber-500 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-100 group-hover:text-amber-400">
                  {casa.nome}
                </h3>
                <span className="text-[10px] bg-amber-900/20 text-amber-600 px-2 py-1 rounded">
                  HABILIDADE ATIVA
                </span>
              </div>
              <p className="text-amber-700 font-bold text-xs uppercase mb-3 tracking-widest">
                {casa.titulo}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {casa.efeito}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PASSO 4: A ARMA E O MANA */}
      <section className="border-2 border-red-900/20 p-10 bg-red-950/5 rounded-sm">
        <h2 className="text-3xl text-red-600 font-bold uppercase mb-6">
          Passo 04: A Arma de Ardan & Mana
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-amber-500 font-bold uppercase text-sm">
              Como funciona o PM (Pontos de Mana):
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Em Tormenta 20, **Mana é seu fôlego**. Guerreiros usam para
              ataques especiais, Magos para feitiços e você usa para ativar sua
              Arma de Ardan. Se seus PMs chegarem a 0, você é um civil comum.{" "}
              <strong>Gerencie este recurso com sua vida.</strong>
            </p>
            <div className="space-y-2 border-l-2 border-amber-900 pl-4">
              <p className="text-xs">
                <strong className="text-amber-600 tracking-widest uppercase">
                  Nível 3 (Agora):
                </strong>{" "}
                Você já tem o "Despertar". Custo: 1 a 2 PM.
              </p>
              <p className="text-xs text-gray-600 italic">
                Ex: "Gaste 1 PM para sua espada brilhar e dar +1d6 de dano".
              </p>
            </div>
          </div>

          <div className="p-6 bg-black/60 border border-red-900/40">
            <h4 className="text-red-600 font-bold uppercase text-xs mb-4">
              O Perigo da Sobrecarga
            </h4>
            <p className="text-sm text-gray-400 mb-4 italic">
              "O Cristal de Ardan não é uma ferramenta estável. Ele é uma fera
              enjaulada no seu aço."
            </p>
            <p className="text-xs text-red-400 bg-red-900/10 p-4 border border-red-900/20">
              Se você tirar um <strong>1 Natural</strong> em um teste usando sua
              arma, o poder falha violentamente. Você recebe dano direto igual a
              metade do custo de PM da habilidade (Ardan corrompendo sua carne).
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST FINAL */}
      <section className="pt-10 text-center">
        <h2 className="text-2xl text-amber-500 font-bold mb-6 italic tracking-widest">
          Checklist de Conclusão
        </h2>
        <div className="flex flex-wrap justify-center gap-8 text-[10px] text-gray-500 uppercase tracking-widest">
          <span>[ ] Nível Inicial: 3</span>
          <span>[ ] 22 Pontos Gastos</span>
          <span>[ ] Escolheu Casa</span>
          <span>[ ] 2 Poderes de Classe Escolhidos</span>
          <span>[ ] Mandou pro Wallace</span>
        </div>
      </section>
    </div>
  );
}
