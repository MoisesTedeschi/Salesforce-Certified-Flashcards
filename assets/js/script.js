// 60+ Salesforce Admin Questions Array
const deck = [
  {
    category_pt: "Configuração de Organização",
    category_en: "Organization Setup",
    q_pt: "Qual recurso define o fuso horário padrão, idioma e formato de moeda de toda a organização?",
    q_en: "Which feature defines the default timezone, language, and currency format of an entire organization?",
    a_pt: "Informações da Empresa (Company Information).",
    a_en: "Company Information.",
  },
  {
    category_pt: "Modelagem de Dados",
    category_en: "Data Modeling",
    q_pt: "O que acontece com um registro filho em um relacionamento de Mestre-Detalhes (Master-Detail) se o mestre for excluído?",
    q_en: "What happens to a child record in a Master-Detail relationship if the master record is deleted?",
    a_pt: "O registro filho é excluído automaticamente (Cascade delete).",
    a_en: "The child record is automatically deleted (Cascade delete).",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "Onde você configura o acesso padrão aos registros de um objeto para usuários que não são donos do registro?",
    q_en: "Where do you configure the default access to records for users who do not own the record?",
    a_pt: "Configurações padrão da organização (OWD - Organization-Wide Defaults).",
    a_en: "Organization-Wide Defaults (OWD).",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "Se um usuário tem acesso 'Somente Leitura' em seu Perfil, mas a OWD do objeto é 'Público Leitura/Gravação', ele pode editar?",
    q_en: "If a user has 'Read Only' access in their Profile, but the OWD of the object is 'Public Read/Write', can they edit?",
    a_pt: "Não. O Perfil sempre limita o acesso de escrita, agindo como barreira primária.",
    a_en: "No. The Profile acts as a baseline lock. If the Profile restricts it, OWD cannot grant it.",
  },
  {
    category_pt: "Automação",
    category_en: "Automation",
    q_pt: "Qual ferramenta declarativa do Salesforce deve ser usada para criar automações complexas com ramificação lógica e interfaces de tela?",
    q_en: "Which declarative tool in Salesforce should be used to build complex automations with branching logic and screen interfaces?",
    a_pt: "Flow Builder (Fluxos).",
    a_en: "Flow Builder.",
  },
  {
    category_pt: "Gerenciamento de Dados",
    category_en: "Data Management",
    q_pt: "Qual utilitário nativo você usa para importar até 50.000 registros, prevenindo registros duplicados?",
    q_en: "Which native tool do you use to import up to 50,000 records while preventing duplicate records?",
    a_pt: "Assistente de Importação de Dados (Data Import Wizard).",
    a_en: "Data Import Wizard.",
  },
  {
    category_pt: "Análise de Dados",
    category_en: "Analytics",
    q_pt: "Que tipo de relatório permite agrupar linhas de dados, exibir colunas e gerar gráficos?",
    q_en: "Which type of report allows grouping of rows of data, displaying columns, and creating charts?",
    a_pt: "Relatório Sumário (Summary Report).",
    a_en: "Summary Report.",
  },
  {
    category_pt: "Validação",
    category_en: "Validation",
    q_pt: "Quando as Regras de Validação (Validation Rules) são executadas no ciclo de vida de salvamento de um registro?",
    q_en: "When do Validation Rules run in the record save lifecycle?",
    a_pt: "Antes do registro ser salvo permanentemente no banco de dados.",
    a_en: "Before the record is permanently saved to the database.",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "Qual recurso do Salesforce permite estender privilégios a campos específicos sem alterar o Perfil do usuário?",
    q_en: "Which Salesforce feature allows extending privileges to specific fields without changing the user's Profile?",
    a_pt: "Conjuntos de permissões (Permission Sets).",
    a_en: "Permission Sets.",
  },
  {
    category_pt: "Configuração de Organização",
    category_en: "Organization Setup",
    q_pt: "Qual página do menu de configurações deve ser acessada para ver as licenças de usuário disponíveis restantes?",
    q_en: "Which page in Setup must be accessed to view the remaining available user licenses?",
    a_pt: "Informações da Empresa (Company Information).",
    a_en: "Company Information.",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "Se você deseja impedir que um usuário acesse o Salesforce fora do horário de trabalho, onde configura isso?",
    q_en: "If you want to prevent a user from logging into Salesforce outside of working hours, where do you configure this?",
    a_pt: "No Perfil do usuário (Profile - Login Hours).",
    a_en: "In the user's Profile (Login Hours).",
  },
  {
    category_pt: "Modelagem de Dados",
    category_en: "Data Modeling",
    q_pt: "Onde os campos de Resumo de Acumulado (Roll-Up Summary Fields) podem ser criados?",
    q_en: "On which side of a Master-Detail relationship can Roll-Up Summary Fields be created?",
    a_pt: "Somente no objeto Mestre (Master).",
    a_en: "Only on the Master object.",
  },
  {
    category_pt: "Modelagem de Dados",
    category_en: "Data Modeling",
    q_pt: "Quantos relacionamentos do tipo Mestre-Detalhes (Master-Detail) um objeto personalizado pode ter?",
    q_en: "How many Master-Detail relationships can a custom object have?",
    a_pt: "No máximo 2.",
    a_en: "A maximum of 2.",
  },
  {
    category_pt: "Modelagem de Dados",
    category_en: "Data Modeling",
    q_pt: "Como você cria um relacionamento muitos-para-muitos (Many-to-Many) entre dois objetos?",
    q_en: "How do you create a Many-to-Many relationship between two objects?",
    a_pt: "Criando um objeto de junção personalizado com dois relacionamentos Mestre-Detalhes.",
    a_en: "By creating a custom junction object with two Master-Detail relationships.",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "O que o papel (Role) de um usuário na hierarquia de papéis controla?",
    q_en: "What does a user's Role in the role hierarchy control?",
    a_pt: "Acesso de visibilidade a registros de outros usuários verticalmente.",
    a_en: "Visibility access to records owned by other users vertically.",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "Quais são as três opções válidas de OWD (Organization-Wide Defaults)?",
    q_en: "What are three valid OWD (Organization-Wide Defaults) options?",
    a_pt: "Privado, Somente Leitura Pública, Leitura/Gravação Pública.",
    a_en: "Private, Public Read Only, Public Read/Write.",
  },
  {
    category_pt: "Interface de Usuário",
    category_en: "User Interface",
    q_pt: "Como um administrador pode exibir diferentes layouts de página e valores de lista de seleção para diferentes usuários no mesmo objeto?",
    q_en: "How can an administrator display different page layouts and picklist values to different users on the same object?",
    a_pt: "Usando Tipos de Registro (Record Types).",
    a_en: "By using Record Types.",
  },
  {
    category_pt: "Automação",
    category_en: "Automation",
    q_pt: "Quais são as ações padrão disponíveis em um Processo de Aprovação?",
    q_en: "What are the standard actions available in an Approval Process?",
    a_pt: "Alerta de e-mail, Tarefa, Atualização de campo e Mensagem de saída.",
    a_en: "Email Alert, Task, Field Update, and Outbound Message.",
  },
  {
    category_pt: "Gerenciamento de Vendas",
    category_en: "Sales Management",
    q_pt: "Quais três objetos estão envolvidos no processo padrão de conversão de leads?",
    q_en: "Which three objects are involved in the standard lead conversion process?",
    a_pt: "Conta, Contato e Oportunidade (Account, Contact, Opportunity).",
    a_en: "Account, Contact, and Opportunity.",
  },
  {
    category_pt: "Gerenciamento de Vendas",
    category_en: "Sales Management",
    q_pt: "Como garantir que os leads criados no site da empresa sejam atribuídos dinamicamente às filas corretas?",
    q_en: "How can you ensure leads created on the company website are dynamically routed to the correct queues?",
    a_pt: "Usando Regras de Atribuição de Leads (Lead Assignment Rules).",
    a_en: "Using Lead Assignment Rules.",
  },
  {
    category_pt: "Gerenciamento de Suporte",
    category_en: "Support Management",
    q_pt: "Qual recurso redireciona automaticamente um caso para outro agente se ele não for resolvido em 24 horas?",
    q_en: "Which feature automatically redirects a case to another agent if it remains unresolved for 24 hours?",
    a_pt: "Regra de Escalação de Casos (Case Escalation Rules).",
    a_en: "Case Escalation Rules.",
  },
  {
    category_pt: "Gerenciamento de Suporte",
    category_en: "Support Management",
    q_pt: "Qual recurso envia um e-mail automático personalizado de agradecimento ao cliente quando ele abre um caso?",
    q_en: "Which feature sends a personalized automatic thank you email to a customer when they open a case?",
    a_pt: "Regra de Resposta Automática (Auto-Response Rules).",
    a_en: "Auto-Response Rules.",
  },
  {
    category_pt: "Modelagem de Dados",
    category_en: "Data Modeling",
    q_pt: "Qual tipo de campo formula permite buscar valores dinamicamente a partir de objetos relacionados pais?",
    q_en: "Which formula field type allows fetching values dynamically from related parent objects?",
    a_pt: "Fórmula de objeto cruzado (Cross-object formula).",
    a_en: "Cross-object formula.",
  },
  {
    category_pt: "Gerenciamento de Dados",
    category_en: "Data Management",
    q_pt: "Quantos dias os registros excluídos permanecem na Lixeira (Recycle Bin) antes de serem limpos definitivamente?",
    q_en: "How many days do deleted records remain in the Recycle Bin before being permanently purged?",
    a_pt: "15 dias.",
    a_en: "15 days.",
  },
  {
    category_pt: "Gerenciamento de Dados",
    category_en: "Data Management",
    q_pt: "Qual ferramenta externa deve ser usada se você precisar carregar um lote de 2.000.000 de registros no Salesforce?",
    q_en: "Which external tool should you use if you need to load a batch of 2,000,000 records into Salesforce?",
    a_pt: "Salesforce Data Loader.",
    a_en: "Salesforce Data Loader.",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "Qual nível de segurança limita os campos visíveis nas pesquisas e relatórios de um usuário sem ocultar o registro completo?",
    q_en: "Which level of security limits fields visible in searches and reports for a user without hiding the entire record?",
    a_pt: "Segurança de nível de campo (Field-Level Security - FLS).",
    a_en: "Field-Level Security (FLS).",
  },
  {
    category_pt: "Configuração de Organização",
    category_en: "Organization Setup",
    q_pt: "Se você alterar o Calendário Fiscal para um Tipo Personalizado no Salesforce, isso pode ser revertido?",
    q_en: "If you change the Fiscal Calendar to a Custom Type in Salesforce, can this change be reverted?",
    a_pt: "Não. A ativação de anos fiscais personalizados é irreversível.",
    a_en: "No. Activating custom fiscal years is irreversible.",
  },
  {
    category_pt: "Interface de Usuário",
    category_en: "User Interface",
    q_pt: "Como um administrador pode ocultar um botão padrão 'Nova Oportunidade' no layout de uma página para um grupo de usuários?",
    q_en: "How can an administrator hide a standard 'New Opportunity' button on a page layout for a group of users?",
    a_pt: "Removendo o botão no Layout de Página atribuído ao perfil deles.",
    a_en: "By removing the button on the Page Layout assigned to their profile.",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "Se as restrições de IP de Login forem violadas, o que acontece com a tentativa de acesso do usuário?",
    q_en: "If Login IP restrictions are violated, what happens to the user's login attempt?",
    a_pt: "O login é negado imediatamente, mesmo com a senha correta.",
    a_en: "The login attempt is denied immediately, even with the correct password.",
  },
  {
    category_pt: "Gerenciamento de Vendas",
    category_en: "Sales Management",
    q_pt: "Qual objeto do Salesforce é usado para agrupar e gerenciar produtos vinculados a uma oportunidade com preços personalizados?",
    q_en: "Which Salesforce object is used to group and manage products linked to an opportunity with custom prices?",
    a_pt: "Livro de Preços (Price Book).",
    a_en: "Price Book.",
  },
  {
    category_pt: "Modelagem de Dados",
    category_en: "Data Modeling",
    q_pt: "Qual tipo de relacionamento não exige que o campo de relacionamento seja obrigatório no layout de página?",
    q_en: "Which relationship type does not require the relationship field to be mandatory on the page layout?",
    a_pt: "Relacionamento de Pesquisa (Lookup Relationship).",
    a_en: "Lookup Relationship.",
  },
  {
    category_pt: "Interface de Usuário",
    category_en: "User Interface",
    q_pt: "Qual ferramenta declarativa permite desenhar telas, atualizar registros e enviar e-mails de forma automatizada?",
    q_en: "Which declarative tool allows drawing screens, updating records, and sending automated emails?",
    a_pt: "Flow Builder (Fluxo de Tela).",
    a_en: "Flow Builder (Screen Flow).",
  },
  {
    category_pt: "Gerenciamento de Dados",
    category_en: "Data Management",
    q_pt: "Durante uma exportação completa do Salesforce, quais arquivos de mídia também podem ser baixados?",
    q_en: "During a full Salesforce data export, which media files can also be downloaded?",
    a_pt: "Anexos de notas, arquivos Chatter e documentos.",
    a_en: "Note attachments, Chatter files, and documents.",
  },
  {
    category_pt: "Análise de Dados",
    category_en: "Analytics",
    q_pt: "O que define quais campos e registros estão disponíveis em um relatório ao criá-lo?",
    q_en: "What defines which fields and records are available in a report when creating it?",
    a_pt: "O Tipo de Relatório (Report Type).",
    a_en: "The Report Type.",
  },
  {
    category_pt: "Análise de Dados",
    category_en: "Analytics",
    q_pt: "Como você permite que um usuário veja os dados de um painel (Dashboard) sob a perspectiva de outro usuário específico?",
    q_en: "How do you allow a user to view dashboard data from the perspective of another specific user?",
    a_pt: "Definindo o Painel como Dinâmico (Dynamic Dashboard).",
    a_en: "By setting the Dashboard as a Dynamic Dashboard.",
  },
  {
    category_pt: "Gerenciamento de Suporte",
    category_en: "Support Management",
    q_pt: "Onde um administrador cria as categorias de artigos técnicos que os clientes buscam em portais de ajuda?",
    q_en: "Where does an administrator create the technical article categories customers search for in help portals?",
    a_pt: "Base de Conhecimento do Salesforce (Salesforce Knowledge).",
    a_en: "Salesforce Knowledge.",
  },
  {
    category_pt: "Configuração de Organização",
    category_en: "Organization Setup",
    q_pt: "Se um usuário não conseguir fazer o login, em qual seção o administrador deve verificar o motivo da falha?",
    q_en: "If a user cannot log in, in which section should the administrator check the reason for the failure?",
    a_pt: "Histórico de Login (Login History) no cadastro do usuário.",
    a_en: "Login History on the user's detail record.",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "O que deve ser ativado para forçar o usuário a autenticar via celular com um código gerado ao fazer login?",
    q_en: "What must be enabled to force users to authenticate via mobile with a generated code when logging in?",
    a_pt: "Autenticação multifator (MFA).",
    a_en: "Multi-Factor Authentication (MFA).",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "As Regras de Compartilhamento (Sharing Rules) podem ser usadas para restringir o acesso a registros?",
    q_en: "Can Sharing Rules be used to restrict access to records?",
    a_pt: "Não. Elas são usadas apenas para estender (abrir) o acesso.",
    a_en: "No. They can only be used to extend (open up) access.",
  },
  {
    category_pt: "Gerenciamento de Vendas",
    category_en: "Sales Management",
    q_pt: "Qual recurso do Salesforce ajuda a rastrear a receita de marketing influenciada por múltiplas campanhas?",
    q_en: "Which Salesforce feature helps track marketing revenue influenced by multiple campaigns?",
    a_pt: "Influência de Campanha (Campaign Influence).",
    a_en: "Campaign Influence.",
  },
  {
    category_pt: "Modelagem de Dados",
    category_en: "Data Modeling",
    q_pt: "O que acontece ao excluir um campo personalizado do Salesforce?",
    q_en: "What happens when you delete a custom field in Salesforce?",
    a_pt: "O campo é movido para exclusão temporária por 15 dias, apagando dados e relações.",
    a_en: "The field is soft-deleted for 15 days, deleting data and relationships during this period.",
  },
  {
    category_pt: "Modelagem de Dados",
    category_en: "Data Modeling",
    q_pt: "Como se chama a ferramenta visual do Salesforce para criar relacionamentos entre objetos de forma interativa?",
    q_en: "What is the visual tool in Salesforce used to interactively build relationships between objects?",
    a_pt: "Schema Builder.",
    a_en: "Schema Builder.",
  },
  {
    category_pt: "Automação",
    category_en: "Automation",
    q_pt: "Quas os dois tipos de contexto de execução para fluxos acionados por registro (Record-Triggered Flows)?",
    q_en: "What are the two execution contexts for Record-Triggered Flows?",
    a_pt: "Antes de salvar (Before Save) e Depois de salvar (After Save).",
    a_en: "Before Save and After Save.",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "Se dois usuários possuem o mesmo perfil, mas um deles precisa editar registros adicionais de Oportunidades, qual recurso deve ser usado?",
    q_en: "If two users have the same profile but one needs to edit additional Opportunity records, which feature should be used?",
    a_pt: "Conjunto de Permissões (Permission Sets) ou Regras de Compartilhamento.",
    a_en: "Permission Sets or Sharing Rules.",
  },
  {
    category_pt: "Interface de Usuário",
    category_en: "User Interface",
    q_pt: "Como se chama a tecnologia do Salesforce que permite criar formulários e esconder campos dinamicamente com base em filtros?",
    q_en: "What is the Salesforce feature that allows dynamically hiding fields or creating forms based on filters?",
    a_pt: "Formulários Dinâmicos (Dynamic Forms).",
    a_en: "Dynamic Forms.",
  },
  {
    category_pt: "Configuração de Organização",
    category_en: "Organization Setup",
    q_pt: "Quais são as três moedas que podem ser configuradas como moeda corporativa padrão quando a Multi-Moeda está ativa?",
    q_en: "Which currency can be configured as corporate currency when Multi-Currency is active?",
    a_pt: "Qualquer moeda ativa cadastrada no Salesforce.",
    a_en: "Any active currency registered in Salesforce.",
  },
  {
    category_pt: "Gerenciamento de Vendas",
    category_en: "Sales Management",
    q_pt: "Qual funcionalidade padrão calcula a probabilidade matemática de fechamento com base no Estágio de uma Oportunidade?",
    q_en: "Which default functionality calculates mathematical probability of winning based on Opportunity Stage?",
    a_pt: "Mapeamento de Categoria de Previsão (Forecast Category Mapping).",
    a_en: "Forecast Category Mapping.",
  },
  {
    category_pt: "Gerenciamento de Vendas",
    category_en: "Sales Management",
    q_pt: "Qual recurso agrupa múltiplos usuários do Salesforce para trabalhar de forma colaborativa em uma mesma conta comercial?",
    q_en: "Which feature groups multiple Salesforce users to work collaboratively on a single commercial account?",
    a_pt: "Equipes de Contas (Account Teams).",
    a_en: "Account Teams.",
  },
  {
    category_pt: "Gerenciamento de Suporte",
    category_en: "Support Management",
    q_pt: "Como você agrupa casos em filas dinâmicas baseadas na prioridade para que os agentes de suporte escolham o próximo chamado?",
    q_en: "How do you group cases into priority-based dynamic queues for support agents to grab the next ticket?",
    a_pt: "Filas de Casos vinculadas a Regras de Atribuição.",
    a_en: "Case Queues linked with Assignment Rules.",
  },
  {
    category_pt: "Modelagem de Dados",
    category_en: "Data Modeling",
    q_pt: "Qual tipo de campo de relacionamento deve ser usado para vincular um registro a ele mesmo?",
    q_en: "Which relationship field type should be used to link a record to itself?",
    a_pt: "Pesquisa auto-referencial (Self-Lookup).",
    a_en: "Self-Lookup.",
  },
  {
    category_pt: "Gerenciamento de Dados",
    category_en: "Data Management",
    q_pt: "A exclusão de um campo personalizado de moeda impactará relatórios salvos?",
    q_en: "Does deleting a custom currency field impact saved reports?",
    a_pt: "Sim, o campo excluído será removido automaticamente de todos os relatórios.",
    a_en: "Yes, the deleted field will be automatically removed from all reports.",
  },
  {
    category_pt: "Análise de Dados",
    category_en: "Analytics",
    q_pt: "Quais são as pastas que controlam a segurança e acesso a relatórios e painéis?",
    q_en: "Which folders control the security and access to reports and dashboards?",
    a_pt: "Pastas de Relatórios (Report Folders) e Pastas de Painéis (Dashboard Folders).",
    a_en: "Report Folders and Dashboard Folders.",
  },
  {
    category_pt: "Análise de Dados",
    category_en: "Analytics",
    q_pt: "O que é um relatório unido (Joined Report)?",
    q_en: "What is a Joined Report?",
    a_pt: "Um relatório que exibe blocos diferentes de dados de múltiplos tipos de relatórios.",
    a_en: "A report displaying different blocks of data from multiple report types.",
  },
  {
    category_pt: "Automação",
    category_en: "Automation",
    q_pt: "Qual é a ordem de execução no Salesforce para Processos, Regras de Validação e Regras de Fluxo?",
    q_en: "What is the execution order in Salesforce for Processes, Validation Rules, and Flows?",
    a_pt: "1. Validação, 2. Fluxos (Flows), 3. Regras de Atribuição.",
    a_en: "1. Validation, 2. Flows, 3. Assignment Rules.",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "Qual recurso do Salesforce agrupa múltiplos conjuntos de permissões em uma única entidade de fácil atribuição?",
    q_en: "Which Salesforce feature bundles multiple permission sets into a single easily assigned entity?",
    a_pt: "Grupo de Conjuntos de Permissões (Permission Set Groups).",
    a_en: "Permission Set Groups.",
  },
  {
    category_pt: "Interface de Usuário",
    category_en: "User Interface",
    q_pt: "Quais são as três variações de layouts de página de registro do Lightning que podem ser criados no Lightning App Builder?",
    q_en: "What are three Lightning record page layout options that can be built in the Lightning App Builder?",
    a_pt: "Página do aplicativo, Página inicial, Página de registro.",
    a_en: "App Page, Home Page, Record Page.",
  },
  {
    category_pt: "Modelagem de Dados",
    category_en: "Data Modeling",
    q_pt: "Ao converter um relacionamento de Pesquisa para Mestre-Detalhes, o que é mandatório?",
    q_en: "When converting a Lookup relationship to a Master-Detail relationship, what is mandatory?",
    a_pt: "Todos os registros existentes do objeto filho devem possuir um valor de relacionamento preenchido.",
    a_en: "All existing records of the child object must have a populated relationship value.",
  },
  {
    category_pt: "Gerenciamento de Dados",
    category_en: "Data Management",
    q_pt: "Qual recurso do Salesforce impede que registros sejam excluídos permanentemente se violarem regras de conformidade?",
    q_en: "Which Salesforce feature prevents records from being permanently deleted if they violate compliance rules?",
    a_pt: "Regra de Validação personalizada avaliando o campo 'IsDeleted' (via Apex/Flow).",
    a_en: "Custom Validation Rule evaluating 'IsDeleted' field (via Apex/Flow).",
  },
  {
    category_pt: "Gerenciamento de Vendas",
    category_en: "Sales Management",
    q_pt: "Como se chama o recurso que permite compartilhar relatórios programados para envio por e-mail a usuários do Salesforce?",
    q_en: "What is the feature that allows sharing scheduled reports via email to Salesforce users?",
    a_pt: "Assinatura de Relatórios (Report Subscription).",
    a_en: "Report Subscription.",
  },
  {
    category_pt: "Configuração de Organização",
    category_en: "Organization Setup",
    q_pt: "Como um administrador pode suspender temporariamente o login de um usuário sem excluí-lo?",
    q_en: "How can an administrator temporarily suspend a user's login without deleting their record?",
    a_pt: "Congelando o usuário (Freeze User).",
    a_en: "By freezing the user (Freeze).",
  },
  {
    category_pt: "Acesso e Segurança",
    category_en: "Access and Security",
    q_pt: "Se a OWD de Leads é privada, como o gerente de vendas do Nordeste compartilha leads automaticamente com o gerente do Sudeste?",
    q_en: "If Lead OWD is private, how does the Northeast sales manager automatically share leads with the Southeast manager?",
    a_pt: "Usando uma Regra de Compartilhamento baseada em critérios ou proprietário.",
    a_en: "Using a criteria-based or owner-based Sharing Rule.",
  },
];

