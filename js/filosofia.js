// ==========================================
// DATA: Os Grandes Marcos Filosóficos
// ==========================================
const PHILOSOPHICAL_MOVEMENTS = [
  {
    id: "pre-socraticos",
    name: "Pré-Socráticos (Cosmologia)",
    period: "Antiguidade",
    dates: "c. VI a.C. – V a.C.",
    yearStart: -600,
    line: "Metafísica & Ontologia",
    color: "amber",
    description: "Os primeiros filósofos gregos que romperam com as explicações mitológicas para buscar a origem racional do universo (a Physis) e o elemento primordial regulador (a Arché).",
    context: "Surgimento das pólis gregas, expansão marítima e a busca por explicações naturais para fenômenos antes atribuídos exclusivamente aos deuses do Olimpo.",
    concept: "Arché: O princípio fundamental de todas as coisas. Para Tales era a água; para Anaximandro, o indeterminado (Ápeiron); para Heráclito, o fluxo constante (fogo).",
    quote: "Tudo flui, nada permanece igual.",
    quoteAuthor: "Heráclito",
    philosophers: [
      { name: "Tales de Mileto", lifespan: "c. 624 – 546 a.C.", contribution: "Pioneiro ao apontar a água como origem de tudo." },
      { name: "Heráclito de Éfeso", lifespan: "c. 535 – 475 a.C.", contribution: "Pai do mobilismo e do conflito como motor do universo." },
      { name: "Parmênides de Eleia", lifespan: "c. 515 – 450 a.C.", contribution: "Fundador da ontologia, afirmando que 'o ser é e o não-ser não é'." }
    ],
    aiPersona: "Heráclito de Éfeso, o filósofo do fluxo constante e do fogo."
  },
  {
    id: "periodo-classico",
    name: "Período Clássico Grego",
    period: "Antiguidade",
    dates: "c. 469 a.C. – 322 a.C.",
    yearStart: -469,
    line: "Ética & Política",
    color: "amber",
    description: "A virada antropológica da filosofia. O foco deixa de ser o cosmos e passa a ser o ser humano, a justiça, a verdade, a virtude (Areté) e a organização da sociedade ideal.",
    context: "O apogeu da democracia ateniense e as guerras médicas/do Peloponeso. Atenas consolida-se como o centro cultural do mundo grego.",
    concept: "Dialética e Maiêutica: O método de parturição de ideias por meio de perguntas sucessivas para purificar o conhecimento de falsas opiniões (doxa).",
    quote: "Uma vida não examinada não vale a pena ser vivida.",
    quoteAuthor: "Sócrates",
    philosophers: [
      { name: "Sócrates de Atenas", lifespan: "c. 469 – 399 a.C.", contribution: "Inaugurou a filosofia moral e o método de diálogo indagador." },
      { name: "Platão de Atenas", lifespan: "c. 427 – 347 a.C.", contribution: "Teoria das Ideias, separando o Mundo Sensível do Mundo Inteligível." },
      { name: "Aristóteles de Estagira", lifespan: "c. 384 – 322 a.C.", contribution: "Fundador da lógica sistemática, biologia filosófica e a ética do meio-termo." }
    ],
    aiPersona: "Sócrates de Atenas, questionador incansável focado na virtude e no autoconhecimento."
  },
  {
    id: "helenismo",
    name: "Filosofia Helenística",
    period: "Antiguidade",
    dates: "c. 323 a.C. – 31 a.C.",
    yearStart: -323,
    line: "Ética & Política",
    color: "amber",
    description: "Escolas práticas focadas na arte de viver bem (Eudaimonia) e no alcance da paz de espírito (Ataraxia) face a um mundo em constante mudança geopolítica.",
    context: "Fragmentação do Império de Alexandre, o Grande, e posterior ascensão do Império Romano. O cidadão perde a pólis e busca refúgio no cosmopolitismo.",
    concept: "Ataraxia: Estado de imperturbabilidade e serenidade da mente alcançado pela indiferença às coisas externas fora do nosso controle.",
    quote: "Não são as coisas que nos perturbam, mas o julgamento que fazemos sobre elas.",
    quoteAuthor: "Epicteto",
    philosophers: [
      { name: "Epicuro de Samos", lifespan: "341 – 270 a.C.", contribution: "Fundador do Epicurismo, defendia o prazer moderado e a ausência de dor." },
      { name: "Zenão de Cítio", lifespan: "334 – 262 a.C.", contribution: "Criador do Estoicismo, focado na autodisciplina e aceitação do destino." },
      { name: "Sêneca", lifespan: "4 a.C. – 65 d.C.", contribution: "Filósofo e estadista romano, mestre da resiliência e ética estoica prática." }
    ],
    aiPersona: "Sêneca, conselheiro estoico romano especialista em resiliência mental e superação das adversidades."
  },
  {
    id: "patristica",
    name: "Patrística (Neoplatonismo Cristão)",
    period: "Idade Média",
    dates: "c. II d.C. – VIII d.C.",
    yearStart: 100,
    line: "Metafísica & Ontologia",
    color: "violet",
    description: "Fase de transição e consolidação da teologia cristã frente à herança clássica greco-romana. Utiliza o platonismo para embasar filosoficamente os dogmas cristãos.",
    context: "Queda do Império Romano do Ocidente e consolidação da Igreja Católica como instituição central da Europa medieval.",
    concept: "Teoria da Iluminação Divina: O conhecimento da verdade imutável não vem da experiência sensorial, mas da luz interior concedida por Deus à alma humana.",
    quote: "Crê para que entendas, e entende para que creias.",
    quoteAuthor: "Santo Agostinho",
    philosophers: [
      { name: "Santo Agostinho de Hipona", lifespan: "354 – 430 d.C.", contribution: "Síntese genial entre o Neoplatonismo e a teologia cristã clássica." },
      { name: "Orígenes de Alexandria", lifespan: "c. 184 – 253 d.C.", contribution: "Pioneiro na interpretação alegórica das escrituras sagradas." }
    ],
    aiPersona: "Santo Agostinho de Hipona, conciliador da fé ardente com os mistérios platônicos da alma."
  },
  {
    id: "escolastica",
    name: "Escolástica",
    period: "Idade Média",
    dates: "c. IX d.C. – XIV d.C.",
    yearStart: 800,
    line: "Epistemologia & Lógica",
    color: "violet",
    description: "Método de pensamento que dominou as universidades medievais, focado em harmonizar a autoridade da revelação divina com a precisão da lógica aristotélica.",
    context: "Surgimento das primeiras universidades europeias (Paris, Bolonha, Oxford) e a redescoberta de obras perdidas de Aristóteles através de traduções árabes.",
    concept: "As Cinco Vias: Provas lógico-racionais da existência de Deus baseadas na causa eficiente, movimento, contingência, graus de perfeição e finalidade.",
    quote: "A razão não se opõe à fé, mas a coroa e a aperfeiçoa.",
    quoteAuthor: "São Tomás de Aquino",
    philosophers: [
      { name: "São Tomás de Aquino", lifespan: "1225 – 1274 d.C.", contribution: "Autor da Suma Teológica, cristianizou o aristotelismo." },
      { name: "Guilherme de Ockham", lifespan: "1287 – 1347 d.C.", contribution: "Formulou a 'Navalha de Ockham': hipóteses mais simples devem ser preferidas." }
    ],
    aiPersona: "São Tomás de Aquino, mestre da lógica teológica estruturada e das cinco provas cosmológicas."
  },
  {
    id: "racionalismo",
    name: "Racionalismo Moderno",
    period: "Idade Moderna",
    dates: "c. 1637 – 1716",
    yearStart: 1637,
    line: "Epistemologia & Lógica",
    color: "cyan",
    description: "Doutrina que estabelece a razão como a fonte primária de todo o conhecimento verdadeiro, defendendo a existência de ideias inatas e o método dedutivo matemático.",
    context: "A Revolução Científica (Galileu, Copérnico) abala as certezas teocêntricas, exigindo um novo método seguro e indubitável para as ciências.",
    concept: "Dúvida Metódica: Rejeitar tudo o que possa ser minimamente duvidoso até encontrar um ponto de certeza absoluta autoevidente.",
    quote: "Cogito, ergo sum. (Penso, logo existo).",
    quoteAuthor: "René Descartes",
    philosophers: [
      { name: "René Descartes", lifespan: "1596 – 1650", contribution: "Pai da filosofia moderna, inaugurou a busca pelo sujeito pensante indubitável." },
      { name: "Baruch Spinoza", lifespan: "1632 – 1677", contribution: "Defendeu o panteísmo, onde Deus e a Natureza são uma única substância (Deus sive Natura)." },
      { name: "Gottfried Leibniz", lifespan: "1646 – 1716", contribution: "Desenvolveu a teoria das Mônadas (átomos espirituais de percepção) e o cálculo." }
    ],
    aiPersona: "René Descartes, arquiteto da dúvida metódica e da matemática aplicada ao conhecimento da alma."
  },
  {
    id: "empirismo",
    name: "Empirismo Britânico",
    period: "Idade Moderna",
    dates: "c. 1690 – 1776",
    yearStart: 1690,
    line: "Epistemologia & Lógica",
    color: "cyan",
    description: "Corrente filosófica oposta ao racionalismo puro. Defende que a mente humana nasce como uma folha em branco (tábula rasa) e todo o saber deriva estritamente da experiência sensível.",
    context: "Ascensão da burguesia e do espírito prático e científico na Grã-Bretanha pós-Revolução Gloriosa.",
    concept: "Tábula Rasa: A ideia de que não nascemos com conhecimentos prévios; somos moldados e preenchidos pelas percepções e experiências da vida.",
    quote: "Não há nada no intelecto que não tenha passado antes pelos sentidos.",
    quoteAuthor: "John Locke",
    philosophers: [
      { name: "John Locke", lifespan: "1632 – 1704", contribution: "Teorizou a tábula rasa epistemológica e o liberalismo político." },
      { name: "David Hume", lifespan: "1711 – 1776", contribution: "Levou o empirismo ao ceticismo radical, criticando o princípio de causa e efeito." },
      { name: "Francis Bacon", lifespan: "1561 – 1626", contribution: "Criador do método indutivo científico e da máxima 'saber é poder'." }
    ],
    aiPersona: "David Hume, cético refinado que questiona nossas crenças em causas, efeitos e hábitos mentais."
  },
  {
    id: "iluminismo-contratual",
    name: "Iluminismo & Contratualismo",
    period: "Idade Moderna",
    dates: "c. 1651 – 1789",
    yearStart: 1651,
    line: "Ética & Política",
    color: "cyan",
    description: "Movimento intelectual que colocou a Razão, a Liberdade individual e o progresso científico como guias da humanidade, contestando o poder absolutista por meio de teorias de contrato social.",
    context: "A transição do feudalismo tardio para o capitalismo, culminando nas revoluções Burguesas (Americana e Francesa).",
    concept: "Contrato Social: A convenção racional hipotética em que indivíduos saem de um estado de natureza selvagem para fundar o Estado civil protetor.",
    quote: "O homem nasce livre, e em toda parte encontra-se acorrentado.",
    quoteAuthor: "Jean-Jacques Rousseau",
    philosophers: [
      { name: "Thomas Hobbes", lifespan: "1588 – 1679", contribution: "Defendeu o Leviatã como guardião absoluto para evitar a guerra de todos contra todos." },
      { name: "Jean-Jacques Rousseau", lifespan: "1712 – 1778", contribution: "Teorizou a soberania popular, a vontade geral e a bondade natural do homem corrompido pela sociedade." },
      { name: "Voltaire", lifespan: "1694 – 1778", contribution: "Paladino da tolerância religiosa, liberdade de expressão e crítico feroz do clero." }
    ],
    aiPersona: "Jean-Jacques Rousseau, defensor da liberdade natural, crítico da propriedade desigual e teórico do Contrato Social legítimo."
  },
  {
    id: "criticismo-kant",
    name: "Criticismo e Idealismo Alemão",
    period: "Idade Moderna",
    dates: "c. 1781 – 1831",
    yearStart: 1781,
    line: "Epistemologia & Lógica",
    color: "cyan",
    description: "Superação do debate racionalismo vs. empirismo. Investiga os limites e as estruturas cognitivas a priori da razão humana, dando origem ao Idealismo pós-kantiano.",
    context: "Impacto das descobertas da física de Newton e a necessidade de justificar a universalidade científica sem cair no ceticismo extremo de Hume.",
    concept: "Revolução Copernicana na Filosofia: Não é o nosso conhecimento que se molda aos objetos exteriores, mas os objetos que se moldam às nossas faculdades mentais de percepção.",
    quote: "O céu estrelado sobre mim e a lei moral dentro de mim.",
    quoteAuthor: "Immanuel Kant",
    philosophers: [
      { name: "Immanuel Kant", lifespan: "1724 – 1804", contribution: "Autor da Crítica da Razão Pura e formulador do Imperativo Categórico na ética." },
      { name: "G. W. F. Hegel", lifespan: "1770 – 1831", contribution: "Pai da dialética idealista, onde a história é a evolução autoconsciente do Espírito Absoluto (Geist)." }
    ],
    aiPersona: "Immanuel Kant, filósofo prussiano da moral incondicional e das estruturas transcendentais da mente."
  },
  {
    id: "materialismo-historico",
    name: "Materialismo Histórico Dialético",
    period: "Idade Contemporânea",
    dates: "c. 1848 – 1883",
    yearStart: 1848,
    line: "Ética & Política",
    color: "rose",
    description: "Abordagem metodológica que analisa as transformações das sociedades com base em suas condições materiais, econômicas e na constante luta de classes.",
    context: "A consolidação da Revolução Industrial, a urbanização caótica e o surgimento das precárias condições de trabalho da classe operária (proletariado).",
    concept: "Infraestrutura e Superestrutura: A estrutura econômica de uma sociedade (infraestrutura) determina diretamente suas ideias, leis, moral e religiões (superestrutura).",
    quote: "Os filósofos apenas interpretaram o mundo de diferentes maneiras; a questão, porém, é transformá-lo.",
    quoteAuthor: "Karl Marx",
    philosophers: [
      { name: "Karl Marx", lifespan: "1818 – 1883", contribution: "Crítico genial do capitalismo fabril, autor d'O Capital e coautor do Manifesto Comunista." },
      { name: "Friedrich Engels", lifespan: "1820 – 1895", contribution: "Parceiro intelectual de Marx, pioneiro em estudos do socialismo científico." }
    ],
    aiPersona: "Karl Marx, analista implacável das relações de produção capitalistas e defensor da emancipação do proletariado."
  },
  {
    id: "existencialismo-vitalismo",
    name: "Existencialismo & Vitalismo",
    period: "Idade Contemporânea",
    dates: "c. 1843 – 1980",
    yearStart: 1843,
    line: "Existencialismo & Fenomenologia",
    color: "rose",
    description: "Filosofia focada no indivíduo concreto, sua dor, sua liberdade absoluta, sua angústia perante o nada e a responsabilidade de criar seu próprio propósito em um universo absurdo.",
    context: "As crises espirituais do século XIX e as brutais desilusões humanitárias após as Duas Guerras Mundiais do século XX.",
    concept: "A existência precede a essência: O ser humano primeiro nasce, surge no mundo, e somente depois se define e constrói o que ele realmente é por suas escolhas.",
    quote: "O homem está condenado a ser livre.",
    quoteAuthor: "Jean-Paul Sartre",
    philosophers: [
      { name: "Friedrich Nietzsche", lifespan: "1844 – 1900", contribution: "Decretou a morte de Deus, criticou a moral judaico-cristã e defendeu o Super-homem (Übermensch)." },
      { name: "Søren Kierkegaard", lifespan: "1813 – 1855", contribution: "Pai espiritual do existencialismo cristão, focado na angústia e no salto de fé." },
      { name: "Jean-Paul Sartre", lifespan: "1905 – 1980", contribution: "Principal sistematizador do existencialismo ateu e engajamento político pós-guerra." },
      { name: "Simone de Beauvoir", lifespan: "1908 – 1986", contribution: "Pensadora existencialista revolucionária, fundadora do feminismo filosófico moderno." }
    ],
    aiPersona: "Jean-Paul Sartre, filósofo da liberdade incondicional, do engajamento e criador do existencialismo ateu."
  },
  {
    id: "teoria-critica",
    name: "Escola de Frankfurt (Teoria Crítica)",
    period: "Idade Contemporânea",
    dates: "c. 1923 – presente",
    yearStart: 1923,
    line: "Ética & Política",
    color: "rose",
    description: "Grupo de intelectuais de esquerda que remodelou a análise marxista integrando conceitos de psicanálise freudiana e sociologia para desmascarar as novas formas de dominação e alienação da sociedade de massas.",
    context: "A ascensão dos regimes totalitários na Europa (Fascismo, Nazismo) e o surgimento do consumo de massa industrializado nos Estados Unidos.",
    concept: "Indústria Cultural: A mercantilização da cultura e da arte para produzir passividade, anestesia política e padronização dos desejos dos indivíduos.",
    quote: "A liberdade de escolha não assegura a soberania se a escolha é determinada de antemão.",
    quoteAuthor: "Theodor Adorno",
    philosophers: [
      { name: "Theodor Adorno", lifespan: "1903 – 1969", contribution: "Coautor de Dialética do Esclarecimento, mestre da crítica estética e cultural." },
      { name: "Max Horkheimer", lifespan: "1895 – 1973", contribution: "Diretor do Instituto de Pesquisas Sociais, delimitou o escopo da Teoria Crítica." },
      { name: "Jürgen Habermas", lifespan: "1929 – presente", contribution: "Formulou a Teoria da Ação Comunicativa e o agir democrático deliberativo." }
    ],
    aiPersona: "Theodor Adorno, crítico agudo da indústria de massas, da racionalidade instrumental e da alienação moderna."
  }
];

