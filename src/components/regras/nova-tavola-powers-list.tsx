import type { ReactNode } from "react";

function Prereq({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-widest text-amber-700/90 font-bold mb-3">
      {children}
    </p>
  );
}

function PowerBlock({
  title,
  prereq,
  children,
}: {
  title: string;
  prereq?: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="p-6 bg-black/35 border border-amber-900/25 rounded-sm">
      <h3 className="text-lg font-bold text-amber-500 font-serif mb-2">{title}</h3>
      {prereq}
      <div className="text-sm text-gray-400 leading-relaxed space-y-3">{children}</div>
    </article>
  );
}

/** Conteúdo sensível: carregado em chunk separado apenas após desbloqueio no cliente. */
export function NovaTavolaPowersList() {
  return (
    <div className="grid gap-6 md:grid-cols-1 animate-fade-in">
      <PowerBlock title="Herança da Mãe Sombria">
        <p>
          Os anos de abusos físicos e treinamentos furtivos de Scáthach ensinaram você a se mover
          sem ser notado e a golpear onde dói.
        </p>
        <p>
          <strong className="text-gray-200">Mecânica:</strong> Você recebe +2 em testes de
          Furtividade e Percepção. Além disso, uma vez por rodada, ao flanquear um inimigo ou atacá-lo
          desprevenido, você pode gastar 1 PM para somar +1d6 de dano ao ataque.
        </p>
      </PowerBlock>

      <PowerBlock title="Doutrina do Rei Arqueiro">
        <p>
          William Wallace ensinou que a força bruta sem direção é inútil. O treinamento tático exige
          perfeição no momento do abate.
        </p>
        <p>
          <strong className="text-gray-200">Mecânica:</strong> Você recebe +2 em testes de
          Iniciativa. Uma vez por combate, você pode gastar 2 PM para declarar um &quot;Alvo
          Primário&quot;. Até o fim da cena, seus ataques contra esse alvo ignoram os efeitos de
          camuflagem (exceto total) e cobertura leve.
        </p>
      </PowerBlock>

      <PowerBlock title="Despertar da Ardanita" prereq={<Prereq>Pré-requisito: Nível 6</Prereq>}>
        <p>
          O seu vínculo com a sua arma de assinatura aumenta, provando que o cristal de Ardan
          reconhece o seu sangue.
        </p>
        <p>
          <strong className="text-gray-200">Mecânica:</strong> O custo em PM de qualquer habilidade
          mágica concedida pela sua Arma de Ardanita é reduzido em –1 PM (mínimo de 1 PM). Além disso,
          a arma é considerada mágica para propósitos de ignorar Resistência a Dano.
        </p>
      </PowerBlock>

      <PowerBlock title="Resiliência de Caer Dhu">
        <p>
          O treinamento infantil envolveu ossos quebrados, venenos ingeridos em pequenas doses e
          noites ao relento na neve. O seu corpo simplesmente se recusa a morrer facilmente.
        </p>
        <p>
          <strong className="text-gray-200">Mecânica:</strong> Você recebe +10 PV e +5 PM máximos.
          Além disso, uma vez por cena, se você for reduzido a 0 ou menos Pontos de Vida por um
          ataque ou efeito, você pode gastar 3 PM como uma reação para resistir ao golpe, ignorando o
          dano e permanecendo com 1 PV.
        </p>
      </PowerBlock>

      <PowerBlock
        title="Vínculo da Távola (Poder de Grupo)"
        prereq={
          <Prereq>Pré-requisito: Pelo menos um aliado a alcance curto possuir este mesmo poder</Prereq>
        }
      >
        <p>
          Vocês cresceram juntos, apanharam juntos e aprenderam a cobrir os pontos cegos uns dos
          outros instintivamente.
        </p>
        <p>
          <strong className="text-gray-200">Mecânica:</strong> Sempre que você estiver adjacente a
          um aliado que também possua o Vínculo da Távola, ambos recebem +2 na Defesa e em testes de
          resistência. Além disso, você pode gastar 1 PM para usar a ação Ajudar como uma ação livre
          para esse aliado uma vez por rodada.
        </p>
      </PowerBlock>

      <PowerBlock
        title="Frieza de Caer Dhu"
        prereq={<Prereq>Pré-requisito: Herança da Mãe Sombria ou Doutrina do Rei Arqueiro</Prereq>}
      >
        <p>
          O medo foi arrancado de você durante os &quot;Invernos de Sangue&quot;. Pânico é uma
          fraqueza que resulta em morte, e Scáthach não aceita falhas.
        </p>
        <p>
          <strong className="text-gray-200">Mecânica:</strong> Você se torna imune à condição
          Amedrontado e Apavorado. Além disso, você recebe +2 em testes de Vontade para resistir a
          ilusões e efeitos mentais.
        </p>
      </PowerBlock>

      <PowerBlock title="Executor da Coroa" prereq={<Prereq>Pré-requisito: Nível 6</Prereq>}>
        <p>
          A Nova Távola não entra em combate para duelar, entra para abater. Você aprendeu a
          explorar o exato momento em que o alvo demonstra fraqueza.
        </p>
        <p>
          <strong className="text-gray-200">Mecânica:</strong> Sempre que você acertar um ataque
          corpo a corpo ou à distância em um inimigo que esteja sofrendo alguma condição prejudicial
          (como Sangrando, Caído, Desprevenido ou Cego), você pode gastar 2 PM para aumentar o
          multiplicador de crítico da sua arma em +1x para aquele ataque.
        </p>
      </PowerBlock>

      <PowerBlock
        title="Mimetismo das Sombras"
        prereq={<Prereq>Pré-requisito: Treinado em Furtividade</Prereq>}
      >
        <p>Scáthach ensinou que a melhor armadura é não estar lá quando a lâmina inimiga descer.</p>
        <p>
          <strong className="text-gray-200">Mecânica:</strong> Você pode gastar 2 PM para usar a
          perícia Furtividade para se esconder mesmo se estiver sendo observado ou sem cobertura
          adequada, contanto que esteja em uma área de penumbra ou escuridão. Se atacar a partir dessa
          furtividade, o alvo fica Desprevenido contra o seu primeiro ataque.
        </p>
      </PowerBlock>

      <PowerBlock
        title="Sobrevivente da Punição"
        prereq={<Prereq>Pré-requisito: Resiliência de Caer Dhu, nível 6</Prereq>}
      >
        <p>Punidos severamente na infância por qualquer falha, o seu limiar de dor beira o inumano.</p>
        <p>
          <strong className="text-gray-200">Mecânica:</strong> Você ignora as penalidades das
          condições Fadigado e Exausto (você ainda sofre a condição, mas age como se estivesse uma
          categoria abaixo: exausto age como fadigado; fadigado age normal). Além disso, ao usar a
          ação Recuperar Fôlego, você cura uma quantidade extra de Pontos de Vida igual ao seu bônus
          de Constituição.
        </p>
      </PowerBlock>

      <PowerBlock
        title="Sincronia Mortal (Aprimoramento de Grupo)"
        prereq={<Prereq>Pré-requisito: Vínculo da Távola, nível 8</Prereq>}
      >
        <p>
          Vocês treinaram a vida inteira para lutar como um único organismo de abate. Quando um
          ataca, o outro já está preparando o golpe final.
        </p>
        <p>
          <strong className="text-gray-200">Mecânica:</strong> Uma vez por rodada, quando um aliado a
          alcance curto que também possua este poder acerta um acerto crítico em um inimigo, você
          pode gastar 2 PM para realizar um ataque básico (corpo a corpo ou à distância) contra esse
          mesmo inimigo como uma Reação.
        </p>
      </PowerBlock>

      <PowerBlock
        title="Ressonância do Portador"
        prereq={<Prereq>Pré-requisito: Despertar da Ardanita, nível 10</Prereq>}
      >
        <p>
          O seu próprio sangue, forjado na violência de Camelot, começa a pulsar em perfeita
          sincronia com a lâmina da sua Arma de Ardanita.
        </p>
        <p>
          <strong className="text-gray-200">Mecânica:</strong> Enquanto estiver empunhando a sua Arma
          de Ardanita, você recebe +2 em testes de ataque e rolagens de dano com ela. Além disso,
          você pode gastar 3 PM como uma ação livre para fazer a arma brilhar intensamente com a
          energia da Ardanita, dissipando qualquer escuridão mágica na área e garantindo Visão no
          Escuro para você até o final da cena.
        </p>
      </PowerBlock>
    </div>
  );
}
