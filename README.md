# Camelot Wiki 🏰⚔️

![Next JS](https://img.shields.io/badge/Next-white?style=for-the-badge&logo=next.js&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Uma plataforma web moderna, modular e de alta fidelidade visual, desenvolvida para atuar como o compêndio oficial de um universo focado em High Fantasy e mitologia celta. 

> [!NOTE]
> **O Contexto Real do Projeto:** Embora possua uma arquitetura robusta, design premium e engenharia de software aplicada a aplicações do mundo real, a idealização de todo este escopo baseou-se originalmente numa **grande brincadeira entre amigos apaixonados por RPG de mesa**. O objetivo principal aqui apresentado é demonstrar que a excelência técnica, os desafios complexos de componentização e as melhores práticas da indústria podem – e devem – ser aplicados para dar vida não apenas a corporações, mas também elevar os nossos próprios hobbies a um patamar profissional.

---

## 🎯 Objetivo

O plano central no desenvolvimento desta plataforma consistiu em construir uma base sólida para portfólio, abrangendo múltiplos espectros do desenvolvimento front-end e de arquitetura de software:
- **Resolução de Problemas Complexos:** Conversão de lógicas longas de manuais e calculadoras matemáticas de RPG (sistemas de pontos e raças) num fluxo automatizado, contínuo e responsivo, livre de recarregamentos.
- **UI/UX Premium:** Entregar visualmente um sentimento "Royal", aplicando design system consistente, micro-interações coesas (hover, transições, layouts fluidos) e uso inteligente de ícones.
- **Escalabilidade Arquitetural:** Empregar metodologias de clean code, uso avançado do Next.js e separação de responsabilidades (SOLID) para garantir que uma simples wiki pudesse, no futuro, expandir para um ecossistema com contas logadas, dados centralizados em nuvem, e persistência real de fichas dinâmicas.

## ⚙️ Arquitetura e Como Foi Feito

A arquitetura da Wiki foi construída não em formato de página estática sem inteligência, mas sim como uma autêntica *Single Page Application (SPA)* com Roteamento Avançado através do Next.js. O ecossistema reflete as seguintes decisões de projeto:

1. **Gestão Estruturada de Lógica de UI (Componentização):** Ao invés de páginas monolíticas, o design foi fragmentado em micro e macro-componentes altamente reutilizáveis. Elementos complexos (Modais de NPCs, Cards de Linhagens e Casas, e Calculadoras de Atributos) trabalham de forma isolada sem sobrecarregar a árvore do DOM.
2. **Dados e Gerenciamento de Estado:** A aplicação atualmente utiliza estruturas de configuração estáticas robustas em JSON (`/src/data/`) a fim de otimizar tempo de carregamento no ambiente local, permitindo hidratação imediata da UI enquanto garante a separação entre "Apresentação e Camada de Dados". As regras matemáticas da complexa calculadora de criação de personagens foram tratadas por meio de hooks de gerenciamento de estado assíncrono.
3. **Design System & Estilização Utilitária:** O ecossistema visual funciona orientado pelas regras do **Tailwind CSS v4**. Todo o esquema de tema e coesão estética foi concebido usando diretrizes metodológicas modernas (ausência primária de branco/preto absolutos, adoção de degradês sutis, e paleta baseada nos tons que evocam um contexto "Reinado e Camelot").

## 💻 Stack Tecnológico

A fundação técnica emprega os melhores e mais estáveis recursos do ecossistema de bibliotecas web contemporâneo:
* **Next.js (App Router - v16)**: Framework principal focado em renderização eficiente e roteamento avançado de pastas.
* **React v19**: Componentização nativa para interatividade de altíssimo nível.
* **TypeScript**: Superset essencial, inserindo checagem estática, auto-completar rico (IntelliSense) e protegendo a integridade das interfaces (ex: impedindo que um bônus numérico de destreza seja transmitido como texto por acidente).
* **Tailwind CSS v4**: Engine principal de estilização funcional, provendo classes base para garantir rápida consistência aos designs interativos.
* **Lucide React**: Biblioteca de vetores responsável por aprimorar a hierarquia da leitura e do design da aplicação.

## 🚀 Como Executar Localmente

Se você deseja clonar e verificar a organização técnica do repositório:

1. Instale as dependências:
```bash
npm install
# ou
yarn install
```

2. Inicie o servidor em ambiente de desenvolvimento (Incializa na porta `:3000`):
```bash
npm run dev
# ou
yarn dev
```

3. Abra o seu navegador e explore os contos, as regras e a calculadora do reino.

---

*Desenvolvido com muita ambição técnica, longas madrugadas de código... e noites insanas lidando com dados críticos tirados em combate.* 🎲🐉