// Classes auxiliares para estilização dinâmica por cor
const COLOR_CLASSES = {
  amber: { bg: 'rgba(245, 158, 11, 0.1)', text: 'hsl(35, 92%, 50%)', border: 'rgba(245, 158, 11, 0.25)' },
  violet: { bg: 'rgba(139, 92, 246, 0.1)', text: 'hsl(263, 90%, 65%)', border: 'rgba(139, 92, 246, 0.25)' },
  cyan: { bg: 'rgba(6, 182, 212, 0.1)', text: 'hsl(188, 86%, 53%)', border: 'rgba(6, 182, 212, 0.25)' },
  rose: { bg: 'rgba(244, 63, 94, 0.1)', text: 'hsl(343, 90%, 60%)', border: 'rgba(244, 63, 94, 0.25)' }
};

// ==========================================
// STATE MANAGEMENT & EVENT LISTENERS
// ==========================================
let activeMovement = PHILOSOPHICAL_MOVEMENTS[0];
let selectedPeriod = "Todos";
let selectedLine = "Todos";
let searchQuery = "";
let sortOrder = "asc"; // asc: cronológico, desc: reverso

// Histórico de chats em memória (ID Movimento -> Mensagens)
const chatMessages = {};

// Controle de Áudio
let isPlayingAudio = false;
let activeAudio = null;

