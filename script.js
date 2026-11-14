/* ==========================================================================
   ECCO — DADOS OFICIAIS DO DOCUMENTO-MESTRE + LÓGICA DO SITE (ROTEAMENTO, CMS E CHECKOUT)
   ========================================================================== */

const ECCO_DEFAULT_DATA = {
  // 1. Configurações Institucionais e Integrações (Preencher quando confirmadas)
  config: {
    nome: "ECCO",
    conceito: "Um espaço para experimentar a arte.",
    chamadaPrincipal: "Um espaço onde a arte encontra pessoas, ideias e experiências.",
    dataFundacao: "9 de março de 2024",
    bairro: "Bairro Bandeirantes",
    cidade: "Juiz de Fora/MG",
    instagramHandle: "@ecco.cultural",
    instagramUrl: "https://www.instagram.com/ecco.cultural/",
    // Campos pendentes conforme Documento-Mestre:
    enderecoCompleto: "", // [PENDENTE: Rua, número, complemento e CEP]
    whatsappNumero: "",   // [PENDENTE: Número oficial com DDI+DDD, ex: 5532999999999]
    emailOficial: "",     // [PENDENTE: E-mail institucional, caso seja disponibilizado]
    gatewayPagamento: ""  // [PENDENTE: Plataforma de pagamento (Pix, Crédito e Débito)]
  },

  // 2. Valores Fundamentais ("No que acreditamos")
  valores: [
    {
      titulo: "Acessibilidade",
      descricao: "Arte que possa estar ao alcance de todos."
    },
    {
      titulo: "Criatividade",
      descricao: "Espaço para descobrir e criar."
    },
    {
      titulo: "Encontro",
      descricao: "Arte como meio de aproximar as pessoas."
    },
    {
      titulo: "Transformação",
      descricao: "Experiências que continuam mesmo fora do Ecco."
    }
  ],

  // 3. Idealizadores ("Quem faz o Ecco") — Sem biografias fictícias
  idealizadores: [
    {
      id: "daniel-meotte",
      nome: "Daniel Meotte",
      papel: "Ator e diretor",
      biografiaStatus: "Biografia individual em desenvolvimento. A trajetória artística de Daniel Meotte será inserida antes da publicação oficial.",
      fotoLabel: "Retrato individual de Daniel Meotte",
      fotoRecomendacao: "Fotografia real de Daniel Meotte no Ecco ou em processo teatral."
    },
    {
      id: "melissa-coppe",
      nome: "Melissa Coppe",
      papel: "Artista plástica e curadora",
      biografiaStatus: "Biografia individual em desenvolvimento. A trajetória artística de Melissa Coppe será inserida antes da publicação oficial.",
      fotoLabel: "Retrato individual de Melissa Coppe",
      fotoRecomendacao: "Fotografia real de Melissa Coppe no atelier ou na Galeria Subversivos."
    }
  ],

  // 4. Modalidades de Aulas
  modalidadesAulas: [
    {
      id: "teatro",
      nome: "Teatro",
      chamada: "O corpo como linguagem. A imaginação como ponto de partida.",
      paragrafos: [
        "As aulas de teatro são espaços de investigação, experimentação e criação. Por meio de jogos teatrais, improvisações e exercícios de expressão, os alunos desenvolvem recursos para construir personagens, interpretar textos e criar suas próprias cenas.",
        "Trabalhamos expressão corporal e vocal, interpretação, dramaturgia, escrita e improvisação. Mais do que aprender a representar, a proposta é descobrir possibilidades de comunicação e criação através do teatro."
      ],
      duracao: "2 horas por aula",
      turma: "Turmas de até 10 alunos",
      professor: "Daniel Meotte",
      mensalidade: "R$ 70",
      observacaoExtra: "Não há taxa de matrícula.",
      fotoLabel: "Aula de Teatro no Ecco",
      fotoRecomendacao: "Registro real dos alunos em jogos teatrais, expressão corporal ou improvisação."
    },
    {
      id: "pintura",
      nome: "Pintura",
      chamada: "Experimentar as cores. Descobrir possibilidades. Construir um olhar próprio.",
      paragrafos: [
        "Nas aulas de pintura do Ecco, o aprendizado acontece pela experimentação.",
        "Trabalhamos os fundamentos da pintura, com foco na técnica de guache, explorando pinceladas, misturas, cores e composição. Os exercícios iniciais são conduzidos pela professora, criando uma base técnica para que cada aluno desenvolva progressivamente suas próprias ideias e pesquisas visuais.",
        "Um espaço para aprender técnicas, experimentar materiais e descobrir caminhos próprios na pintura."
      ],
      duracao: "1h30 por aula",
      turma: "Turmas de até 8 alunos",
      professor: "Melissa Coppe",
      mensalidade: "R$ 70",
      observacaoExtra: "Materiais incluídos. Não há taxa de matrícula.",
      fotoLabel: "Aula de Pintura no Ecco",
      fotoRecomendacao: "Registro real de experimentação com guache, paletas de cores e processo criativo."
    },
    {
      id: "violao",
      nome: "Violão",
      chamada: "Mais do que tocar músicas: entender a música.",
      paragrafos: [
        "As aulas de violão são individuais e têm como objetivo desenvolver a autonomia musical de cada aluno.",
        "O trabalho vai além da reprodução de cifras. Exploramos a compreensão da lógica musical, o desenvolvimento da percepção auditiva e a capacidade de reconhecer e tirar músicas de ouvido.",
        "A proposta é que o aluno compreenda o instrumento e desenvolva independência para tocar, aprender e explorar novas possibilidades musicais."
      ],
      duracao: "1 hora",
      turma: "Aulas individuais (a partir de 18 anos)",
      professor: "Daniel Meotte",
      mensalidade: "R$ 80",
      observacaoExtra: "Não há taxa de matrícula.",
      fotoLabel: "Aula Individual de Violão no Ecco",
      fotoRecomendacao: "Registro real de prática musical e acompanhamento individual de violão."
    }
  ],

  // 5. Tabelas de Horários das Turmas (Última página do PDF — Associação pendente)
  tabelasHorarios: [
    {
      id: "tabela-1",
      titulo: "Grade de Turmas — Grupo A",
      statusModalidade: "Associação de modalidade pendente de confirmação antes da publicação",
      linhas: [
        { turma: "Juvenil", diaHorario: "Sexta-feira, 14h30", publico: "12 a 17 anos" },
        { turma: "Adulto", diaHorario: "Quarta-feira, 19h", publico: "A partir de 18 anos" },
        { turma: "Adulto", diaHorario: "Sábado, 10h", publico: "A partir de 18 anos" }
      ]
    },
    {
      id: "tabela-2",
      titulo: "Grade de Turmas — Grupo B",
      statusModalidade: "Associação de modalidade pendente de confirmação antes da publicação",
      linhas: [
        { turma: "Adulto", diaHorario: "Terça-feira, 19h", publico: "Adultos" },
        { turma: "Adulto", diaHorario: "Quarta-feira, 10h", publico: "Adultos" },
        { turma: "Juvenil", diaHorario: "Quinta-feira, 15h", publico: "10 a 15 anos" },
        { turma: "Mista", diaHorario: "Sexta-feira, 16h30", publico: "Adolescentes e adultos" },
        { turma: "Adulto", diaHorario: "Sábado, 10h", publico: "Adultos" },
        { turma: "Adulto", diaHorario: "Sábado, 14h", publico: "Adultos" }
      ]
    }
  ],

  // 6. Oficinas Mensais (Vitrine Dinâmica)
  oficinas: [
    {
      id: "oficina-pintura-vinil",
      nome: "Pintura em Vinil",
      descricao: "Experiência prática de pintura e intervenção visual sobre discos de vinil. Não é preciso ter experiência prévia ou saber desenhar: o processo importa tanto quanto o resultado.",
      data: "Sábado — [Data a confirmar]",
      dataOrdenacao: "2026-12-05",
      horario: "19h",
      duracao: "Aproximadamente 2 horas",
      valor: 50,
      materiais: "Incluídos",
      vagasDisponiveis: "A confirmar",
      statusPublicacao: "Provisório — Confirmar data e vagas",
      fotoLabel: "Oficina de Pintura em Vinil",
      fotoRecomendacao: "Fotografia real do processo ou dos discos pintados na oficina de vinil."
    },
    {
      id: "oficina-criacao-carimbos",
      nome: "Criação de Carimbos",
      descricao: "Experimentação gráfica artesanal: desenhe, entalhe e imprima suas próprias matrizes de carimbo explorando texturas, repetições e composições livres.",
      data: "Domingo — [Data a confirmar]",
      dataOrdenacao: "2026-12-06",
      horario: "Manhã (horário a confirmar)",
      duracao: "Aproximadamente 2 horas",
      valor: 50,
      materiais: "Incluídos",
      vagasDisponiveis: "A confirmar",
      statusPublicacao: "Provisório — Confirmar data e vagas",
      fotoLabel: "Oficina de Criação de Carimbos",
      fotoRecomendacao: "Fotografia real das matrizes, tintas e impressões feitas pelos participantes."
    },
    {
      id: "oficina-noite-neon",
      nome: "Noite Neon",
      descricao: "Uma imersão sensorial com tintas fluorescentes, luz negra e experimentação cromática aberta a todos os públicos.",
      data: "Sábado — [Data a confirmar]",
      dataOrdenacao: "2026-12-12",
      horario: "19h",
      duracao: "Aproximadamente 2 horas",
      valor: 50,
      materiais: "Incluídos",
      vagasDisponiveis: "A confirmar",
      statusPublicacao: "Provisório — Confirmar data e vagas",
      fotoLabel: "Oficina Noite Neon",
      fotoRecomendacao: "Fotografia real da atividade sob luz negra com tintas fluorescentes."
    }
  ],

  // 7. Espetáculos (Vitrine Dinâmica — Sala Iris Alves)
  espetaculos: [
    {
      id: "espetaculo-teatro-do-contra-01",
      nome: "Montagem Repertório — Teatro do Contra",
      companhia: "Teatro do Contra",
      sinopse: "Espetáculo autoral nascido da pesquisa sobre as contradições, tensões e ambiguidades que atravessam as relações humanas na Sala Iris Alves.",
      classificacao: "[Pendente de confirmação]",
      duracao: "[Pendente de confirmação]",
      data: "[Data a confirmar]",
      dataOrdenacao: "2026-12-19",
      horario: "[Horário a confirmar]",
      valor: 15,
      observacaoValor: "Valor usual praticado: R$ 15 (sujeito a alteração conforme o espetáculo). Política de meia-entrada pendente.",
      lugaresDisponiveis: "Até 30 lugares (Capacidade Sala Iris Alves)",
      statusPublicacao: "Ficha técnica e data pendentes de confirmação",
      fotoLabel: "Cartaz / Registro Oficial do Espetáculo",
      fotoRecomendacao: "Fotografia oficial de cena ou cartaz do espetáculo do Teatro do Contra."
    }
  ],

  // 8. Galeria Subversivos — Exposições e Obras
  exposicoes: [
    {
      id: "expo-atual-subversivos",
      titulo: "Mostra Atual — Galeria Subversivos",
      subtitulo: "Circulação da produção visual independente de Juiz de Fora",
      descricao: "A Subversivos já realizou 17 exposições reunindo pintura, colagem, escultura e pesquisas visuais de artistas locais e em início de trajetória. Visitação livre durante o funcionamento da galeria.",
      periodo: "Visitação: Terça a sábado (9h às 17h) | Domingo (10h às 12h)",
      artistas: "[Lista de artistas participantes da exposição atual a confirmar]",
      fotoLabel: "Registro da Exposição Atual na Subversivos",
      fotoRecomendacao: "Fotografia real da montagem expositiva atual na Galeria Subversivos."
    }
  ],

  obras: [
    {
      id: "obra-modelo-01",
      titulo: "[Título da Obra — Aguardando cadastro real]",
      artista: "[Nome do Artista — Juiz de Fora/MG]",
      tecnica: "Pintura / Técnica mista (exemplo de ficha técnica)",
      dimensoes: "[Dimensões em cm a confirmar]",
      preco: null,
      disponivel: true,
      observacao: "Item modelo estruturado conforme o Documento-Mestre. Substituir pelos dados reais do artista e valor antes da publicação.",
      fotoLabel: "Fotografia da Obra (Disponível)",
      fotoRecomendacao: "Fotografia frontal em alta resolução da obra exposta."
    },
    {
      id: "obra-modelo-02",
      titulo: "[Título da Obra — Acervo / Não comercializada]",
      artista: "[Nome do Artista — Juiz de Fora/MG]",
      tecnica: "Colagem / Escultura (exemplo de ficha técnica)",
      dimensoes: "[Dimensões em cm a confirmar]",
      preco: null,
      disponivel: false,
      observacao: "Exemplo de obra indisponível para venda online (botão de compra oculto conforme regra editorial).",
      fotoLabel: "Fotografia da Obra (Indisponível para venda)",
      fotoRecomendacao: "Fotografia da obra em exposição."
    }
  ],

  // 9. Tabela de Locação ("Realize no Ecco" — Última página do PDF)
  valoresLocacao: [
    { dia: "Quinta-feira", valorHora: "R$ 80" },
    { dia: "Sexta-feira", valorHora: "R$ 90" },
    { dia: "Sábado", valorHora: "R$ 120" },
    { dia: "Domingo", valorHora: "R$ 100" }
  ],

  // 10. Agenda Geral (Marco Histórico / Eventos Passados)
  eventosPassados: [
    {
      id: "inauguracao-ecco-2024",
      categoria: "Atividades especiais",
      titulo: "Inauguração do Ecco — Espaço de Arte e Experimentação",
      data: "9 de março de 2024",
      dataOrdenacao: "2024-03-09",
      local: "Bairro Bandeirantes, Juiz de Fora/MG",
      resumo: "Abertura oficial do espaço criado por Melissa Coppe e Daniel Meotte para tornar a arte possível na vida das pessoas e dos artistas."
    }
  ],

  // 11. Checklist de Pendências Oficiais
  pendenciasPublicacao: [
    "Escrever biografias individuais de Daniel Meotte e Melissa Coppe.",
    "Completar dados de contato e localização (endereço completo no bairro Bandeirantes, número oficial de WhatsApp e e-mail).",
    "Confirmar associação das duas tabelas de horários das aulas (Teatro e Pintura) e detalhes administrativos (vencimento, reposição, cancelamento e materiais).",
    "Definir regras de compra, cancelamento e reembolso de oficinas e ingressos.",
    "Definir formulário/canal definitivo para propostas de espetáculos, exposições e oficinas.",
    "Definir regras de locação: duração mínima, forma de pagamento, política de cancelamento e materiais de apoio incluídos.",
    "Completar informações técnicas de cada espetáculo: duração, classificação indicativa, política de meia-entrada e ficha artística.",
    "Definir dados técnicos e operacionais da plataforma de pagamento (Pix, crédito e débito) e emissão de comprovantes.",
    "Revisar todos os horários, datas, vagas e valores antes da publicação."
  ]
};