// System Translation Dictionary
const translationDict = {
  pt: {
    lblScore: "Pontuação",
    lblTimer: "Tempo",
    lblLives: "Vidas",
    comboActive: "Combo 2x Ativo!",
    flipHint: "Clique para revelar a resposta",
    ratingHint: "Avalie sua resposta abaixo",
    ansTag: "Resposta",
    btnWrong: "Errei",
    btnRight: "Acertei",
    pauseTitle: "Jogo Pausado",
    pauseDesc:
      "O idioma foi alterado! Aproveite para respirar. Clique no botão abaixo para retomar o desafio de onde parou.",
    btnResume: "Retomar Desafio",
    lostTitle: "Fim de Jogo",
    lostDesc:
      "As vidas acabaram! Estude os conceitos chaves de segurança (OWDs, Perfis, Regras de Compartilhamento) antes de tentar novamente.",
    finalScoreLost: "Pontuação Final",
    btnRestart: "Tentar Novamente",
    winTitle: "Excelente! 🎓",
    winDesc:
      "Você completou o deck intensivo de 60 questões! Você está preparadíssimo para encarar o exame oficial de Administrador Salesforce.",
    finalScoreWon: "Pontuação Final",
    btnPlayAgain: "Jogar Novamente",
  },
  en: {
    lblScore: "Score",
    lblTimer: "Time",
    lblLives: "Lives",
    comboActive: "Combo 2x Active!",
    flipHint: "Click to reveal the answer",
    ratingHint: "Rate your answer below",
    ansTag: "Answer",
    btnWrong: "Incorrect",
    btnRight: "Correct",
    pauseTitle: "Game Paused",
    pauseDesc:
      "Language toggled! Use this break to gather your thoughts. Click below to resume the high-intensity challenge.",
    btnResume: "Resume Challenge",
    lostTitle: "Game Over",
    lostDesc:
      "Out of lives! Master the core security concepts (OWDs, Profiles, Sharing Rules) before trying again.",
    finalScoreLost: "Final Score",
    btnRestart: "Try Again",
    winTitle: "Excellent! 🎓",
    winDesc:
      "You have completed the intensive 60-question deck! You are fully prepared for the official Salesforce Administrator exam.",
    finalScoreWon: "Final Score",
    btnPlayAgain: "Play Again",
  },
};