document.addEventListener('DOMContentLoaded', () => {
    initSharedTheme();
    initApiKeyForm();
    initFilters();
    initSearchAndSort();
    renderTimeline();
    selectMovement(activeMovement.id);
});

/**
 * Shared Theme Manager (Light/Dark)
 */
function initSharedTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const themeIcon = document.querySelector('#theme-toggle i');
    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o';
    }
}

/**
 * Gemini API Key Handler
 */
function initApiKeyForm() {
    const keyInput = document.getElementById('gemini-key');
    const saveBtn = document.getElementById('save-key-btn');
    const clearBtn = document.getElementById('clear-key-btn');
    const statusText = document.getElementById('key-status');

    // Load saved key
    const savedKey = localStorage.getItem('gemini_api_key') || '';
    if (savedKey) {
        keyInput.value = savedKey;
        updateKeyStatus(true);
    } else {
        updateKeyStatus(false);
    }

    saveBtn.addEventListener('click', () => {
        const key = keyInput.value.trim();
        if (key) {
            localStorage.setItem('gemini_api_key', key);
            updateKeyStatus(true);
            renderDetails();
        } else {
            alert('Por favor, cole uma chave de API válida.');
        }
    });

    clearBtn.addEventListener('click', () => {
        localStorage.removeItem('gemini_api_key');
        keyInput.value = '';
        updateKeyStatus(false);
        // Refresh details chat pane to display key warning
        renderDetails();
    });

    function updateKeyStatus(hasKey) {
        if (!statusText) return;
        if (hasKey) {
            statusText.textContent = 'Configurada';
            statusText.style.color = 'hsl(142, 70%, 45%)';
        } else {
            statusText.textContent = 'Não configurada';
            statusText.style.color = 'hsl(0, 75%, 55%)';
        }
    }
}

