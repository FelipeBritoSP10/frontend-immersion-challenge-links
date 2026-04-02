# frontend-immersion-challenge-links

# BRITO.CINEMA 🎬

Uma interface de streaming premium, moderna e responsiva, desenvolvida durante a **Imersão Front-End da Alura**. O foco deste projeto foi elevar os conceitos de HTML5, CSS3 e JavaScript ao nível de aplicações reais de mercado, priorizando a experiência do usuário (UX) e uma interface de alto impacto (UI).

---

## ✨ Funcionalidades

- **Gerenciamento de Perfis:** Seleção de usuários com efeitos interativos de escala e bordas dinâmicas ao passar o mouse.
- **Categorias Dinâmicas:** Navegação por gêneros cinematográficos (Ação, Sci-Fi, Drama, Terror) com cards estilizados e micro-interações.
- **Planos Premium:** Seção de preços utilizando *Glassmorphism* (efeito de vidro), botões de call-to-action brilhantes e destaque visual para o plano Premium.
- **FAQ Interativo:** Sistema de perguntas frequentes (acordeão) com transições suaves via JavaScript.
- **Dark/Light Mode:** Alternância de temas para conforto visual e acessibilidade.
- **Footer de Alto Nível:** Rodapé profissional com colunas organizadas e redes sociais que ativam as cores oficiais da marca no hover.

---

## 📁 Estrutura de Arquivos

A organização do projeto segue as boas práticas de separação de responsabilidades:

```text
/
├── components/         # Fragmentos HTML (header, plans, faq, footer)
├── imgs/               # Ativos visuais (Avatares, Logos e Banners)
├── scripts/            # Lógica em JS (Controle de Tema e FAQ)
├── styles/             # Arquivos CSS (Variáveis Root e Estilização)
├── index.html          # Estrutura principal do saite
└── README.md           # Documentação do projeto
```

## 📂 Organização Modular (/components)
A principal evolução desta etapa foi a transição de um documento monolítico para uma Arquitetura Baseada em Componentes. Isso permite que cada seção do site seja independente, facilitando a manutenção e a escalabilidade do código.

- header.html: Navegação e controle de tema (Dark/Light).

- plans.html: Grid de planos com efeitos de alta fidelidade.

- faq.html: Sistema de acordeão otimizado.

- footer.html: Rodapé institucional e links sociais.

Os componentes são injetados dinamicamente no index.html via Fetch API e processamento assíncrono (Promise.all), garantindo que o DOM seja construído de forma eficiente e organizada.


## 🚀 Tecnologias Utilizadas
- HTML5: Estrutura semântica e acessível.

- CSS3 Avançado: Uso de Flexbox, CSS Grid, Variáveis (Root), animações cubic-bezier e filtros de desfoque (backdrop-filter).

- JavaScript Moderno: Manipulação de DOM para interatividade em tempo real.

- Font Awesome: Ícones vetoriais de alta qualidade.

- Google Fonts: Tipografia "Inter" para máxima legibilidade.

## 🤖 Desenvolvimento Inteligente (Google Gemini)

Este projeto foi acelerado e refinado com o apoio do **Google Gemini**, a IA de ponta do Google. A utilização da IA foi estratégica para:

- **Refatoração de Código:** Otimização de seletores CSS e estruturas de repetição no JavaScript.
- **UI/UX Design:** Brainstorming de efeitos visuais modernos, como o *Glassmorphism* aplicado nos planos.
- **Documentação:** Estruturação técnica deste README e organização do histórico de commits.
- **Resolução de Bugs:** Identificação rápida de erros de sintaxe e sugestões de melhores práticas de acessibilidade.

## 🛠️ Como Clonar e Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/FelipeBritoSP10/frontend-immersion-challenge-links

# Acesse a pasta do projeto
cd frontend-immersion-challenge-links

```

## Execute o projeto:

- Abra o arquivo index.html em seu navegador.

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Se você tiver alguma ideia de melhoria ou encontrar algum bug:
1. Faça um **Fork** do projeto.
2. Crie uma branch para sua modificação (`git checkout -b feature/NovaFuncionalidade`).
3. Faça o **Commit** (`git commit -m 'Add: Nova funcionalidade'`).
4. Dê um **Push** (`git push origin feature/NovaFuncionalidade`).
5. Abra um **Pull Request**.

---

## ⚖️ Licença

Este projeto está sob a licença **MIT**.


---

<p align="center">
  Desenvolvido por <strong>Felipe Brito</strong> durante a Imersão Front-End Alura + Google.
</p>