let currentLanguage = "pt"; // 'pt' or 'en'
let shuffledDeck = [];
let currentIndex = 0;
let score = 0;
let lives = 3;
let comboStreak = 0;
let timerSeconds = 15;
let timerId = null;
let cardFlipped = false;

function toggleLanguage() {
  // Toggle core state
  currentLanguage = currentLanguage === "pt" ? "en" : "pt";

  // Render Switch buttons state
  if (currentLanguage === "pt") {
    document.getElementById("btn-lang-pt").classList.add("active");
    document.getElementById("btn-lang-en").classList.remove("active");
  } else {
    document.getElementById("btn-lang-pt").classList.remove("active");
    document.getElementById("btn-lang-en").classList.add("active");
  }

  // PAUSE THE TIMER on transition
  pauseGame();

  // Refresh UI Texts
  refreshUiLanguage();
}

function refreshUiLanguage() {
  const strings = translationDict[currentLanguage];

  // Labels & HUD
  document.getElementById("lbl-score").innerText = strings.lblScore;
  document.getElementById("lbl-timer").innerText = strings.lblTimer;
  document.getElementById("lbl-lives").innerText = strings.lblLives;
  document.getElementById("combo-badge").innerText = strings.comboActive;
  document.getElementById("txt-flip-hint").innerText = strings.flipHint;
  document.getElementById("txt-rating-hint").innerText = strings.ratingHint;
  document.getElementById("lbl-answer-tag").innerText = strings.ansTag;
  document.getElementById("btn-lbl-wrong").innerText = strings.btnWrong;
  document.getElementById("btn-lbl-right").innerText = strings.btnRight;

  // Modals
  document.getElementById("pause-title").innerText = strings.pauseTitle;
  document.getElementById("pause-desc").innerText = strings.pauseDesc;
  document.getElementById("btn-resume").innerText = strings.btnResume;

  document.getElementById("lost-title").innerText = strings.lostTitle;
  document.getElementById("lost-desc").innerText = strings.lostDesc;
  document.getElementById("lbl-final-score-lost").innerText =
    strings.finalScoreLost;
  document.getElementById("btn-restart").innerText = strings.btnRestart;

  document.getElementById("win-title").innerText = strings.winTitle;
  document.getElementById("win-desc").innerText = strings.winDesc;
  document.getElementById("lbl-final-score-won").innerText =
    strings.finalScoreWon;
  document.getElementById("btn-play-again").innerText = strings.btnPlayAgain;

  // Render current card text with matching language
  if (shuffledDeck.length > 0) {
    renderCurrentCardContent();
  }
}