function getApiKey() {
    return localStorage.getItem('gemini_api_key') || '';
}

/**
 * Search and Sort Inputs
 */
function initSearchAndSort() {
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const sortToggle = document.getElementById('sort-toggle');
    const sortLabel = document.getElementById('sort-label');

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchQuery) {
            searchClear.style.display = 'block';
        } else {
            searchClear.style.display = 'none';
        }
        renderTimeline();
    });

    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClear.style.display = 'none';
        renderTimeline();
    });

    sortToggle.addEventListener('click', () => {
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        sortLabel.textContent = sortOrder === 'asc' ? 'Antigo → Novo' : 'Novo → Antigo';
        renderTimeline();
    });
}

/**
 * Initialize Category Buttons
 */
function initFilters() {
    const periods = ["Todos", "Antiguidade", "Idade Média", "Idade Moderna", "Idade Contemporânea"];
    const lines = ["Todos", "Metafísica & Ontologia", "Ética & Política", "Epistemologia & Lógica", "Existencialismo & Fenomenologia"];

    const periodContainer = document.getElementById('period-filters');
    const lineContainer = document.getElementById('line-filters');

    // Build Periods
    periods.forEach(p => {
        const btn = document.createElement('button');
        btn.classList.add('filter-btn');
        if (p === selectedPeriod) btn.classList.add('active');
        btn.textContent = p;
        btn.addEventListener('click', () => {
            selectedPeriod = p;
            document.querySelectorAll('#period-filters .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTimeline();
        });
        periodContainer.appendChild(btn);
    });

    // Build Lines
    lines.forEach(l => {
        const btn = document.createElement('button');
        btn.classList.add('filter-btn');
        if (l === selectedLine) btn.classList.add('active');
        btn.textContent = l;
        btn.addEventListener('click', () => {
            selectedLine = l;
            document.querySelectorAll('#line-filters .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTimeline();
        });
        lineContainer.appendChild(btn);
    });
}

/**
 * Render Left Timeline Card List (XSS Safe)
 */
function renderTimeline() {
    const container = document.getElementById('timeline-list-container');
    if (!container) return;

    container.replaceChildren();

    // Filter movements
    const filtered = PHILOSOPHICAL_MOVEMENTS.filter(item => {
        const matchesPeriod = selectedPeriod === "Todos" || item.period === selectedPeriod;
        const matchesLine = selectedLine === "Todos" || item.line === selectedLine;
        const matchesSearch = searchQuery === "" || 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.concept.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.philosophers.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        
        return matchesPeriod && matchesLine && matchesSearch;
    }).sort((a, b) => {
        return sortOrder === "asc" ? a.yearStart - b.yearStart : b.yearStart - a.yearStart;
    });

    if (filtered.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.style.padding = '2rem';
        emptyMsg.style.textAlign = 'center';
        emptyMsg.style.color = 'var(--text-secondary)';
        
        const icon = document.createElement('i');
        icon.className = 'fa fa-question-circle-o';
        icon.style.fontSize = '2rem';
        icon.style.display = 'block';
        icon.style.marginBottom = '0.5rem';
        emptyMsg.appendChild(icon);

        const text = document.createElement('p');
        text.textContent = 'Nenhuma corrente encontrada para os filtros atuais.';
        emptyMsg.appendChild(text);

        container.appendChild(emptyMsg);
        return;
    }

    filtered.forEach(movement => {
        const isSelected = activeMovement.id === movement.id;
        
        const wrapper = document.createElement('div');
        wrapper.classList.add('timeline-card-wrapper');
        if (isSelected) wrapper.classList.add('active');

        // Timeline dot
        const dot = document.createElement('span');
        dot.classList.add('timeline-card-dot');
        wrapper.appendChild(dot);

        // Timeline card body
        const card = document.createElement('div');
        card.classList.add('timeline-interactive-card');
        card.addEventListener('click', () => selectMovement(movement.id));

        // Header info
        const header = document.createElement('div');
        header.classList.add('timeline-card-header');

        const datesSpan = document.createElement('span');
        datesSpan.style.fontSize = '0.8rem';
        datesSpan.style.fontWeight = '600';
        
        const calIcon = document.createElement('i');
        calIcon.className = 'fa fa-calendar';
        calIcon.style.marginRight = '0.4rem';
        calIcon.style.color = 'var(--accent-color)';
        datesSpan.appendChild(calIcon);
        
        const dateText = document.createTextNode(movement.dates);
        datesSpan.appendChild(dateText);
        header.appendChild(datesSpan);

        // Period tag
        const colorCfg = COLOR_CLASSES[movement.color] || COLOR_CLASSES.amber;
        const tag = document.createElement('span');
        tag.classList.add('timeline-card-period');
        tag.style.backgroundColor = colorCfg.bg;
        tag.style.color = colorCfg.text;
        tag.textContent = movement.period;
        header.appendChild(tag);

        card.appendChild(header);

        // Title
        const title = document.createElement('h3');
        title.style.fontSize = '1rem';
        title.style.fontWeight = '700';
        title.textContent = movement.name;
        card.appendChild(title);

        // Short desc
        const desc = document.createElement('p');
        desc.style.fontSize = '0.75rem';
        desc.style.marginTop = '0.5rem';
        desc.style.marginBottom = '0.5rem';
        desc.textContent = movement.description;
        card.appendChild(desc);

        // Featured Philosophers
        const footer = document.createElement('div');
        footer.style.display = 'flex';
        footer.style.justifyContent = 'space-between';
        footer.style.alignItems = 'center';
        footer.style.marginTop = '0.75rem';
        footer.style.paddingTop = '0.5rem';
        footer.style.borderTop = '1px solid var(--border-color)';

        const philDiv = document.createElement('div');
        philDiv.style.display = 'flex';
        philDiv.style.flexWrap = 'wrap';
        philDiv.style.gap = '0.25rem';
        
        movement.philosophers.forEach(p => {
            const badge = document.createElement('span');
            badge.style.fontSize = '0.65rem';
            badge.style.background = 'var(--bg-tertiary)';
            badge.style.padding = '0.15rem 0.4rem';
            badge.style.borderRadius = '4px';
            badge.style.border = '1px solid var(--border-color)';
            badge.textContent = p.name;
            philDiv.appendChild(badge);
        });
        footer.appendChild(philDiv);

        const arrow = document.createElement('i');
        arrow.className = 'fa fa-chevron-right';
        arrow.style.fontSize = '0.75rem';
        arrow.style.color = 'var(--text-tertiary)';
        footer.appendChild(arrow);

        card.appendChild(footer);
        wrapper.appendChild(card);
        container.appendChild(wrapper);
    });
}

/**
 * Handle card select
 */
function selectMovement(id) {
    const selected = PHILOSOPHICAL_MOVEMENTS.find(m => m.id === id);
    if (!selected) return;

    activeMovement = selected;
    
    // Stop playing audio when era changes
    stopActiveAudio();

    // Re-render timeline to shift active class
    renderTimeline();
    // Render details panel
    renderDetails();
}

/**
 * Render Right Detail Column (XSS Safe)
 */
function renderDetails() {
    const container = document.getElementById('detail-card');
    if (!container) return;

    container.replaceChildren();

    // Context visual color accent border
    const colorCfg = COLOR_CLASSES[activeMovement.color] || COLOR_CLASSES.amber;
    container.style.borderLeft = `4px solid ${colorCfg.text}`;

    // 1. Meta / Line
    const metaHeader = document.createElement('div');
    metaHeader.classList.add('timeline-card-header');
    metaHeader.style.marginBottom = '1rem';

    const tagLabel = document.createElement('span');
    tagLabel.style.fontSize = '0.7rem';
    tagLabel.style.fontWeight = '700';
    tagLabel.style.textTransform = 'uppercase';
    tagLabel.style.color = 'var(--text-tertiary)';
    tagLabel.textContent = 'Ficha de Estudo Detalhada';
    metaHeader.appendChild(tagLabel);

    const axisBadge = document.createElement('span');
    axisBadge.style.fontSize = '0.75rem';
    axisBadge.style.fontWeight = '600';
    axisBadge.style.background = 'var(--accent-light)';
    axisBadge.style.color = 'var(--accent-color)';
    axisBadge.style.padding = '0.2rem 0.6rem';
    axisBadge.style.borderRadius = '20px';
    axisBadge.textContent = activeMovement.line;
    metaHeader.appendChild(axisBadge);
    container.appendChild(metaHeader);

    // 2. Title
    const title = document.createElement('h2');
    title.style.fontSize = '1.5rem';
    title.style.marginBottom = '1rem';
    title.textContent = activeMovement.name;
    container.appendChild(title);

    // 3. Description
    const desc = document.createElement('p');
    desc.style.fontSize = '0.9rem';
    desc.style.lineHeight = '1.6';
    desc.style.marginBottom = '1.5rem';
    desc.textContent = activeMovement.description;
    container.appendChild(desc);

    // 4. Context Block
    const contextBlock = document.createElement('div');
    contextBlock.classList.add('detail-info-block');

    const ctxTitle = document.createElement('h4');
    ctxTitle.classList.add('detail-section-title');
    
    const ctxDot = document.createElement('span');
    ctxDot.style.width = '6px';
    ctxDot.style.height = '6px';
    ctxDot.style.borderRadius = '50%';
    ctxDot.style.backgroundColor = 'var(--accent-color)';
    ctxDot.style.display = 'inline-block';
    ctxTitle.appendChild(ctxDot);
    
    const ctxTitleText = document.createTextNode(' Contexto Histórico');
    ctxTitle.appendChild(ctxTitleText);
    contextBlock.appendChild(ctxTitle);

    const ctxDesc = document.createElement('p');
    ctxDesc.style.fontSize = '0.75rem';
    ctxDesc.style.margin = '0';
    ctxDesc.textContent = activeMovement.context;
    contextBlock.appendChild(ctxDesc);
    container.appendChild(contextBlock);

    // 5. Concept Block
    const conceptBlock = document.createElement('div');
    conceptBlock.classList.add('detail-info-block');

    const conceptTitle = document.createElement('h4');
    conceptTitle.classList.add('detail-section-title');
    conceptTitle.style.color = 'hsl(263, 90%, 65%)';
    
    const conceptDot = document.createElement('span');
    conceptDot.style.width = '6px';
    conceptDot.style.height = '6px';
    conceptDot.style.borderRadius = '50%';
    conceptDot.style.backgroundColor = 'hsl(263, 90%, 65%)';
    conceptDot.style.display = 'inline-block';
    conceptTitle.appendChild(conceptDot);
    
    const conceptTitleText = document.createTextNode(' Conceito Chave');
    conceptTitle.appendChild(conceptTitleText);
    conceptBlock.appendChild(conceptTitle);

    const conceptDesc = document.createElement('p');
    conceptDesc.style.fontSize = '0.75rem';
    conceptDesc.style.fontFamily = 'monospace';
    conceptDesc.style.margin = '0';
    conceptDesc.textContent = activeMovement.concept;
    conceptBlock.appendChild(conceptDesc);
    container.appendChild(conceptBlock);

    // 6. Quote Card (with TTS Audio support)
    const quoteCard = document.createElement('div');
    quoteCard.classList.add('quote-panel');

    const quoteQ = document.createElement('span');
    quoteQ.style.fontSize = '3.5rem';
    quoteQ.style.fontFamily = 'serif';
    quoteQ.style.position = 'absolute';
    quoteQ.style.left = '0.5rem';
    quoteQ.style.top = '0.2rem';
    quoteQ.style.color = 'rgba(0, 180, 216, 0.1)';
    quoteQ.style.lineHeight = '1';
    quoteQ.style.userSelect = 'none';
    quoteQ.textContent = '“';
    quoteCard.appendChild(quoteQ);

    const quoteText = document.createElement('p');
    quoteText.classList.add('quote-text');
    quoteText.style.paddingRight = '2rem';
    quoteText.textContent = activeMovement.quote;
    quoteCard.appendChild(quoteText);

    const quoteAuth = document.createElement('p');
    quoteAuth.classList.add('quote-author');
    quoteAuth.textContent = `— ${activeMovement.quoteAuthor}`;
    quoteCard.appendChild(quoteAuth);

    // Audio Play Button
    const audioBtn = document.createElement('button');
    audioBtn.className = 'quote-audio-btn';
    if (isPlayingAudio) audioBtn.classList.add('playing');
    audioBtn.setAttribute('title', 'Ouvir Citação com Voz do Gemini TTS');
    audioBtn.setAttribute('aria-label', 'Ouvir citação');

    const audioIcon = document.createElement('i');
    audioIcon.className = isPlayingAudio ? 'fa fa-stop' : 'fa fa-volume-up';
    audioBtn.appendChild(audioIcon);
    audioBtn.addEventListener('click', () => toggleQuoteSpeech(activeMovement));
    quoteCard.appendChild(audioBtn);

    container.appendChild(quoteCard);

    // 7. Philosophers Info
    const philTitle = document.createElement('h4');
    philTitle.style.fontSize = '0.9rem';
    philTitle.style.fontWeight = '700';
    philTitle.style.marginBottom = '0.75rem';
    philTitle.textContent = 'Grandes Pensadores desta Corrente:';
    container.appendChild(philTitle);

    activeMovement.philosophers.forEach(p => {
        const item = document.createElement('div');
        item.classList.add('philosopher-list-item');

        const top = document.createElement('div');
        top.style.display = 'flex';
        top.style.justifyContent = 'space-between';
        top.style.alignItems = 'center';
        top.style.marginBottom = '0.25rem';

        const nameSpan = document.createElement('span');
        nameSpan.style.fontSize = '0.8rem';
        nameSpan.style.fontWeight = '700';
        nameSpan.style.color = 'var(--accent-color)';
        nameSpan.textContent = p.name;
        top.appendChild(nameSpan);

        const lifeSpan = document.createElement('span');
        lifeSpan.style.fontSize = '0.65rem';
        lifeSpan.style.color = 'var(--text-tertiary)';
        lifeSpan.style.background = 'var(--bg-secondary)';
        lifeSpan.style.padding = '0.1rem 0.4rem';
        lifeSpan.style.borderRadius = '10px';
        lifeSpan.style.border = '1px solid var(--border-color)';
        lifeSpan.textContent = p.lifespan;
        top.appendChild(lifeSpan);

        item.appendChild(top);

        const contrib = document.createElement('p');
        contrib.style.fontSize = '0.7rem';
        contrib.style.margin = '0';
        contrib.textContent = p.contribution;
        item.appendChild(contrib);

        container.appendChild(item);
    });

    // 8. AI Chat Section
    renderChatArea(container);
}

/**
 * Render the Chat Area inside the details container (XSS Safe)
 */
function renderChatArea(parent) {
    const chatDiv = document.createElement('div');
    chatDiv.classList.add('chat-section');

    const header = document.createElement('div');
    header.classList.add('chat-header');

    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('chat-title-wrapper');

    const chatIcon = document.createElement('i');
    chatIcon.className = 'fa fa-commenting-o';
    titleWrapper.appendChild(chatIcon);

    const titleTextDiv = document.createElement('div');
    const titleText = document.createElement('h3');
    titleText.style.fontSize = '0.85rem';
    titleText.style.fontWeight = '700';
    titleText.textContent = 'Diálogos com o Absoluto';
    titleTextDiv.appendChild(titleText);
    
    const subText = document.createElement('p');
    subText.style.fontSize = '0.65rem';
    subText.style.color = 'var(--text-tertiary)';
    subText.style.margin = '0';
    subText.textContent = `Dialogue com a inteligência artificial do pensador.`;
    titleTextDiv.appendChild(subText);
    titleWrapper.appendChild(titleTextDiv);
    header.appendChild(titleWrapper);

    // Active status
    const statusSpan = document.createElement('span');
    statusSpan.style.fontSize = '0.65rem';
    statusSpan.style.fontWeight = '600';
    statusSpan.style.background = 'rgba(0, 180, 216, 0.1)';
    statusSpan.style.color = 'var(--accent-color)';
    statusSpan.style.border = '1px solid rgba(0, 180, 216, 0.2)';
    statusSpan.style.padding = '0.2rem 0.5rem';
    statusSpan.style.borderRadius = '20px';
    
    const sparkleIcon = document.createElement('i');
    sparkleIcon.className = 'fa fa-magic';
    sparkleIcon.style.marginRight = '0.25rem';
    statusSpan.appendChild(sparkleIcon);
    
    const statusLabel = document.createTextNode(getApiKey() ? 'Gemini Conectado' : 'Chave Pendente');
    statusSpan.appendChild(statusLabel);
    header.appendChild(statusSpan);

    chatDiv.appendChild(header);

    // Warning about Api Key if not exists
    const apiKey = getApiKey();
    if (!apiKey) {
        const warning = document.createElement('div');
        warning.classList.add('chat-warning');
        warning.textContent = 'Atenção: Configure sua Chave de API do Gemini no topo da página para iniciar um diálogo por Inteligência Artificial.';
        chatDiv.appendChild(warning);
    }

    // Chat Log
    const chatLog = document.createElement('div');
    chatLog.classList.add('chat-log');
    
    // Load chat history or set initial greeting
    const mId = activeMovement.id;
    if (!chatMessages[mId]) {
        chatMessages[mId] = [
            { role: 'assistant', text: `Saudações, buscador da sabedoria. Sou a consciência de ${activeMovement.aiPersona}. O que gostaria de indagar hoje sobre nossos postulados?` }
        ];
    }

    chatMessages[mId].forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('chat-msg');
        msgDiv.classList.add(msg.role === 'user' ? 'user' : 'assistant');

        const sender = document.createElement('span');
        sender.classList.add('chat-msg-sender');
        sender.textContent = msg.role === 'user' ? 'Você (Discípulo)' : activeMovement.quoteAuthor;
        msgDiv.appendChild(sender);

        const bubble = document.createElement('div');
        bubble.classList.add('chat-msg-bubble');
        bubble.textContent = msg.text;
        msgDiv.appendChild(bubble);

        chatLog.appendChild(msgDiv);
    });
    chatDiv.appendChild(chatLog);

    // Scroll chat log to bottom
    setTimeout(() => {
        chatLog.scrollTop = chatLog.scrollHeight;
    }, 50);

    // Form controls
    const form = document.createElement('form');
    form.classList.add('chat-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleChatSubmit(chatLog, form);
    });

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'chat-input';
    input.placeholder = apiKey ? 'Digite sua indagação filosófica...' : 'Insira a chave de API acima para digitar';
    if (!apiKey) input.disabled = true;
    form.appendChild(input);

    const sendBtn = document.createElement('button');
    sendBtn.type = 'submit';
    sendBtn.className = 'chat-send-btn';
    sendBtn.setAttribute('aria-label', 'Enviar mensagem');
    if (!apiKey) sendBtn.disabled = true;

    const sendIcon = document.createElement('i');
    sendIcon.className = 'fa fa-paper-plane-o';
    sendBtn.appendChild(sendIcon);
    form.appendChild(sendBtn);

    chatDiv.appendChild(form);

    parent.appendChild(chatDiv);
}