(function () {
  const STORAGE_KEY = "ecco_cms_data_v1";

  function loadEccoData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Não foi possível ler dados locais:", e);
    }
    return JSON.parse(JSON.stringify(ECCO_DEFAULT_DATA));
  }

  let state = {
    data: loadEccoData(),
    currentRoute: "inicio",
    agendaFiltro: "Todos",
    agendaPeriodo: "proximas"
  };

  const appRoot = document.getElementById("appRoot");
  const modal = document.getElementById("universalModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalEyebrow = document.getElementById("modalEyebrow");
  const modalBody = document.getElementById("modalBody");

  /* --------------------------------------------------------------------------
     UTILITÁRIOS DE UI E MOLDURAS FOTOGRÁFICAS
     -------------------------------------------------------------------------- */
  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderPhotoSlot({ label, recommendation, variant = "", badge = "FOTOGRAFIA REAL DO ECCO" }) {
    const cls = variant ? `photo-slot photo-slot--${variant}` : "photo-slot";
    return `
      <figure class="${cls}" aria-label="${escapeHtml(label)}">
        <span class="photo-slot__badge">${escapeHtml(badge)}</span>
        <figcaption class="photo-slot__caption">
          <strong>${escapeHtml(label)}</strong>
          <span>Inserir arquivo real: ${escapeHtml(recommendation)}</span>
        </figcaption>
      </figure>
    `;
  }

  function openModal({ eyebrow = "ECCO", title = "", html = "" }) {
    modalEyebrow.textContent = eyebrow;
    modalTitle.textContent = title;
    modalBody.innerHTML = html;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  /* --------------------------------------------------------------------------
     ROTEAMENTO ENTRE AS 9 PÁGINAS
     -------------------------------------------------------------------------- */
  const VALID_ROUTES = [
    "inicio",
    "o-ecco",
    "aulas",
    "oficinas",
    "teatro",
    "subversivos",
    "realize",
    "agenda",
    "contato"
  ];

  function navigateTo(route, updateHash = true) {
    const target = VALID_ROUTES.includes(route) ? route : "inicio";
    state.currentRoute = target;

    if (updateHash) {
      window.history.pushState(null, "", `#${target}`);
    }

    document.querySelectorAll("[data-route]").forEach((el) => {
      el.classList.toggle("active", el.getAttribute("data-route") === target);
    });

    renderCurrentPage();
    closeMobileDrawer();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderCurrentPage() {
    const builders = {
      "inicio": renderHomePage,
      "o-ecco": renderOEccoPage,
      "aulas": renderAulasPage,
      "oficinas": renderOficinasPage,
      "teatro": renderTeatroPage,
      "subversivos": renderSubversivosPage,
      "realize": renderRealizePage,
      "agenda": renderAgendaPage,
      "contato": renderContatoPage
    };

    const renderFn = builders[state.currentRoute] || renderHomePage;
    appRoot.innerHTML = `<div class="page-view">${renderFn()}</div>`;
    bindPageEvents();
  }

  /* --------------------------------------------------------------------------
     1. PÁGINA INICIAL — HOME
     -------------------------------------------------------------------------- */
  function renderHomePage() {
    const { config, oficinas, espetaculos, exposicoes } = state.data;
    const expoAtual = exposicoes[0];

    return `
      <!-- Seção Principal (Hero) -->
      <section class="hero-home">
        <div class="container hero-home__layout">
          <div>
            <div class="hero-home__kicker">
              <span class="hero-home__dot" aria-hidden="true"></span>
              <span>JUIZ DE FORA / MG • DESDE 2024</span>
            </div>
            <h1 class="hero-home__title">
              Um espaço para <span class="gradient-text">experimentar</span> a arte.
            </h1>
            <p class="hero-home__lead">
              ${escapeHtml(config.chamadaPrincipal)}
            </p>
            <div class="hero-home__actions">
              <a href="#agenda" data-route="agenda" class="btn btn--primary">Explorar programação</a>
              <a href="#o-ecco" data-route="o-ecco" class="btn btn--outline">Conhecer o Ecco</a>
            </div>
            <div class="hero-home__meta">
              <div class="hero-home__meta-item">
                <strong>4 Frentes</strong>
                <span>Aulas, Oficinas, Teatro e Galeria</span>
              </div>
              <div class="hero-home__meta-item">
                <strong>17 Exposições</strong>
                <span>Realizadas na Galeria Subversivos</span>
              </div>
              <div class="hero-home__meta-item">
                <strong>Sala Iris Alves</strong>
                <span>Teatro independente (até 30 lugares)</span>
              </div>
            </div>
          </div>

          <div>
            ${renderPhotoSlot({
              variant: "hero",
              badge: "CAPA HORIZONTAL • REGISTRO REAL",
              label: "O Ecco em atividade — Espaço e Pessoas",
              recommendation: "Fotografia horizontal e real do Ecco em atividade, mostrando o espaço e pessoas (evitar banco de imagens)."
            })}
          </div>
        </div>
      </section>

      <!-- Apresentação do Ecco -->
      <section class="section section--alt">
        <div class="container manifesto-grid">
          <div>
            <span class="mono-tag">01 / APRESENTAÇÃO</span>
            <h2 class="manifesto-statement" style="margin-top: 12px;">
              Um espaço independente de arte e experimentação em Juiz de Fora.
            </h2>
          </div>
          <div class="manifesto-body">
            <p>
              <strong>Um espaço onde a arte encontra pessoas, ideias e experiências.</strong>
            </p>
            <p>
              O Ecco é um espaço independente de arte e experimentação em Juiz de Fora. Um lugar para aprender, criar, apresentar, experimentar e descobrir diferentes possibilidades artísticas.
            </p>
            <p>
              Aulas, oficinas, exposições e espetáculos fazem parte de uma programação que aproxima pessoas da arte e cria novas oportunidades para artistas.
            </p>
            <div style="margin-top: 24px;">
              <a href="#o-ecco" data-route="o-ecco" class="btn btn--dark btn--sm">Ler a história completa do Ecco →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Nossas Experiências (4 Frentes Principais) -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="mono-tag">02 / NOSSAS EXPERIÊNCIAS</span>
              <h2 class="section-header__title">Quatro frentes de criação</h2>
            </div>
            <p class="section-header__lead">
              Formação artística contínua, experimentação mensal, cena teatral independente e circulação de artes visuais.
            </p>
          </div>

          <div class="experiences-grid">
            <article class="exp-card">
              <div>
                ${renderPhotoSlot({
                  badge: "IMAGEM AULAS",
                  label: "Aulas no Ecco",
                  recommendation: "Registro real de alunos em processo de criação."
                })}
                <span class="exp-card__num">01 / FORMAÇÃO</span>
                <h3>Aulas</h3>
                <p>Teatro, pintura e violão em turmas reduzidas ou individuais, com acompanhamento próximo e liberdade de criação.</p>
              </div>
              <a href="#aulas" data-route="aulas" class="btn btn--outline btn--sm">Conhecer aulas →</a>
            </article>

            <article class="exp-card">
              <div>
                ${renderPhotoSlot({
                  badge: "IMAGEM OFICINAS",
                  label: "Oficinas Mensais",
                  recommendation: "Fotografia real de oficina criativa no espaço."
                })}
                <span class="exp-card__num">02 / EXPERIMENTAÇÃO</span>
                <h3>Oficinas</h3>
                <p>Não precisa saber fazer. Precisa querer experimentar. Encontros práticos com materiais incluídos.</p>
              </div>
              <a href="#oficinas" data-route="oficinas" class="btn btn--outline btn--sm">Ver oficinas →</a>
            </article>

            <article class="exp-card">
              <div>
                ${renderPhotoSlot({
                  badge: "IMAGEM TEATRO",
                  label: "Teatro & Sala Iris Alves",
                  recommendation: "Registro de espetáculo do Teatro do Contra."
                })}
                <span class="exp-card__num">03 / CENA INDEPENDENTE</span>
                <h3>Teatro</h3>
                <p>Casa do Teatro do Contra e da Sala Iris Alves. Espetáculos autorais e abertura para companhias convidadas.</p>
              </div>
              <a href="#teatro" data-route="teatro" class="btn btn--outline btn--sm">Entrar no teatro →</a>
            </article>

            <article class="exp-card">
              <div>
                ${renderPhotoSlot({
                  badge: "IMAGEM SUBVERSIVOS",
                  label: "Galeria Subversivos",
                  recommendation: "Fotografia real de exposição na Subversivos."
                })}
                <span class="exp-card__num">04 / ARTES VISUAIS</span>
                <h3>Galeria Subversivos</h3>
                <p>Exposição e circulação da produção visual de Juiz de Fora, com foco em artistas em início de trajetória.</p>
              </div>
              <a href="#subversivos" data-route="subversivos" class="btn btn--outline btn--sm">Visitar galeria →</a>
            </article>
          </div>
        </div>
      </section>

      <!-- Próximas Oficinas -->
      <section class="section section--alt">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="mono-tag">03 / PRÓXIMAS OFICINAS</span>
              <h2 class="section-header__title">Experiências para participar</h2>
            </div>
            <a href="#oficinas" data-route="oficinas" class="btn btn--outline btn--sm">Ver todas as oficinas</a>
          </div>

          <div class="cards-grid">
            ${oficinas.map((of) => renderOficinaCard(of)).join("")}
          </div>
        </div>
      </section>

      <!-- Espetáculos em Cartaz -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="mono-tag">04 / ESPETÁCULOS EM CARTAZ</span>
              <h2 class="section-header__title">Sala Iris Alves</h2>
            </div>
            <a href="#teatro" data-route="teatro" class="btn btn--outline btn--sm">Conhecer o Teatro no Ecco</a>
          </div>

          <div class="cards-grid">
            ${espetaculos.map((esp) => renderEspetaculoCard(esp)).join("")}
          </div>
        </div>
      </section>

      <!-- Galeria Subversivos em Destaque -->
      <section class="section section--alt">
        <div class="container page-hero__grid">
          <div>
            <span class="mono-tag">05 / GALERIA SUBVERSIVOS</span>
            <h2 class="section-header__title">A arte precisa de espaço. E de circulação.</h2>
            <p class="page-hero__text" style="margin-top: 16px;">
              A Subversivos é a galeria de artes visuais do Ecco, um espaço dedicado à exposição e à circulação da produção artística. Já realizamos <strong>17 exposições</strong> e seguimos abrindo as portas para novas pesquisas, linguagens e artistas.
            </p>
            ${expoAtual ? `
              <div class="editorial-notice">
                <strong>Em exibição: ${escapeHtml(expoAtual.titulo)}</strong>
                <p>${escapeHtml(expoAtual.periodo)}</p>
              </div>
            ` : ""}
            <div style="margin-top: 22px; display: flex; gap: 12px; flex-wrap: wrap;">
              <a href="#subversivos" data-route="subversivos" class="btn btn--primary">Conhecer a Subversivos</a>
              <a href="#contato" data-route="contato" class="btn btn--outline">Horários de visitação</a>
            </div>
          </div>
          <div>
            ${renderPhotoSlot({
              variant: "hero",
              badge: "GALERIA SUBVERSIVOS",
              label: expoAtual ? expoAtual.fotoLabel : "Exposição Atual na Subversivos",
              recommendation: "Fotografia real da exposição atual de artes visuais na Galeria Subversivos."
            })}
          </div>
        </div>
      </section>

      <!-- Espaço Aberto para Artistas -->
      <section class="section">
        <div class="container">
          <div class="gradient-banner">
            <div>
              <span class="mono-tag">06 / ESPAÇO ABERTO PARA ARTISTAS</span>
              <h2>Seu projeto, espetáculo ou exposição também pode acontecer aqui.</h2>
              <p>
                O Ecco recebe propostas de artistas visuais, companhias de teatro, produtores e professores interessados em ocupar, expor ou realizar atividades culturais em Juiz de Fora.
              </p>
            </div>
            <div class="gradient-banner__cta" style="flex-direction: column; gap: 10px;">
              <a href="#realize" data-route="realize" class="btn btn--white">Realize no Ecco (Locação)</a>
              <button type="button" class="btn btn--outline" style="border-color: #fff; color: #fff;" data-proposta="geral">Enviar proposta artística</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Informações Práticas -->
      <section class="section section--alt">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="mono-tag">07 / INFORMAÇÕES PRÁTICAS</span>
              <h2 class="section-header__title">Visite o Ecco</h2>
            </div>
            <a href="#contato" data-route="contato" class="btn btn--dark btn--sm">Página completa de contato</a>
          </div>
          <div class="values-grid">
            <div class="value-box">
              <div class="value-box__line"></div>
              <h3>Localização</h3>
              <p>Bairro Bandeirantes, Juiz de Fora/MG.</p>
              <span class="pending-tag" style="margin-top: 8px;">Endereço completo pendente</span>
            </div>
            <div class="value-box">
              <div class="value-box__line"></div>
              <h3>Terça a Sábado</h3>
              <p>Visitação livre da galeria das <strong>9h às 17h</strong>.</p>
            </div>
            <div class="value-box">
              <div class="value-box__line"></div>
              <h3>Domingo</h3>
              <p>Visitação livre da galeria das <strong>10h às 12h</strong>.</p>
            </div>
            <div class="value-box">
              <div class="value-box__line"></div>
              <h3>Canais Oficiais</h3>
              <p>Instagram: <a href="${escapeHtml(config.instagramUrl)}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">@ecco.cultural</a></p>
              <span class="pending-tag" style="margin-top: 8px;">WhatsApp e e-mail pendentes</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /* --------------------------------------------------------------------------
     2. PÁGINA O ECCO
     -------------------------------------------------------------------------- */
  function renderOEccoPage() {
    const { valores, idealizadores } = state.data;

    return `
      <section class="page-hero">
        <div class="container page-hero__grid">
          <div>
            <span class="mono-tag">02 / INSTITUCIONAL</span>
            <h1 class="page-hero__title">CONHEÇA O ECCO</h1>
            <p class="page-hero__subtitle">
              Um espaço onde a arte encontra pessoas, ideias e experiências.
            </p>
            <p class="page-hero__text">
              O Ecco nasceu em 2024, no bairro Bandeirantes, em Juiz de Fora, a partir do encontro entre dois artistas, Melissa Coppe e Daniel Meotte, e de um desejo em comum: tornar a arte possível na vida das pessoas e dos artistas.
            </p>
          </div>
          <div>
            ${renderPhotoSlot({
              variant: "hero",
              badge: "MARCO HISTÓRICO • 09/03/2024",
              label: "Inauguração do Ecco (9 de março de 2024)",
              recommendation: "Fotografia real da inauguração do Ecco em 9 de março de 2024 no bairro Bandeirantes."
            })}
          </div>
        </div>
      </section>

      <section class="section section--alt">
        <div class="container manifesto-grid">
          <div>
            <span class="mono-tag">NOSSA PROPOSTA</span>
            <h2 class="manifesto-statement" style="margin-top: 12px;">
              A arte não deve ser distante, restrita ou reservada a poucos.
            </h2>
          </div>
          <div class="manifesto-body">
            <p>
              Somos um espaço independente de arte e experimentação. Um lugar onde diferentes linguagens artísticas se encontram, onde é possível aprender, criar, apresentar, experimentar e descobrir.
            </p>
            <p>
              Acreditamos que a arte não deve ser distante, restrita ou reservada a poucos. Ela deve fazer parte da vida cotidiana, estar presente nos encontros, nas experiências e nas relações que construímos.
            </p>
            <p>
              Por isso, promovemos aulas, oficinas, exposições e apresentações teatrais. Criamos oportunidades para que artistas apresentem seus trabalhos e para que pessoas com ou sem experiência artística encontrem novas possibilidades de expressão.
            </p>
            <p>
              Não queremos apenas oferecer atividades. Queremos criar experiências que despertem curiosidade, provoquem reflexões e ampliem nossa maneira de perceber o mundo.
            </p>
            <p>
              <strong>O Ecco é um espaço para fazer, experimentar e descobrir a arte.</strong>
            </p>
          </div>
        </div>
      </section>

      <!-- No que acreditamos -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="mono-tag">PRINCÍPIOS</span>
              <h2 class="section-header__title">No que acreditamos</h2>
            </div>
            <p class="section-header__lead">
              Quatro valores orientam cada aula, oficina, exposição e encontro realizado no Ecco.
            </p>
          </div>

          <div class="values-grid">
            ${valores.map((v) => `
              <article class="value-box">
                <div class="value-box__line"></div>
                <h3>${escapeHtml(v.titulo)}</h3>
                <p>${escapeHtml(v.descricao)}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Quem faz o Ecco -->
      <section class="section section--alt">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="mono-tag">IDEALIZADORES</span>
              <h2 class="section-header__title">Quem faz o Ecco</h2>
            </div>
            <p class="section-header__lead">
              Criado em 2024 a partir do encontro artístico entre Daniel Meotte e Melissa Coppe.
            </p>
          </div>

          <div class="founders-grid">
            ${idealizadores.map((pessoa) => `
              <article class="founder-card">
                <div>
                  ${renderPhotoSlot({
                    variant: "portrait",
                    badge: "RETRATO REAL",
                    label: pessoa.fotoLabel,
                    recommendation: pessoa.fotoRecomendacao
                  })}
                </div>
                <div>
                  <h3>${escapeHtml(pessoa.nome)}</h3>
                  <span class="founder-card__role">${escapeHtml(pessoa.papel)}</span>
                  <div class="bio-placeholder">
                    <span class="pending-tag" style="margin-bottom: 8px;">[BIOGRAFIA PENDENTE]</span>
                    <p style="margin: 0;">${escapeHtml(pessoa.biografiaStatus)}</p>
                  </div>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  /* --------------------------------------------------------------------------
     3. PÁGINA AULAS
     -------------------------------------------------------------------------- */
  function renderAulasPage() {
    const { modalidadesAulas, tabelasHorarios } = state.data;

    return `
      <section class="page-hero">
        <div class="container page-hero__grid">
          <div>
            <span class="mono-tag">03 / FORMAÇÃO ARTÍSTICA</span>
            <h1 class="page-hero__title">AULAS NO ECCO</h1>
            <p class="page-hero__subtitle">Aprender, experimentar, descobrir.</p>
            <p class="page-hero__text">
              No Ecco, aprender arte é também experimentar novas formas de perceber, criar e se expressar.
              Oferecemos aulas de teatro, pintura e violão em turmas reduzidas ou individuais, com acompanhamento próximo e propostas que valorizam tanto o aprendizado técnico quanto a liberdade de criação.
            </p>
          </div>
          <div>
            ${renderPhotoSlot({
              variant: "hero",
              badge: "PROCESSO DE APRENDIZAGEM",
              label: "Aulas no Ecco — Teatro, Pintura e Violão",
              recommendation: "Fotografias reais mostrando pessoas em processo de criação e aprendizagem nas aulas."
            })}
          </div>
        </div>
      </section>

      <!-- Três Modalidades -->
      <section class="section">
        <div class="container">
          ${modalidadesAulas.map((mod) => `
            <article class="modality-block">
              <div>
                <span class="mono-tag">MODALIDADE</span>
                <h2 style="font-size: clamp(1.7rem, 3vw, 2.1rem); margin-top: 6px;">${escapeHtml(mod.nome)}</h2>
                <p class="modality-block__tagline">${escapeHtml(mod.chamada)}</p>
                ${mod.paragrafos.map((p) => `<p style="color: var(--ink-secondary);">${escapeHtml(p)}</p>`).join("")}
                <div style="margin-top: 20px;">
                  ${renderPhotoSlot({
                    badge: `AULA DE ${mod.nome.toUpperCase()}`,
                    label: mod.fotoLabel,
                    recommendation: mod.fotoRecomendacao
                  })}
                </div>
              </div>

              <aside class="modality-specs">
                <span class="mono-tag">MENSALIDADE</span>
                <div class="modality-specs__price">
                  ${escapeHtml(mod.mensalidade)} <small>/ mês</small>
                </div>
                <ul>
                  <li><strong>Duração:</strong> ${escapeHtml(mod.duracao)}</li>
                  <li><strong>Formato:</strong> ${escapeHtml(mod.turma)}</li>
                  <li><strong>Docente:</strong> ${escapeHtml(mod.professor)}</li>
                  <li><strong>Condição:</strong> ${escapeHtml(mod.observacaoExtra)}</li>
                </ul>
                <button type="button" class="btn btn--whatsapp" style="width: 100%;" data-matricula="${escapeHtml(mod.nome)}">
                  QUERO ME MATRICULAR PELO WHATSAPP
                </button>
              </aside>
            </article>
          `).join("")}
        </div>
      </section>

      <!-- Horários das Turmas -->
      <section class="section section--alt">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="mono-tag">GRADE DE TURMAS</span>
              <h2 class="section-header__title">Horários das turmas</h2>
            </div>
            <p class="section-header__lead">
              Consulte os dias, horários e faixas etárias registrados no documento oficial do Ecco.
            </p>
          </div>

          <div class="editorial-notice">
            <strong>Aviso de Revisão Editorial (Documento-Mestre)</strong>
            <p>
              O documento oficial apresenta as duas tabelas de horários abaixo, mas ainda não identifica explicitamente qual tabela corresponde a Teatro e qual corresponde a Pintura (bem como os horários individuais de Violão). As informações estão preservadas integralmente e aguardam confirmação antes da publicação.
            </p>
          </div>

          <div class="tables-split">
            ${tabelasHorarios.map((tab) => `
              <div class="table-card">
                <div class="table-card__head">
                  <strong>${escapeHtml(tab.titulo)}</strong>
                  <span class="pending-tag">[Modalidade a confirmar]</span>
                </div>
                <div class="table-responsive">
                  <table class="data-table">
                    <thead>
                      <tr>
                        <th>Turma</th>
                        <th>Dia e horário</th>
                        <th>Público</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${tab.linhas.map((l) => `
                        <tr>
                          <td data-label="Turma"><strong>${escapeHtml(l.turma)}</strong></td>
                          <td data-label="Dia e horário">${escapeHtml(l.diaHorario)}</td>
                          <td data-label="Público">${escapeHtml(l.publico)}</td>
                        </tr>
                      `).join("")}
                    </tbody>
                  </table>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Chamada Final de Matrícula -->
          <div class="gradient-banner" style="margin-top: 44px;">
            <div>
              <span class="mono-tag">MATRÍCULAS ABERTAS</span>
              <h2>A arte também se aprende fazendo.</h2>
              <p>
                Entre em contato, conheça nossas turmas e encontre seu espaço para criar no Ecco. <strong>Não existe taxa de matrícula.</strong>
              </p>
              <p style="font-size: 0.84rem; margin-top: 10px; opacity: 0.9;">
                * Observação: Regras específicas de reposição, vencimento e contratação serão confirmadas antes da publicação.
              </p>
            </div>
            <div class="gradient-banner__cta">
              <button type="button" class="btn btn--white" data-matricula="Geral">
                QUERO ME MATRICULAR PELO WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /* --------------------------------------------------------------------------
     4. PÁGINA OFICINAS
     -------------------------------------------------------------------------- */
  function renderOficinaCard(of) {
    return `
      <article class="editorial-card">
        <div class="editorial-card__media">
          ${renderPhotoSlot({
            badge: "OFICINA ECCO",
            label: of.fotoLabel,
            recommendation: of.fotoRecomendacao
          })}
        </div>
        <div class="editorial-card__body">
          <div class="editorial-card__meta">
            <span class="pill pill--accent">R$ ${of.valor},00</span>
            <span class="pill">Materiais incluídos</span>
            <span class="pending-tag">${escapeHtml(of.statusPublicacao)}</span>
          </div>
          <h3>${escapeHtml(of.nome)}</h3>
          <p>${escapeHtml(of.descricao)}</p>
          <ul class="editorial-card__specs">
            <li><span>Data:</span> <strong>${escapeHtml(of.data)}</strong></li>
            <li><span>Horário:</span> <strong>${escapeHtml(of.horario)}</strong></li>
            <li><span>Duração:</span> <strong>${escapeHtml(of.duracao)}</strong></li>
            <li><span>Vagas disponíveis:</span> <strong>${escapeHtml(of.vagasDisponiveis)}</strong></li>
          </ul>
          <div class="editorial-card__actions">
            <button type="button" class="btn btn--primary btn--sm" data-checkout-type="oficina" data-item-id="${escapeHtml(of.id)}">
              COMPRAR VAGA
            </button>
            <button type="button" class="btn btn--outline btn--sm" data-detail-type="oficina" data-item-id="${escapeHtml(of.id)}">
              Ver detalhes
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderOficinasPage() {
    const { oficinas } = state.data;

    return `
      <section class="page-hero">
        <div class="container page-hero__grid">
          <div>
            <span class="mono-tag">04 / EXPERIÊNCIAS MENSAIS</span>
            <h1 class="page-hero__title">OFICINAS ECCO</h1>
            <p class="page-hero__subtitle">Não precisa saber fazer. Precisa querer experimentar.</p>
            <p class="page-hero__text">
              As oficinas do Ecco são convites para experimentar a arte de um jeito diferente.
              Pintura em vinil, criação de carimbos, noite neon e muitas outras experiências fazem parte da nossa programação.
            </p>
            <p class="page-hero__text">
              Cada atividade é pensada para receber também quem nunca teve contato com uma prática artística. Não é preciso ter experiência, conhecer técnicas ou saber desenhar. Aqui, o processo importa tanto quanto o resultado.
              Com orientação, materiais incluídos e espaço para experimentar, nossas oficinas são uma oportunidade de descobrir novas possibilidades criativas.
            </p>
          </div>
          <div>
            ${renderPhotoSlot({
              variant: "hero",
              badge: "OFICINAS PRÁTICAS",
              label: "Experiências Criativas no Ecco",
              recommendation: "Fotografia real do processo criativo ou do resultado de uma oficina no Ecco."
            })}
          </div>
        </div>
      </section>

      <!-- Como Funcionam -->
      <section class="section section--alt">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="mono-tag">FORMATO</span>
              <h2 class="section-header__title">Como funcionam</h2>
            </div>
            <p class="section-header__lead">
              Confira nossa programação, escolha sua experiência e garanta sua vaga.
            </p>
          </div>

          <div class="values-grid">
            <div class="value-box">
              <div class="value-box__line"></div>
              <h3>Para Todos</h3>
              <p>Atividades abertas a todos os públicos, sem necessidade de experiência artística.</p>
            </div>
            <div class="value-box">
              <div class="value-box__line"></div>
              <h3>Duração &amp; Materiais</h3>
              <p>Duração aproximada de <strong>2 horas</strong>, com <strong>materiais incluídos</strong> no valor.</p>
            </div>
            <div class="value-box">
              <div class="value-box__line"></div>
              <h3>Valor Padrão</h3>
              <p><strong>R$ 50</strong> por participante.</p>
            </div>
            <div class="value-box">
              <div class="value-box__line"></div>
              <h3>Dias e Horários</h3>
              <p>Programação principalmente aos <strong>sábados, a partir das 19h</strong>, e aos <strong>domingos pela manhã</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Vitrine de Oficinas -->
      <section class="section" id="listaOficinas">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="mono-tag">VITRINE ATUALIZÁVEL</span>
              <h2 class="section-header__title">Oficinas disponíveis</h2>
            </div>
            <button type="button" class="btn btn--outline btn--sm" id="cmsShortcutOficinas">+ Gerenciar oficinas</button>
          </div>

          <div class="cards-grid">
            ${oficinas.map((of) => renderOficinaCard(of)).join("")}
          </div>
        </div>
      </section>
    `;
  }

  /* --------------------------------------------------------------------------
     5. PÁGINA TEATRO
     -------------------------------------------------------------------------- */
  function renderEspetaculoCard(esp) {
    return `
      <article class="editorial-card">
        <div class="editorial-card__media">
          ${renderPhotoSlot({
            badge: "ESPETÁCULO",
            label: esp.fotoLabel,
            recommendation: esp.fotoRecomendacao
          })}
        </div>
        <div class="editorial-card__body">
          <div class="editorial-card__meta">
            <span class="pill pill--accent">${escapeHtml(esp.companhia)}</span>
            <span class="pill">Ingresso: R$ ${esp.valor},00</span>
          </div>
          <h3>${escapeHtml(esp.nome)}</h3>
          <p>${escapeHtml(esp.sinopse)}</p>
          <ul class="editorial-card__specs">
            <li><span>Data e horário:</span> <strong>${escapeHtml(esp.data)} • ${escapeHtml(esp.horario)}</strong></li>
            <li><span>Classificação:</span> <strong>${escapeHtml(esp.classificacao)}</strong></li>
            <li><span>Duração:</span> <strong>${escapeHtml(esp.duracao)}</strong></li>
            <li><span>Lugares:</span> <strong>${escapeHtml(esp.lugaresDisponiveis)}</strong></li>
          </ul>
          <div class="editorial-card__actions">
            <button type="button" class="btn btn--primary btn--sm" data-checkout-type="espetaculo" data-item-id="${escapeHtml(esp.id)}">
              COMPRAR INGRESSO
            </button>
            <button type="button" class="btn btn--outline btn--sm" data-detail-type="espetaculo" data-item-id="${escapeHtml(esp.id)}">
              Ficha completa
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderTeatroPage() {
    const { espetaculos } = state.data;

    return `
      <section class="page-hero">
        <div class="container page-hero__grid">
          <div>
            <span class="mono-tag">05 / CRIAÇÃO E EXPERIMENTAÇÃO TEATRAL</span>
            <h1 class="page-hero__title">TEATRO NO ECCO</h1>
            <p class="page-hero__subtitle">Um espaço para criar, provocar e encontrar o público.</p>
            <p class="page-hero__text">
              Um espaço independente dedicado à criação e à experimentação teatral. Casa do Teatro do Contra, o Ecco abre suas portas para espetáculos próprios e, a partir de 2027, também para produções de outras companhias.
            </p>
            <p class="page-hero__text">
              Uma programação que busca aproximar o público do teatro, incentivar a formação de espectadores e criar novas possibilidades de encontro com a arte.
            </p>
            <div style="margin-top: 22px;">
              <a href="#vitrinesEspetaculos" class="btn btn--primary">VER ESPETÁCULOS EM CARTAZ</a>
            </div>
          </div>
          <div>
            ${renderPhotoSlot({
              variant: "hero",
              badge: "SALA IRIS ALVES",
              label: "Registro Cênico — Teatro no Ecco",
              recommendation: "Registros reais de cena, ensaios do Teatro do Contra e da Sala Iris Alves."
            })}
          </div>
        </div>
      </section>

      <!-- Teatro do Contra -->
      <section class="section section--alt">
        <div class="container manifesto-grid">
          <div>
            <span class="mono-tag">COMPANHIA RESIDENTE</span>
            <h2 class="manifesto-statement" style="margin-top: 12px;">Teatro do Contra</h2>
            <p class="page-hero__subtitle" style="margin-top: 10px;">A contradição como ponto de partida.</p>
          </div>
          <div class="manifesto-body">
            <p>
              O Teatro do Contra nasceu em 2018, inicialmente com o nome de <strong>Cia Teatral Camaleando</strong>. A mudança de nome veio de uma descoberta: a ideia de estar sempre em oposição, de questionar aquilo que parece estabelecido e, principalmente, de investigar as contradições que atravessam a experiência humana.
            </p>
            <p>
              Desde então, a contradição humana tornou-se o eixo de nossa pesquisa artística.
            </p>
            <p>
              Inspirados pelo <strong>pensamento dialético de Hegel</strong>, desenvolvemos trabalhos que investigam os conflitos, as tensões e as ambiguidades presentes nas relações humanas. Essa pesquisa atravessa tanto a concepção quanto a construção dramatúrgica e a encenação de nossos espetáculos.
            </p>
            <p>
              Produzimos nossas próprias montagens e desenvolvemos textos autorais, construindo uma trajetória que já reúne mais de cinco espetáculos, participações em festivais e centenas de alunos que passaram por nossos processos de formação.
            </p>
            <p>
              <strong>O Ecco é nossa casa de criação: o lugar onde pesquisamos, escrevemos, ensaiamos e compartilhamos nossos trabalhos com o público.</strong>
            </p>
          </div>
        </div>
      </section>

      <!-- Sala Iris Alves & Programação em Expansão -->
      <section class="section">
        <div class="container tables-split">
          <article class="contact-card">
            <span class="mono-tag">HOMENAGEM E ESPAÇO CÊNICO</span>
            <h2 style="font-size: clamp(1.55rem, 3vw, 1.9rem); margin: 10px 0 14px;">Sala Iris Alves</h2>
            <p style="color: var(--ink-secondary);">
              A casa do teatro no Ecco leva o nome de <strong>Iris Alves</strong>, mãe de Daniel Meotte, que também teve participação especial na origem do nome Teatro do Contra.
            </p>
            <p style="color: var(--ink-secondary);">
              É uma homenagem que conecta a história pessoal dos criadores à identidade artística do espaço.
            </p>
            <div class="editorial-notice" style="margin-bottom: 0;">
              <strong>Informações do teatro</strong>
              <p>
                <strong>Capacidade:</strong> até 30 pessoas.<br />
                <strong>Ingressos:</strong> definidos por espetáculo; o valor que costuma ser praticado é <strong>R$ 15</strong>, mas pode variar conforme a peça.
              </p>
            </div>
          </article>

          <article class="contact-card">
            <span class="mono-tag">HORIZONTE 2027</span>
            <h2 style="font-size: clamp(1.55rem, 3vw, 1.9rem); margin: 10px 0 14px;">Programação em expansão</h2>
            <p class="page-hero__subtitle" style="font-size: 1.15rem;">Mais teatro. Mais encontros. Novos públicos.</p>
            <p style="color: var(--ink-secondary);">
              A partir de 2027, o Ecco amplia sua programação e passa a receber também espetáculos de outras companhias.
            </p>
            <p style="color: var(--ink-secondary);">
              Queremos construir uma relação cada vez mais próxima com o público, incluindo produções infantojuvenis e espetáculos infantis. A ideia é fazer do teatro uma experiência presente na vida de mais pessoas, desde a infância.
            </p>
            <div style="margin-top: 18px;">
              ${renderPhotoSlot({
                badge: "SALA IRIS ALVES",
                label: "Espaço Cênico do Ecco",
                recommendation: "Fotografia real da Sala Iris Alves preparada para apresentação."
              })}
            </div>
          </article>
        </div>
      </section>

      <!-- Vitrine de Espetáculos -->
      <section class="section section--alt" id="vitrinesEspetaculos">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="mono-tag">CARTAZ</span>
              <h2 class="section-header__title">Espetáculos</h2>
            </div>
            <span class="pending-tag">[Política de meia-entrada e condições técnicas pendentes]</span>
          </div>

          <div class="cards-grid">
            ${espetaculos.map((esp) => renderEspetaculoCard(esp)).join("")}
          </div>

          <!-- Chamada para Companhias -->
          <div class="gradient-banner" style="margin-top: 44px;">
            <div>
              <span class="mono-tag">CONVOCATÓRIA PERMANENTE</span>
              <h2>Apresente seu espetáculo no Ecco</h2>
              <p>
                Tem um espetáculo e procura um espaço para apresentá-lo? O Ecco está aberto a propostas de outras companhias e artistas. Envie sua proposta para nossa equipe.
              </p>
            </div>
            <div class="gradient-banner__cta">
              <button type="button" class="btn btn--white" data-proposta="espetaculo">
                APRESENTE SEU ESPETÁCULO NO ECCO
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /* --------------------------------------------------------------------------
     6. PÁGINA GALERIA SUBVERSIVOS
     -------------------------------------------------------------------------- */
  function renderSubversivosPage() {
    const { exposicoes, obras } = state.data;

    return `
      <section class="page-hero">
        <div class="container page-hero__grid">
          <div>
            <span class="mono-tag">06 / ARTES VISUAIS</span>
            <h1 class="page-hero__title">GALERIA SUBVERSIVOS</h1>
            <p class="page-hero__subtitle">A arte precisa de espaço. E de circulação.</p>
            <p class="page-hero__text">
              A Subversivos é a galeria de artes visuais do Ecco, um espaço dedicado à exposição e à circulação da produção artística.
              Nosso foco está especialmente nos artistas de Juiz de Fora e em quem está começando sua trajetória, criando oportunidades para que novos trabalhos encontrem espaço, visibilidade e público.
            </p>
            <p class="page-hero__text">
              Recebemos principalmente trabalhos de pintura e colagem, além de outras experiências dentro do campo das artes visuais. Também já recebemos trabalhos de escultura.
              Mais do que apresentar obras, queremos movimentar a cena artística local, aproximar artistas e público e ampliar os espaços possíveis para a arte acontecer.
            </p>
            <p class="page-hero__text">
              <strong>Já realizamos 17 exposições e seguimos abrindo as portas para novas pesquisas, linguagens e artistas.</strong>
            </p>
          </div>
          <div>
            ${renderPhotoSlot({
              variant: "hero",
              badge: "17 EXPOSIÇÕES REALIZADAS",
              label: "Galeria Subversivos — Visitação Livre",
              recommendation: "Fotografia real das exposições da Subversivos, dando protagonismo às obras e aos artistas."
            })}
          </div>
        </div>
      </section>

      <!-- Exposições -->
      <section class="section section--alt">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="mono-tag">CIRCULAÇÃO</span>
              <h2 class="section-header__title">Exposições &amp; Visitação</h2>
            </div>
            <p class="section-header__lead">
              A visitação é livre e acontece no próprio Ecco (Terça a sábado, 9h às 17h; domingo, 10h às 12h).
            </p>
          </div>

          <div class="tables-split">
            ${exposicoes.map((ex) => `
              <article class="contact-card">
                ${renderPhotoSlot({
                  badge: "EXPOSIÇÃO",
                  label: ex.fotoLabel,
                  recommendation: ex.fotoRecomendacao
                })}
                <h3 style="font-size: 1.45rem; margin: 18px 0 8px;">${escapeHtml(ex.titulo)}</h3>
                <p style="font-weight: 600; color: var(--accent-purple-light); margin: 0 0 12px;">${escapeHtml(ex.subtitulo)}</p>
                <p style="color: var(--ink-secondary);">${escapeHtml(ex.descricao)}</p>
                <p class="mono-small" style="margin-top: 12px;">${escapeHtml(ex.periodo)}</p>
                <p class="mono-small">Artistas: ${escapeHtml(ex.artistas)}</p>
              </article>
            `).join("")}

            <article class="contact-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span class="mono-tag">CHAMADA PARA ARTISTAS</span>
                <h3 style="font-size: 1.6rem; margin: 10px 0 14px;">Exponha na Subversivos</h3>
                <p style="color: var(--ink-secondary);">
                  É artista e gostaria de expor na Subversivos? A galeria recebe propostas de artistas, com atenção especial à produção de Juiz de Fora e a quem está começando sua trajetória. Envie seu portfólio e uma apresentação do projeto para nossa curadoria.
                </p>
                <div class="editorial-notice">
                  <strong>Nota de publicação</strong>
                  <p>Critérios de seleção, calendário de exposições e regras de comercialização estão em fase final de definição.</p>
                </div>
              </div>
              <button type="button" class="btn btn--primary" style="width: 100%;" data-proposta="exposicao">
                ENVIE SUA PROPOSTA DE EXPOSIÇÃO
              </button>
            </article>
          </div>
        </div>
      </section>

      <!-- Obras à Venda -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="mono-tag">ACERVO &amp; AQUISIÇÃO</span>
              <h2 class="section-header__title">Obras à venda</h2>
            </div>
            <p class="section-header__lead">
              Algumas exposições disponibilizam obras para compra. A comercialização depende da disponibilidade e das condições definidas por cada artista. Quando disponíveis, as obras podem ser adquiridas também pelo site. A arte está em circulação. Venha conhecer.
            </p>
          </div>

          <div class="cards-grid">
            ${obras.map((obra) => `
              <article class="editorial-card">
                <div class="editorial-card__media">
                  ${renderPhotoSlot({
                    badge: obra.disponivel ? "DISPONÍVEL PARA VENDA" : "INDISPONÍVEL PARA VENDA",
                    label: obra.fotoLabel,
                    recommendation: obra.fotoRecomendacao
                  })}
                </div>
                <div class="editorial-card__body">
                  <div class="editorial-card__meta">
                    <span class="pill ${obra.disponivel ? "pill--accent" : "pill--sold"}">
                      ${obra.disponivel ? "Disponível" : "Não disponível para compra"}
                    </span>
                    ${obra.preco ? `<span class="pill">R$ ${obra.preco},00</span>` : `<span class="pending-tag">[Preço a definir]</span>`}
                  </div>
                  <h3>${escapeHtml(obra.titulo)}</h3>
                  <p style="margin-bottom: 10px;"><strong>Artista:</strong> ${escapeHtml(obra.artista)}</p>
                  <ul class="editorial-card__specs">
                    <li><span>Técnica:</span> <strong>${escapeHtml(obra.tecnica)}</strong></li>
                    <li><span>Dimensões:</span> <strong>${escapeHtml(obra.dimensoes)}</strong></li>
                  </ul>
                  <p class="mono-small" style="margin-bottom: 16px;">${escapeHtml(obra.observacao)}</p>
                  <div class="editorial-card__actions">
                    ${obra.disponivel ? `
                      <button type="button" class="btn btn--primary btn--sm" data-checkout-type="obra" data-item-id="${escapeHtml(obra.id)}">
                        ADQUIRIR OBRA
                      </button>
                    ` : ""}
                    <button type="button" class="btn btn--outline btn--sm" data-detail-type="obra" data-item-id="${escapeHtml(obra.id)}">
                      Ficha da obra
                    </button>
                  </div>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  /* --------------------------------------------------------------------------
     7. PÁGINA REALIZE NO ECCO
     -------------------------------------------------------------------------- */
  function renderRealizePage() {
    const { valoresLocacao } = state.data;

    return `
      <section class="page-hero">
        <div class="container page-hero__grid">
          <div>
            <span class="mono-tag">07 / LOCAÇÃO CULTURAL</span>
            <h1 class="page-hero__title">REALIZE NO ECCO</h1>
            <p class="page-hero__subtitle">Seu projeto também pode acontecer aqui.</p>
            <p class="page-hero__text">
              O Ecco é um espaço independente de arte e experimentação aberto a propostas de artistas, professores, produtores e pessoas interessadas em realizar atividades culturais.
            </p>
            <p class="page-hero__text">
              Disponibilizamos nosso espaço para <strong>oficinas de pintura, encontros literários, atividades artísticas, eventos e outras experiências</strong>.
              Se você tem uma proposta, queremos conhecer.
            </p>
          </div>
          <div>
            ${renderPhotoSlot({
              variant: "hero",
              badge: "ESPAÇO PARA EVENTOS CULTURAIS",
              label: "Ambiente do Ecco para Locação Cultural",
              recommendation: "Fotografia real do salão preparado com mesas, cadeiras e iluminação para atividades culturais."
            })}
          </div>
        </div>
      </section>

      <section class="section section--alt">
        <div class="container tables-split">
          <!-- Estrutura e Condições -->
          <div class="contact-card">
            <span class="mono-tag">ESTRUTURA E CONDIÇÕES</span>
            <h2 style="font-size: clamp(1.55rem, 3vw, 1.85rem); margin: 10px 0 18px;">O que está incluído</h2>
            <ul class="contact-list">
              <li>
                <strong>Capacidade</strong>
                Até 30 pessoas.
              </li>
              <li>
                <strong>Estrutura disponível</strong>
                Mesas, cadeiras e materiais de apoio.
              </li>
              <li>
                <strong>Finalidade</strong>
                Locação destinada a atividades artísticas e culturais.
              </li>
              <li>
                <strong>Montagem sem custo adicional</strong>
                20 minutos antes do horário contratado para montagem e preparação, sem custo adicional.
              </li>
              <li>
                <strong>Encerramento sem custo adicional</strong>
                20 minutos depois do encerramento para organização e guarda dos materiais, sem custo adicional.
              </li>
            </ul>

            <div class="editorial-notice" style="margin-bottom: 0;">
              <strong>Informações pendentes de confirmação</strong>
              <p>Tempo mínimo de locação, forma de pagamento, política de cancelamento e relação detalhada dos materiais de apoio incluídos.</p>
            </div>
          </div>

          <!-- Tabela de Valores de Locação -->
          <div>
            <div class="table-card">
              <div class="table-card__head">
                <strong>Valores de locação por hora</strong>
                <span class="mono-tag">TABELA OFICIAL</span>
              </div>
              <div class="table-responsive">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Dia</th>
                      <th>Valor por hora</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${valoresLocacao.map((v) => `
                      <tr>
                        <td data-label="Dia"><strong>${escapeHtml(v.dia)}</strong></td>
                        <td data-label="Valor por hora"><strong>${escapeHtml(v.valorHora)}</strong></td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
            </div>

            <div class="contact-card" style="margin-top: 24px;">
              <h3 style="font-size: 1.35rem; margin-bottom: 10px;">Tem uma ideia? Converse com a gente.</h3>
              <p style="color: var(--ink-secondary); margin-bottom: 18px;">
                Envie o dia pretendido, a quantidade de horas e uma breve descrição da sua atividade cultural para consultarmos a disponibilidade.
              </p>
              <button type="button" class="btn btn--whatsapp" style="width: 100%;" id="solicitarEspacoBtn">
                SOLICITAR O ESPAÇO PELO WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /* --------------------------------------------------------------------------
     8. PÁGINA AGENDA
     -------------------------------------------------------------------------- */
  function buildAgendaItems() {
    const { oficinas, espetaculos, exposicoes, eventosPassados } = state.data;

    const proximas = [
      ...oficinas.map((o) => ({
        id: o.id,
        tipo: "oficina",
        categoria: "Oficinas",
        titulo: o.nome,
        data: o.data,
        dataOrdenacao: o.dataOrdenacao || "2026-12-01",
        horario: o.horario,
        resumo: o.descricao,
        valor: `R$ ${o.valor},00`,
        acaoLabel: "Comprar vaga"
      })),
      ...espetaculos.map((e) => ({
        id: e.id,
        tipo: "espetaculo",
        categoria: "Teatro",
        titulo: e.nome,
        data: e.data,
        dataOrdenacao: e.dataOrdenacao || "2026-12-15",
        horario: e.horario,
        resumo: e.sinopse,
        valor: `R$ ${e.valor},00`,
        acaoLabel: "Comprar ingresso"
      })),
      ...exposicoes.map((ex) => ({
        id: ex.id,
        tipo: "exposicao",
        categoria: "Exposições",
        titulo: ex.titulo,
        data: "Em cartaz",
        dataOrdenacao: "2026-11-15",
        horario: "Ter–Sáb 9h–17h | Dom 10h–12h",
        resumo: ex.descricao,
        valor: "Visitação livre",
        acaoLabel: "Ver exposição"
      }))
    ].sort((a, b) => a.dataOrdenacao.localeCompare(b.dataOrdenacao));

    const passadas = eventosPassados.map((p) => ({
      id: p.id,
      tipo: "passado",
      categoria: p.categoria,
      titulo: p.titulo,
      data: p.data,
      dataOrdenacao: p.dataOrdenacao,
      horario: p.local,
      resumo: p.resumo,
      valor: "Marco histórico",
      acaoLabel: "Ver registro"
    }));

    return { proximas, passadas };
  }

  function renderAgendaPage() {
    const categorias = ["Todos", "Oficinas", "Teatro", "Exposições", "Atividades especiais"];
    const { proximas, passadas } = buildAgendaItems();
    const baseList = state.agendaPeriodo === "proximas" ? proximas : passadas;
    const filtrados = state.agendaFiltro === "Todos"
      ? baseList
      : baseList.filter((item) => item.categoria === state.agendaFiltro);

    return `
      <section class="page-hero">
        <div class="container">
          <span class="mono-tag">08 / PROGRAMAÇÃO GERAL</span>
          <h1 class="page-hero__title">AGENDA DO ECCO</h1>
          <p class="page-hero__text">
            Acompanhe oficinas, espetáculos, exposições e atividades especiais em ordem cronológica. Clique em qualquer atividade para visualizar detalhes completos, inscrições ou compra de ingressos.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="filter-bar">
            <div class="filter-group" role="tablist" aria-label="Filtrar por categoria">
              ${categorias.map((cat) => `
                <button type="button" class="filter-btn ${state.agendaFiltro === cat ? "active" : ""}" data-agenda-cat="${escapeHtml(cat)}">
                  ${escapeHtml(cat)}
                </button>
              `).join("")}
            </div>

            <div class="filter-group">
              <button type="button" class="filter-btn ${state.agendaPeriodo === "proximas" ? "active" : ""}" data-agenda-periodo="proximas">
                Próximas atividades (${proximas.length})
              </button>
              <button type="button" class="filter-btn ${state.agendaPeriodo === "passadas" ? "active" : ""}" data-agenda-periodo="passadas">
                Arquivo / Programação anterior (${passadas.length})
              </button>
            </div>
          </div>

          <div class="agenda-list">
            ${filtrados.length === 0 ? `
              <div class="editorial-notice">
                <strong>Nenhuma atividade listada neste filtro</strong>
                <p>Selecione "Todos" ou alterne entre Próximas atividades e Arquivo para visualizar outros registros.</p>
              </div>
            ` : filtrados.map((item) => `
              <article class="agenda-row">
                <div class="agenda-row__date">
                  <span class="pill pill--accent" style="margin-bottom: 6px;">${escapeHtml(item.categoria)}</span>
                  <strong>${escapeHtml(item.data)}</strong>
                  <span>${escapeHtml(item.horario)}</span>
                </div>
                <div class="agenda-row__info">
                  <h3>${escapeHtml(item.titulo)}</h3>
                  <p>${escapeHtml(item.resumo)}</p>
                  <span class="mono-small" style="display: inline-block; margin-top: 8px;">${escapeHtml(item.valor)}</span>
                </div>
                <div class="agenda-row__action">
                  ${item.tipo === "oficina" ? `
                    <button type="button" class="btn btn--primary btn--sm" data-detail-type="oficina" data-item-id="${escapeHtml(item.id)}">
                      ${escapeHtml(item.acaoLabel)} →
                    </button>
                  ` : item.tipo === "espetaculo" ? `
                    <button type="button" class="btn btn--primary btn--sm" data-detail-type="espetaculo" data-item-id="${escapeHtml(item.id)}">
                      ${escapeHtml(item.acaoLabel)} →
                    </button>
                  ` : item.tipo === "exposicao" ? `
                    <a href="#subversivos" data-route="subversivos" class="btn btn--outline btn--sm">${escapeHtml(item.acaoLabel)} →</a>
                  ` : `
                    <a href="#o-ecco" data-route="o-ecco" class="btn btn--outline btn--sm">${escapeHtml(item.acaoLabel)} →</a>
                  `}
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  /* --------------------------------------------------------------------------
     9. PÁGINA CONTATO
     -------------------------------------------------------------------------- */
  function renderContatoPage() {
    const { config } = state.data;

    return `
      <section class="page-hero">
        <div class="container">
          <span class="mono-tag">09 / VISITAÇÃO E ATENDIMENTO</span>
          <h1 class="page-hero__title">CONTATO</h1>
          <p class="page-hero__text">
            Venha conhecer o Ecco, visitar a Galeria Subversivos, assistir a um espetáculo ou conversar sobre aulas, oficinas e projetos culturais em Juiz de Fora/MG.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container contact-grid">
          <div class="contact-card">
            <span class="mono-tag">INFORMAÇÕES OFICIAIS</span>
            <h2 style="font-size: clamp(1.5rem, 3vw, 1.8rem); margin: 8px 0 16px;">Onde estamos e canais</h2>

            <ul class="contact-list">
              <li>
                <strong>Endereço</strong>
                Bairro Bandeirantes, Juiz de Fora/MG<br />
                ${config.enderecoCompleto
                  ? escapeHtml(config.enderecoCompleto)
                  : `<span class="pending-tag">[PENDENTE: Rua, número, complemento e CEP]</span>`}
              </li>
              <li>
                <strong>Horários de visitação da galeria</strong>
                Terça-feira a sábado: <strong>9h às 17h</strong><br />
                Domingo: <strong>10h às 12h</strong>
              </li>
              <li>
                <strong>Instagram Oficial</strong>
                <a href="${escapeHtml(config.instagramUrl)}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; font-weight: 600;">
                  ${escapeHtml(config.instagramHandle)} ↗
                </a>
              </li>
              <li>
                <strong>WhatsApp (Matrículas, Dúvidas e Locação)</strong>
                ${config.whatsappNumero
                  ? escapeHtml(config.whatsappNumero)
                  : `<span class="pending-tag">[PENDENTE: Número oficial do WhatsApp do Ecco]</span>`}
              </li>
              <li>
                <strong>E-mail</strong>
                ${config.emailOficial
                  ? escapeHtml(config.emailOficial)
                  : `<span class="pending-tag">[PENDENTE: E-mail institucional, caso seja disponibilizado]</span>`}
              </li>
            </ul>
          </div>

          <div>
            <div class="map-frame">
              <iframe
                title="Mapa da região do Bairro Bandeirantes em Juiz de Fora/MG"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-43.3680%2C-21.7480%2C-43.3320%2C-21.7240&amp;layer=mapnik">
              </iframe>
            </div>
            <p class="mono-small" style="margin-top: 10px;">
              Mapa centralizado no Bairro Bandeirantes, Juiz de Fora/MG. O marcador exato será atualizado assim que o logradouro e número forem confirmados.
            </p>
          </div>
        </div>
      </section>
    `;
  }

  /* --------------------------------------------------------------------------
     MODAIS INTERATIVOS: VISUALIZAÇÃO INDIVIDUAL, CHECKOUT & PROPOSTAS
     -------------------------------------------------------------------------- */
  function openItemDetail(type, id) {
    if (type === "oficina") {
      const of = state.data.oficinas.find((item) => item.id === id);
      if (!of) return;
      openModal({
        eyebrow: "OFICINA ECCO",
        title: of.nome,
        html: `
          ${renderPhotoSlot({ badge: "OFICINA", label: of.fotoLabel, recommendation: of.fotoRecomendacao })}
          <p style="margin-top: 18px; color: var(--ink-secondary);">${escapeHtml(of.descricao)}</p>
          <div class="editorial-notice">
            <strong>Ficha da Experiência</strong>
            <p>
              <strong>Data:</strong> ${escapeHtml(of.data)} | <strong>Horário:</strong> ${escapeHtml(of.horario)}<br />
              <strong>Duração:</strong> ${escapeHtml(of.duracao)} | <strong>Valor:</strong> R$ ${of.valor},00 | <strong>Materiais:</strong> ${escapeHtml(of.materiais)}<br />
              <strong>Vagas disponíveis:</strong> ${escapeHtml(of.vagasDisponiveis)}
            </p>
          </div>
          <button type="button" class="btn btn--primary" style="width: 100%;" data-checkout-type="oficina" data-item-id="${escapeHtml(of.id)}">
            COMPRAR VAGA — R$ ${of.valor},00
          </button>
        `
      });
    } else if (type === "espetaculo") {
      const esp = state.data.espetaculos.find((item) => item.id === id);
      if (!esp) return;
      openModal({
        eyebrow: `TEATRO NO ECCO • ${esp.companhia}`,
        title: esp.nome,
        html: `
          ${renderPhotoSlot({ badge: "ESPETÁCULO", label: esp.fotoLabel, recommendation: esp.fotoRecomendacao })}
          <p style="margin-top: 18px; color: var(--ink-secondary);">${escapeHtml(esp.sinopse)}</p>
          <div class="editorial-notice">
            <strong>Informações da Sessão — Sala Iris Alves</strong>
            <p>
              <strong>Companhia:</strong> ${escapeHtml(esp.companhia)}<br />
              <strong>Classificação indicativa:</strong> ${escapeHtml(esp.classificacao)} | <strong>Duração:</strong> ${escapeHtml(esp.duracao)}<br />
              <strong>Data e horário:</strong> ${escapeHtml(esp.data)} • ${escapeHtml(esp.horario)}<br />
              <strong>Valor do ingresso:</strong> R$ ${esp.valor},00 (${escapeHtml(esp.observacaoValor)})<br />
              <strong>Lugares disponíveis:</strong> ${escapeHtml(esp.lugaresDisponiveis)}
            </p>
          </div>
          <button type="button" class="btn btn--primary" style="width: 100%;" data-checkout-type="espetaculo" data-item-id="${escapeHtml(esp.id)}">
            COMPRAR INGRESSO — R$ ${esp.valor},00
          </button>
        `
      });
    } else if (type === "obra") {
      const obra = state.data.obras.find((item) => item.id === id);
      if (!obra) return;
      openModal({
        eyebrow: "GALERIA SUBVERSIVOS",
        title: obra.titulo,
        html: `
          ${renderPhotoSlot({ badge: obra.disponivel ? "DISPONÍVEL" : "INDISPONÍVEL", label: obra.fotoLabel, recommendation: obra.fotoRecomendacao })}
          <div class="editorial-notice" style="margin-top: 18px;">
            <strong>Ficha Técnica da Obra</strong>
            <p>
              <strong>Artista:</strong> ${escapeHtml(obra.artista)}<br />
              <strong>Técnica e materiais:</strong> ${escapeHtml(obra.tecnica)}<br />
              <strong>Dimensões:</strong> ${escapeHtml(obra.dimensoes)}<br />
              <strong>Preço:</strong> ${obra.preco ? `R$ ${obra.preco},00` : "[A definir pelo artista]"}<br />
              <strong>Disponibilidade:</strong> ${obra.disponivel ? "Disponível para venda" : "Indisponível para compra online"}
            </p>
          </div>
          ${obra.disponivel ? `
            <button type="button" class="btn btn--primary" style="width: 100%;" data-checkout-type="obra" data-item-id="${escapeHtml(obra.id)}">
              ADQUIRIR OBRA
            </button>
          ` : `<p class="mono-small">Esta obra não está habilitada para compra online.</p>`}
        `
      });
    }
    bindModalDynamicButtons();
  }

  /* --------------------------------------------------------------------------
     ESTRUTURA DE CHECKOUT (PIX, CRÉDITO, DÉBITO)
     -------------------------------------------------------------------------- */
  function openCheckoutModal(type, id) {
    let itemTitle = "";
    let unitPrice = 0;
    let isSingleUnit = false;

    if (type === "oficina") {
      const of = state.data.oficinas.find((i) => i.id === id);
      if (!of) return;
      itemTitle = `Vaga na Oficina: ${of.nome}`;
      unitPrice = Number(of.valor) || 50;
    } else if (type === "espetaculo") {
      const esp = state.data.espetaculos.find((i) => i.id === id);
      if (!esp) return;
      itemTitle = `Ingresso: ${esp.nome}`;
      unitPrice = Number(esp.valor) || 15;
    } else if (type === "obra") {
      const obra = state.data.obras.find((i) => i.id === id);
      if (!obra || !obra.disponivel) return;
      itemTitle = `Obra Subversivos: ${obra.titulo} (${obra.artista})`;
      unitPrice = Number(obra.preco) || 0;
      isSingleUnit = true;
    }

    openModal({
      eyebrow: "COMPRA ONLINE • ESTRUTURA DE PAGAMENTO",
      title: itemTitle,
      html: `
        <form id="checkoutForm">
          <div class="form-grid">
            <div class="form-field">
              <label for="buyerName">Nome completo *</label>
              <input type="text" id="buyerName" required placeholder="Seu nome completo" />
            </div>
            <div class="form-field">
              <label for="buyerEmail">E-mail para envio do comprovante *</label>
              <input type="email" id="buyerEmail" required placeholder="voce@exemplo.com" />
            </div>
          </div>

          <div class="form-grid">
            <div class="form-field">
              <label for="buyerPhone">Telefone / WhatsApp *</label>
              <input type="tel" id="buyerPhone" required placeholder="(32) 99999-9999" />
            </div>
            <div class="form-field">
              <label for="buyerQty">Quantidade</label>
              <input type="number" id="buyerQty" min="1" max="${isSingleUnit ? 1 : 10}" value="1" ${isSingleUnit ? "readonly" : ""} />
            </div>
          </div>

          <label style="display: block; font-size: 0.84rem; font-weight: 600; color: var(--ink-secondary); margin-top: 6px;">Meio de pagamento desejado *</label>
          <div class="payment-methods">
            <label class="payment-option">
              <input type="radio" name="payMethod" value="Pix" checked />
              Pix
            </label>
            <label class="payment-option">
              <input type="radio" name="payMethod" value="Cartão de crédito" />
              Cartão de crédito
            </label>
            <label class="payment-option">
              <input type="radio" name="payMethod" value="Cartão de débito" />
              Cartão de débito
            </label>
          </div>

          <div class="editorial-notice">
            <strong>Resumo do Pedido</strong>
            <p id="checkoutSummaryText">
              Item: <strong>${escapeHtml(itemTitle)}</strong><br />
              Valor unitário: <strong>${unitPrice > 0 ? `R$ ${unitPrice},00` : "[Valor a definir pelo artista antes da ativação]"}</strong>
            </p>
          </div>

          <button type="submit" class="btn btn--primary" style="width: 100%;">
            PREPARAR PEDIDO PARA PAGAMENTO
          </button>
        </form>
        <div id="checkoutGatewayResult" style="margin-top: 16px;"></div>
      `
    });

    const form = document.getElementById("checkoutForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const qty = Number(document.getElementById("buyerQty").value) || 1;
      const method = form.querySelector('input[name="payMethod"]:checked').value;
      const payload = {
        origem: "ECCO - Espaço de Arte e Experimentação",
        tipo: type,
        itemId: id,
        item: itemTitle,
        quantidade: qty,
        valorTotalEstimado: unitPrice > 0 ? `R$ ${unitPrice * qty},00` : "A definir",
        meioPagamento: method,
        comprador: {
          nome: document.getElementById("buyerName").value.trim(),
          email: document.getElementById("buyerEmail").value.trim(),
          telefone: document.getElementById("buyerPhone").value.trim()
        },
        statusGateway: "AGUARDANDO_INTEGRACAO_PROVEDOR"
      };

      document.getElementById("checkoutGatewayResult").innerHTML = `
        <div class="editorial-notice">
          <strong>Integração de Pagamento Pendente de Configuração</strong>
          <p>
            Seu pedido foi validado e estruturado para <strong>${escapeHtml(method)}</strong>, mas a plataforma oficial de pagamentos (Pix, Crédito e Débito) e a política de cancelamento/reembolso ainda estão sendo configuradas pela equipe do Ecco. Nenhuma cobrança foi realizada.
          </p>
          <pre style="margin-top: 12px; padding: 12px; border-radius: 6px; font-family: var(--font-mono); font-size: 0.74rem; overflow-x: auto;">${escapeHtml(JSON.stringify(payload, null, 2))}</pre>
        </div>
      `;
    });
  }

  /* --------------------------------------------------------------------------
     FLUXOS DE WHATSAPP (MATRÍCULAS E LOCAÇÃO) & PROPOSTAS CULTURAIS
     -------------------------------------------------------------------------- */
  function openWhatsAppModal(contexto, detalhe = "") {
    const numeroConfigurado = state.data.config.whatsappNumero;
    const mensagemPadrao = contexto === "locacao"
      ? `Olá! Gostaria de solicitar informações para realizar uma atividade cultural no Ecco (${detalhe || "informar dia e horário pretendidos"}).`
      : `Olá! Tenho interesse em me matricular nas aulas do Ecco (${detalhe || "escolher modalidade"}). Não há taxa de matrícula, certo?`;

    openModal({
      eyebrow: "ATENDIMENTO VIA WHATSAPP",
      title: contexto === "locacao" ? "Solicitar o espaço pelo WhatsApp" : "Quero me matricular pelo WhatsApp",
      html: `
        <div class="form-field">
          <label for="waMessageText">Mensagem pré-estruturada para o Ecco</label>
          <textarea id="waMessageText" rows="4">${escapeHtml(mensagemPadrao)}</textarea>
        </div>
        ${numeroConfigurado ? `
          <a href="https://wa.me/${escapeHtml(numeroConfigurado)}?text=${encodeURIComponent(mensagemPadrao)}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp" style="width: 100%;">
            Abrir conversa no WhatsApp oficial
          </a>
        ` : `
          <div class="editorial-notice">
            <strong>[PENDENTE] Número oficial do WhatsApp ainda não informado</strong>
            <p>
              Conforme o Documento-Mestre, o número oficial de WhatsApp do Ecco será inserido antes da publicação (via <code>ECCO_DEFAULT_DATA</code> no <code>script.js</code> ou no Gestor de Conteúdo). Você já pode copiar a mensagem preparada acima.
            </p>
          </div>
          <button type="button" class="btn btn--outline" style="width: 100%;" id="copyWaMsgBtn">
            Copiar mensagem preparada
          </button>
        `}
      `
    });

    const copyBtn = document.getElementById("copyWaMsgBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const txt = document.getElementById("waMessageText").value;
        navigator.clipboard?.writeText(txt);
        copyBtn.textContent = "Mensagem copiada!";
      });
    }
  }

  function openPropostaModal(tipo) {
    const titulos = {
      espetaculo: "Apresente seu espetáculo no Ecco",
      exposicao: "Envie sua proposta de exposição (Subversivos)",
      geral: "Envie sua proposta artística ou cultural"
    };

    openModal({
      eyebrow: "CHAMADA PARA ARTISTAS E COMPANHIAS",
      title: titulos[tipo] || titulos.geral,
      html: `
        <form id="propostaForm">
          <div class="form-grid">
            <div class="form-field">
              <label for="propNome">Nome do artista / companhia *</label>
              <input type="text" id="propNome" required />
            </div>
            <div class="form-field">
              <label for="propContato">WhatsApp ou E-mail de retorno *</label>
              <input type="text" id="propContato" required />
            </div>
          </div>
          <div class="form-field">
            <label for="propTitulo">Título do projeto / espetáculo / exposição *</label>
            <input type="text" id="propTitulo" required />
          </div>
          <div class="form-field">
            <label for="propResumo">Apresentação do projeto e link de portfólio *</label>
            <textarea id="propResumo" rows="4" required placeholder="Descreva a proposta, linguagem artística, necessidades básicas e link para portfólio/material..."></textarea>
          </div>
          <button type="submit" class="btn btn--primary" style="width: 100%;">
            ESTRUTURAR PROPOSTA PARA ENVIO
          </button>
        </form>
        <div id="propostaResult" style="margin-top: 16px;"></div>
      `
    });

    document.getElementById("propostaForm").addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("propostaResult").innerHTML = `
        <div class="editorial-notice">
          <strong>Canal Oficial de Recebimento Pendente</strong>
          <p>
            O Documento-Mestre sinaliza que o canal definitivo de recebimento de propostas (e-mail curatorial ou formulário integrado) será confirmado antes da publicação. Sua proposta foi validada localmente e está pronta para envio assim que o canal for conectado.
          </p>
        </div>
      `;
    });
  }

  /* --------------------------------------------------------------------------
     GESTOR DE CONTEÚDO LOCAL (CMS PARA ATUALIZAÇÃO FÁCIL DO SITE)
     -------------------------------------------------------------------------- */
  function openCmsModal() {
    const { config, oficinas, espetaculos } = state.data;

    openModal({
      eyebrow: "PAINEL EDITORIAL • CMS LOCAL",
      title: "Gerenciar Conteúdo e Pendências do Ecco",
      html: `
        <p style="color: var(--ink-secondary); margin-top: 0;">
          Atualize aqui os dados institucionais pendentes e as oficinas. As alterações ficam salvas no navegador e você pode exportar o JSON de configuração atualizado.
        </p>

        <h3 style="font-size: 1.1rem; margin: 18px 0 10px;">1. Dados Institucionais Pendentes</h3>
        <div class="form-grid">
          <div class="form-field">
            <label>Endereço Completo (Bairro Bandeirantes)</label>
            <input type="text" id="cmsEndereco" value="${escapeHtml(config.enderecoCompleto)}" placeholder="Ex: Rua..., nº..., Bandeirantes, Juiz de Fora/MG" />
          </div>
          <div class="form-field">
            <label>WhatsApp Oficial (somente números com DDI 55)</label>
            <input type="text" id="cmsWhatsapp" value="${escapeHtml(config.whatsappNumero)}" placeholder="Ex: 5532999999999" />
          </div>
        </div>
        <div class="form-field">
          <label>E-mail Institucional</label>
          <input type="email" id="cmsEmail" value="${escapeHtml(config.emailOficial)}" placeholder="contato@..." />
        </div>

        <h3 style="font-size: 1.1rem; margin: 22px 0 10px;">2. Adicionar Nova Oficina Mensal</h3>
        <div class="form-grid">
          <div class="form-field">
            <label>Nome da Oficina</label>
            <input type="text" id="cmsOfNome" placeholder="Ex: Colagem Experimental" />
          </div>
          <div class="form-field">
            <label>Data e Horário</label>
            <input type="text" id="cmsOfData" placeholder="Ex: Sábado, 20/12 • 19h" />
          </div>
        </div>
        <div class="form-grid">
          <div class="form-field">
            <label>Vagas Disponíveis</label>
            <input type="text" id="cmsOfVagas" placeholder="Ex: 12 vagas" />
          </div>
          <div class="form-field">
            <label>Valor (R$)</label>
            <input type="number" id="cmsOfValor" value="50" />
          </div>
        </div>
        <div class="form-field">
          <label>Descrição resumida</label>
          <textarea id="cmsOfDesc" rows="2" placeholder="Apresentação da experiência..."></textarea>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px;">
          <button type="button" class="btn btn--primary btn--sm" id="cmsSaveBtn">Salvar alterações no site</button>
          <button type="button" class="btn btn--dark btn--sm" id="cmsExportBtn">Exportar dados (JSON)</button>
          <button type="button" class="btn btn--outline btn--sm" id="cmsResetBtn">Restaurar original do PDF</button>
        </div>

        <div style="margin-top: 22px; padding-top: 16px; border-top: 1px solid var(--border-hairline);">
          <span class="mono-small">Oficinas cadastradas (${oficinas.length}) • Espetáculos cadastrados (${espetaculos.length})</span>
        </div>
      `
    });

    document.getElementById("cmsSaveBtn").addEventListener("click", () => {
      state.data.config.enderecoCompleto = document.getElementById("cmsEndereco").value.trim();
      state.data.config.whatsappNumero = document.getElementById("cmsWhatsapp").value.trim();
      state.data.config.emailOficial = document.getElementById("cmsEmail").value.trim();

      const novaOfNome = document.getElementById("cmsOfNome").value.trim();
      if (novaOfNome) {
        state.data.oficinas.push({
          id: `oficina-${Date.now()}`,
          nome: novaOfNome,
          descricao: document.getElementById("cmsOfDesc").value.trim() || "Experiência prática aberta a todos os públicos.",
          data: document.getElementById("cmsOfData").value.trim() || "A confirmar",
          dataOrdenacao: "2026-12-20",
          horario: "19h",
          duracao: "Aproximadamente 2 horas",
          valor: Number(document.getElementById("cmsOfValor").value) || 50,
          materiais: "Incluídos",
          vagasDisponiveis: document.getElementById("cmsOfVagas").value.trim() || "A confirmar",
          statusPublicacao: "Atualizado via Gestor Local",
          fotoLabel: `Oficina: ${novaOfNome}`,
          fotoRecomendacao: `Fotografia real da oficina ${novaOfNome}.`
        });
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
      closeModal();
      renderCurrentPage();
    });

    document.getElementById("cmsExportBtn").addEventListener("click", () => {
      const fileContent = JSON.stringify(state.data, null, 2);
      const blob = new Blob([fileContent], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "ecco-dados-atualizados.json";
      a.click();
      URL.revokeObjectURL(url);
    });

    document.getElementById("cmsResetBtn").addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      state.data = JSON.parse(JSON.stringify(ECCO_DEFAULT_DATA));
      closeModal();
      renderCurrentPage();
    });
  }

  function openPendenciasModal() {
    openModal({
      eyebrow: "SEÇÃO 13 DO DOCUMENTO-MESTRE",
      title: "Pendências Gerais Antes da Publicação",
      html: `
        <p style="color: var(--ink-secondary); margin-top: 0;">
          Em conformidade com as regras editoriais do Ecco, nenhuma informação provisória foi publicada como definitiva. Confira os pontos que aguardam confirmação:
        </p>
        <ol style="padding-left: 20px; display: flex; flex-direction: column; gap: 10px; color: var(--ink-secondary);">
          ${state.data.pendenciasPublicacao.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ol>
      `
    });
  }

  /* --------------------------------------------------------------------------
     VINCULAÇÃO DE EVENTOS
     -------------------------------------------------------------------------- */
  function bindModalDynamicButtons() {
    modalBody.querySelectorAll("[data-checkout-type]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openCheckoutModal(btn.getAttribute("data-checkout-type"), btn.getAttribute("data-item-id"));
      });
    });
  }

  function bindPageEvents() {
    appRoot.querySelectorAll("[data-route]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(link.getAttribute("data-route"));
      });
    });

    appRoot.querySelectorAll("[data-detail-type]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openItemDetail(btn.getAttribute("data-detail-type"), btn.getAttribute("data-item-id"));
      });
    });

    appRoot.querySelectorAll("[data-checkout-type]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openCheckoutModal(btn.getAttribute("data-checkout-type"), btn.getAttribute("data-item-id"));
      });
    });

    appRoot.querySelectorAll("[data-matricula]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openWhatsAppModal("matricula", `Modalidade: ${btn.getAttribute("data-matricula")}`);
      });
    });

    appRoot.querySelectorAll("[data-proposta]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openPropostaModal(btn.getAttribute("data-proposta"));
      });
    });

    const solicitarEspacoBtn = document.getElementById("solicitarEspacoBtn");
    if (solicitarEspacoBtn) {
      solicitarEspacoBtn.addEventListener("click", () => openWhatsAppModal("locacao"));
    }

    const cmsShortcutOficinas = document.getElementById("cmsShortcutOficinas");
    if (cmsShortcutOficinas) {
      cmsShortcutOficinas.addEventListener("click", openCmsModal);
    }

    appRoot.querySelectorAll("[data-agenda-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.agendaFiltro = btn.getAttribute("data-agenda-cat");
        renderCurrentPage();
      });
    });

    appRoot.querySelectorAll("[data-agenda-periodo]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.agendaPeriodo = btn.getAttribute("data-agenda-periodo");
        renderCurrentPage();
      });
    });
  }

  /* --------------------------------------------------------------------------
     MENU MOBILE E INICIALIZAÇÃO GLOBAL
     -------------------------------------------------------------------------- */
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");

  function openMobileDrawer() {
    mobileDrawer.classList.add("is-open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    mobileMenuBtn.classList.add("is-active");
    mobileMenuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove("is-open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    mobileMenuBtn.classList.remove("is-active");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  mobileMenuBtn.addEventListener("click", () => {
    if (mobileDrawer.classList.contains("is-open")) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  });
  document.getElementById("mobileCloseBtn").addEventListener("click", closeMobileDrawer);
  document.getElementById("mobileDrawerBackdrop").addEventListener("click", closeMobileDrawer);

  document.querySelectorAll("header [data-route], footer [data-route], #mobileDrawer [data-route]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(el.getAttribute("data-route"));
    });
  });

  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalBackdrop").addEventListener("click", closeModal);
  document.getElementById("openPendenciasBtn").addEventListener("click", openPendenciasModal);
  document.getElementById("openPoliciesBtn").addEventListener("click", openPendenciasModal);
  document.getElementById("openCmsBtn").addEventListener("click", openCmsModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeMobileDrawer();
    }
  });

  window.addEventListener("popstate", () => {
    const hash = window.location.hash.replace("#", "");
    navigateTo(hash || "inicio", false);
  });

  const initialHash = window.location.hash.replace("#", "");
  navigateTo(initialHash || "inicio", false);
})();