function renderCurrentCardContent() {
  const cardData = shuffledDeck[currentIndex];
  document.getElementById("card-index").innerText =
    `${currentIndex + 1}/${shuffledDeck.length}`;

  if (currentLanguage === "pt") {
    document.getElementById("card-category").innerText = cardData.category_pt;
    document.getElementById("card-question").innerText = cardData.q_pt;
    document.getElementById("card-answer").innerText = cardData.a_pt;
  } else {
    document.getElementById("card-category").innerText = cardData.category_en;
    document.getElementById("card-question").innerText = cardData.q_en;
    document.getElementById("card-answer").innerText = cardData.a_en;
  }
}

function startGame() {
  // Shuffle
  shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
  currentIndex = 0;
  score = 0;
  lives = 3;
  comboStreak = 0;
  cardFlipped = false;

  // Close modals
  document.getElementById("screen-paused").classList.remove("active");
  document.getElementById("screen-game-over").classList.remove("active");
  document.getElementById("screen-victory").classList.remove("active");

  refreshUiLanguage();
  showCard();
}

function showCard() {
  if (currentIndex >= shuffledDeck.length) {
    endGame(true);
    return;
  }

  cardFlipped = false;
  document.getElementById("card").classList.remove("flipped");
  document.getElementById("controls").classList.remove("enabled");

  renderCurrentCardContent();

  // Progress bar mapping
  const progressPercent = (currentIndex / shuffledDeck.length) * 100;
  document.getElementById("progress").style.width = `${progressPercent}%`;

  startTimer();
}