/**
 * Handle user message submission
 */
async function handleChatSubmit(chatLog, form) {
    const input = form.querySelector('.chat-input');
    const sendBtn = form.querySelector('.chat-send-btn');
    const userText = input.value.trim();
    if (!userText || !getApiKey()) return;

    input.value = '';
    input.disabled = true;
    sendBtn.disabled = true;

    const mId = activeMovement.id;
    
    // Add user message to history
    chatMessages[mId].push({ role: 'user', text: userText });
    
    // Render immediately in chatLog
    const userMsgDiv = document.createElement('div');
    userMsgDiv.classList.add('chat-msg', 'user');
    
    const sender = document.createElement('span');
    sender.classList.add('chat-msg-sender');
    sender.textContent = 'Você (Discípulo)';
    userMsgDiv.appendChild(sender);

    const bubble = document.createElement('div');
    bubble.classList.add('chat-msg-bubble');
    bubble.textContent = userText;
    userMsgDiv.appendChild(bubble);
    chatLog.appendChild(userMsgDiv);
    
    chatLog.scrollTop = chatLog.scrollHeight;

    // Show typing status
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('chat-msg', 'assistant');
    
    const assistantSender = document.createElement('span');
    assistantSender.classList.add('chat-msg-sender');
    assistantSender.textContent = `${activeMovement.quoteAuthor} está meditando...`;
    typingDiv.appendChild(assistantSender);

    const typingBubble = document.createElement('div');
    typingBubble.classList.add('chat-msg-bubble');
    typingBubble.style.color = 'var(--text-tertiary)';
    typingBubble.style.fontStyle = 'italic';
    typingBubble.textContent = 'Refletindo sobre as palavras...';
    typingDiv.appendChild(typingBubble);
    
    chatLog.appendChild(typingDiv);
    chatLog.scrollTop = chatLog.scrollHeight;

    try {
        const apiKey = getApiKey();
        // Model matches user requirements, securely fetch using HTTPS
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;
        
        const systemPrompt = `Você é o próprio filósofo clássico/defensor da escola de pensamento: ${activeMovement.aiPersona}. 
A corrente correspondente é: "${activeMovement.name}". 
Instruções:
1. Responda em português de maneira imersiva, sábia, intelectual e coerente com seus escritos reais.
2. Evite quebras de quarta parede. Você realmente é essa consciência filosófica transcendendo as eras.
3. Se o usuário fizer uma pergunta anacrônica (ex: inteligência artificial, internet, computadores), tente traduzir isso para a sua própria realidade conceitual (por exemplo, "artifícios mecânicos sem alma" ou "uma extensão da técnica instrumental").
4. Mantenha a resposta concisa, estimulante e profunda (máximo de 2 a 3 parágrafos).`;

        // Gather history
        const promptPayload = {
            contents: [
                {
                    role: "user",
                    parts: [{ text: `Pergunta do discípulo: "${userText}"` }]
                }
            ],
            systemInstruction: {
                parts: [{ text: systemPrompt }]
            }
        };

        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(promptPayload)
        });

        if (!res.ok) {
            throw new Error(`Gemini API returned status ${res.status}`);
        }

        const data = await res.json();
        const aiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Meus pensamentos falharam ao alcançar o plano mundano. Indague-me novamente.";
        
        // Remove typing indicator and save history
        chatLog.removeChild(typingDiv);
        chatMessages[mId].push({ role: 'assistant', text: aiResponse });

        // Render AI message
        const responseDiv = document.createElement('div');
        responseDiv.classList.add('chat-msg', 'assistant');

        const respSender = document.createElement('span');
        respSender.classList.add('chat-msg-sender');
        respSender.textContent = activeMovement.quoteAuthor;
        responseDiv.appendChild(respSender);

        const respBubble = document.createElement('div');
        respBubble.classList.add('chat-msg-bubble');
        respBubble.textContent = aiResponse;
        responseDiv.appendChild(respBubble);

        chatLog.appendChild(responseDiv);

    } catch (err) {
        console.error('Erro na conexão com o Gemini:', err);
        chatLog.removeChild(typingDiv);
        
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('chat-msg', 'assistant');
        
        const errBubble = document.createElement('div');
        errBubble.classList.add('chat-msg-bubble');
        errBubble.style.color = 'hsl(0, 75%, 55%)';
        errBubble.textContent = `Falha na conexão com a consciência da IA (${err.message}). Por favor, verifique se sua chave API é válida.`;
        errorDiv.appendChild(errBubble);
        
        chatLog.appendChild(errorDiv);
    } finally {
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
        chatLog.scrollTop = chatLog.scrollHeight;
    }
}

