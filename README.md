# Salesforce Certified - Flashcards Challenge 🎓☁️

Aplicação web interativa e de alta intensidade projetada para ajudar estudantes e profissionais a dominarem os conceitos mais importantes exigidos no exame oficial de certificação **Salesforce**.

O jogo combina mecânicas de gamificação com um design moderno em estética **Glassmorphism** (efeito de vidro translúcido sobre fundo escuro com gradientes brilhantes) para tornar a revisão de conteúdos um processo dinâmico, rápido e desafiador.

---

## 🎮 Funcionalidades Principais

- **+60 Questões de Alta Relevância** - perguntas reais e atualizadas cobrindo os principais domínios da certificação oficial. Usuário pode atualizar as perguntas e respostas editando facilmente o conteúdo no código;
- **Mecânica 3D de Flashcard** - clique no cartão centralizado para virá-lo com animação fluida em 3D e revelar a resposta;
- **Sistema de Vidas (Alta Intensidade)** - inicia cada partida com 3 vidas (❤️); errar uma questão consome uma vida; chegar a zero exibe o "Game Over";
- **Modo Contrarrelógio** - apenas 15 segundos para ler e responder cada questão; esgotar o tempo conta como erro;
- **Pontuação e Multiplicador de Combo** - cada acerto soma 100 pontos; 3 acertos consecutivos ativam o **Combo 2X**, dobrando os pontos de todos os acertos seguintes;
- **Suporte Multi-idioma (PT-BR ⇄ EN)** - alterne o idioma a qualquer momento pelo interruptor na barra de navegação;
- **Pausa Automática na Troca de Idioma** - ao trocar de idioma, o jogo pausa instantaneamente para que o cronômetro não siga enquanto o jogador se adapta à nova tradução.

---

## 📚 Domínios da Certificação Abrangidos

As mais de 60 questões estão distribuídas estrategicamente pelas seguintes áreas críticas do ecossistema Salesforce (inicialmente o foco é o contexto de admin):

| Domínio | Tópicos |
|---|---|
| **Configuração de Organização** | Fusos horários, calendários fiscais, idiomas, moedas e licenças |
| **Modelagem e Gestão de Dados** | Relacionamentos (Master-Detail, Lookup, Many-to-Many), campos de fórmula, Roll-up Summary, Data Loader vs. Import Wizard |
| **Acesso e Segurança** | Perfis, OWDs, regras de partilha, hierarquias de papéis, MFA e restrições de IP |
| **Automação de Processos** | Regras de validação, Flow Builder (Screen Flows, Record-Triggered Flows) e processos de aprovação |
| **Análise de Dados** | Relatórios (Summary, Tabular, Joined) e Painéis Dinâmicos (Dynamic Dashboards) |
| **Aplicações de Vendas e Suporte** | Conversão de Leads, filas, regras de atribuição de casos e regras de escalação |

---

## 🚀 Como Executar

Não requer instalação, servidor local ou banco de dados externo.

1. Baixe (ou clone) o repositório;
2. Dê um duplo clique no arquivo `salesforce_flashcards_game.html` para abri-lo em qualquer navegador moderno;
3. O jogo iniciará automaticamente.

> ✅ Compatível com Google Chrome, Mozilla Firefox, Microsoft Edge e Safari.

---

## 📋 Regras e Mecânica do Jogo

1. **Início**: o baralho é embaralhado aleatoriamente a cada nova partida
2. **Leitura**: o cronômetro inicia em 15 segundos para a questão atual
3. **Revelação**: clique no cartão para visualizar a resposta; o tempo é pausado neste momento
4. **Avaliação**: escolha honestamente se **Acertou** ou **Errou** a questão conceitualmente
5. **Vitória**: conclua as 60 questões sem perder todas as vidas para atingir o status de **"Certificado!"** 🏆

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: estrutura semântica e acessível;
- **CSS3 (Customizado)**: layout responsivo, animações de rotação 3D (`perspective` e `backface-visibility`), gradientes e design Glassmorphism;
- **JavaScript (ES6+)**: lógica completa de controle de estado do jogo, gestão do cronômetro, tradução em tempo real e embaralhamento do deck a cada partida;
- **Font Awesome**: ícones vetoriais modernos;
- **Google Fonts (Plus Jakarta Sans)**: tipografia de alta legibilidade.