function flipCard() {
  if (cardFlipped) return;
  cardFlipped = true;
  document.getElementById("card").classList.add("flipped");
  document.getElementById("controls").classList.add("enabled");
  clearInterval(timerId); // Pause the count since they are reading/revealed
}

function startTimer() {
  clearInterval(timerId);
  timerSeconds = 15;
  updateTimerDisplay();

  timerId = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();

    if (timerSeconds <= 0) {
      clearInterval(timerId);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerEl = document.getElementById("timer");
  timerEl.innerText = `${timerSeconds}s`;

  if (timerSeconds <= 5) {
    timerEl.classList.add("hurry");
  } else {
    timerEl.classList.remove("hurry");
  }
}

function handleTimeout() {
  flipCard();
  handleAnswer(false);
}

function handleAnswer(isCorrect) {
  clearInterval(timerId);

  if (isCorrect) {
    comboStreak++;
    let pointsEarned = 100;

    if (comboStreak >= 3) {
      pointsEarned = 200; // Double points
      document.getElementById("combo-badge").classList.add("active");
    }
    score += pointsEarned;
  } else {
    comboStreak = 0;
    lives--;
    document.getElementById("combo-badge").classList.remove("active");

    if (lives <= 0) {
      endGame(false);
      return;
    }
  }

  updateHUD();

  // Slipped transition to next card
  setTimeout(() => {
    currentIndex++;
    showCard();
  }, 500);
}

function updateHUD() {
  document.getElementById("score").innerText = score;
  document.getElementById("lives").innerText = "❤️".repeat(lives);
  if (lives === 0) {
    document.getElementById("lives").innerText = "💀";
  }
}

function pauseGame() {
  clearInterval(timerId);
  document.getElementById("screen-paused").classList.add("active");
}

function resumeGame() {
  document.getElementById("screen-paused").classList.remove("active");
  // Resume the timer with the saved remaining seconds
  if (!cardFlipped) {
    timerId = setInterval(() => {
      timerSeconds--;
      updateTimerDisplay();

      if (timerSeconds <= 0) {
        clearInterval(timerId);
        handleTimeout();
      }
    }, 1000);
  }
}

function endGame(isWon) {
  clearInterval(timerId);
  if (isWon) {
    document.getElementById("final-score-won").innerText = score;
    document.getElementById("screen-victory").classList.add("active");
  } else {
    document.getElementById("final-score-lost").innerText = score;
    document.getElementById("screen-game-over").classList.add("active");
  }
}

function resetGame() {
  startGame();
}

// Auto start on page initialization
window.onload = startGame;