/**
 * Speech synthesis with Gemini (TTS)
 */
async function toggleQuoteSpeech(movement) {
    if (isPlayingAudio) {
        stopActiveAudio();
        return;
    }

    const apiKey = getApiKey();
    if (!apiKey) {
        alert('Por favor, configure sua chave de API do Gemini no topo da página para escutar a citação por voz.');
        return;
    }

    setIsPlaying(true);

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-tts:generateContent?key=${apiKey}`;
        const textToSpeak = `Citação de ${movement.quoteAuthor}: "${movement.quote}"`;
        
        const payload = {
            contents: [{ parts: [{ text: `Diga com voz solene, pausada e reflexiva em português: ${textToSpeak}` }] }],
            generationConfig: {
                responseModalities: ["AUDIO"],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: {
                            voiceName: "Kore" // Rich prebuilt voice
                        }
                    }
                }
            }
        };

        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            throw new Error(`Gemini TTS API returned status ${res.status}`);
        }

        const data = await res.json();
        const base64Audio = data?.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
        
        if (!base64Audio) {
            throw new Error("Dados de áudio não encontrados na resposta do Gemini.");
        }

        // Convert PCM to WAV
        const wavUrl = pcmToWav(base64Audio);
        playWavUrl(wavUrl);

    } catch (err) {
        console.error('Erro na síntese de voz:', err);
        alert(`Não foi possível carregar a citação falada da IA neste momento. Detalhes: ${err.message}`);
        setIsPlaying(false);
    }
}

function setIsPlaying(playing) {
    isPlayingAudio = playing;
    const btn = document.querySelector('.quote-audio-btn');
    if (!btn) return;
    
    if (playing) {
        btn.classList.add('playing');
        btn.querySelector('i').className = 'fa fa-stop';
    } else {
        btn.classList.remove('playing');
        btn.querySelector('i').className = 'fa fa-volume-up';
    }
}

function stopActiveAudio() {
    if (activeAudio) {
        try {
            activeAudio.pause();
            activeAudio = null;
        } catch (e) {}
    }
    setIsPlaying(false);
}

function playWavUrl(url) {
    stopActiveAudio();
    
    activeAudio = new Audio(url);
    activeAudio.onended = () => {
        setIsPlaying(false);
        activeAudio = null;
    };
    activeAudio.play();
}

/**
 * PCM-16 (audio/L16) Base64 to WAV blob URL
 */
function pcmToWav(pcmBase64, sampleRate = 24000) {
    const binaryString = atob(pcmBase64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    const buffer = bytes.buffer;
    
    // 44 Byte WAV Header
    const wavHeader = new ArrayBuffer(44);
    const view = new DataView(wavHeader);
    
    const writeString = (view, offset, string) => {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    };

    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + buffer.byteLength, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // Raw PCM
    view.setUint16(22, 1, true); // Mono
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true); // Byte rate
    view.setUint16(32, 2, true); // Block align
    view.setUint16(34, 16, true); // Bits per sample
    writeString(view, 36, 'data');
    view.setUint32(40, buffer.byteLength, true);
    
    const finalWav = new Uint8Array(wavHeader.byteLength + buffer.byteLength);
    finalWav.set(new Uint8Array(wavHeader), 0);
    finalWav.set(new Uint8Array(buffer), wavHeader.byteLength);
    
    const blob = new Blob([finalWav], { type: 'audio/wav' });
    return URL.createObjectURL(blob);
}
