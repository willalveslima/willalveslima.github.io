// ==========================================
// DATA: Grandes Marcos Científicos e Tecnológicos
// ==========================================
const SCIENCE_MOVEMENTS = [
  {
    id: "escrita-cuneiforme",
    name: "Escrita Cuneiforme (Mesopotâmia)",
    period: "Antiguidade",
    dates: "c. 3200 a.C.",
    yearStart: -3200,
    line: "Tecnologias de Comunicação",
    color: "amber",
    description: "O primeiro sistema de escrita registrado da humanidade, criado pelos sumérios, revolucionando a administração, a lei e o registro de saberes primordiais.",
    context: "Surgimento das primeiras cidades-estado mesopotâmicas e a necessidade de controle de impostos, colheitas e contabilidade de comércio.",
    concept: "Codificação do Conhecimento: A transição da tradição oral para a memória física indelével externa gravada em tabletes de argila.",
    quote: "A escrita é o manto que protege as palavras contra o esquecimento e o tempo.",
    quoteAuthor: "Escribas Sumérios",
    philosophers: [
      { name: "Escribas Sumérios", lifespan: "c. 3200 a.C.", contribution: "Desenvolveram e mantiveram o sistema de caracteres em forma de cunha." }
    ],
    aiPersona: "Escriba Sumério, registrador oficial dos saberes mesopotâmicos."
  },
  {
    id: "invencao-papiro",
    name: "Invenção do Papiro",
    period: "Antiguidade",
    dates: "c. 3000 a.C.",
    yearStart: -3000,
    line: "Tecnologias de Comunicação",
    color: "amber",
    description: "O desenvolvimento da folha de papiro pelos egípcios, criando o primeiro suporte de escrita leve, flexível, portátil e durável do mundo antigo.",
    context: "A centralização do Império Egípcio e a necessidade de transportar leis, registros fiscais e textos médicos/geométricos por longas distâncias ao longo do Nilo.",
    concept: "Portabilidade da Informação: Aceleração na circulação transfronteiriça de textos literários, científicos e administrativos.",
    quote: "O papiro carrega a palavra através dos rios e do tempo, eternizando a sabedoria dos reis e escribas.",
    quoteAuthor: "Escribas Egípcios",
    philosophers: [
      { name: "Escribas Egípcios", lifespan: "c. 3000 a.C.", contribution: "Sistematizaram a fabricação e o arquivamento de rolos de escrita." }
    ],
    aiPersona: "Imhotep, sábio egípcio e arquiteto, guardião das ciências médicas e administrativas do Antigo Império."
  },
  {
    id: "prensa-gutenberg",
    name: "Imprensa de Tipos Móveis de Gutenberg",
    period: "Idade Média",
    dates: "c. 1440",
    yearStart: 1440,
    line: "Tecnologias de Comunicação",
    color: "violet",
    description: "A invenção da prensa de tipos metálicos móveis e tinta à base de óleo, permitindo a reprodução mecânica de livros em larga escala e quebrando o monopólio da cópia manuscrita.",
    context: "Expansão do comércio, surgimento das universidades e aumento da alfabetização urbana na Europa renascentista.",
    concept: "Democratização e Reprodutibilidade do Saber: A quebra do gargalo de produção de manuscritos, pavimentando o caminho para a posterior Revolução Científica.",
    quote: "A imprensa é um exército de 26 soldados de chumbo com os quais se pode conquistar o mundo.",
    quoteAuthor: "Johannes Gutenberg",
    philosophers: [
      { name: "Johannes Gutenberg", lifespan: "1400 – 1468", contribution: "Uniu metalurgia de precisão e prensa de uvas para criar a tipografia moderna." }
    ],
    aiPersona: "Johannes Gutenberg, inventor da prensa tipográfica moderna."
  },
  {
    id: "revolucao-cientifica",
    name: "Revolução Científica (Método Científico)",
    period: "Idade Moderna",
    dates: "c. Séculos XVI – XVII",
    yearStart: 1543,
    line: "Física & Astronomia",
    color: "cyan",
    description: "A transição do pensamento místico e escolástico medieval para a investigação baseada na observação empírica, experimentação e formulação matemática de leis naturais.",
    context: "Invenção da prensa de tipos móveis, expansão de contatos globais e o questionamento do modelo geocêntrico aristotélico pelo modelo heliocêntrico.",
    concept: "Heliocentrismo e Gravitação Universal: A Terra deixa de ser o centro imóvel do universo e passa a obedecer a leis matemáticas universais aplicáveis na Terra e no Cosmos.",
    quote: "Se vi mais longe, foi por estar sobre os ombros de gigantes.",
    quoteAuthor: "Isaac Newton",
    philosophers: [
      { name: "Galileu Galilei", lifespan: "1564 – 1642", contribution: "Pai da ciência experimental, aperfeiçoou o telescópio e estudou a queda dos corpos." },
      { name: "Isaac Newton", lifespan: "1643 – 1727", contribution: "Formulou as Leis do Movimento e a Lei da Gravitação Universal." },
      { name: "Nicolau Copérnico", lifespan: "1473 – 1543", contribution: "Propôs formalmente o modelo heliocêntrico do Sistema Solar." }
    ],
    aiPersona: "Isaac Newton, físico, matemático e astrônomo criador das bases da física clássica."
  },
  {
    id: "revolucao-industrial",
    name: "Revolução Industrial & Termodinâmica",
    period: "Idade Contemporânea",
    dates: "c. Séculos XVIII – XIX",
    yearStart: 1765,
    line: "Mecânica & Termodinâmica",
    color: "amber",
    description: "O desenvolvimento das primeiras máquinas a vapor, a eletrificação primária e o nascimento das leis da termodinâmica que transformaram as forças produtivas da humanidade.",
    context: "Êxodo rural em massa para as cidades industriais inglesas, surgimento das fábricas automatizadas e a necessidade de otimização de motores de combustão.",
    concept: "Conservação da Energia: A descoberta de que o calor e o trabalho mecânico são formas equivalentes de energia, regidos pela entropia.",
    quote: "A natureza nos dá a força, a ciência a orienta e o trabalho a converte em progresso.",
    quoteAuthor: "James Watt",
    philosophers: [
      { name: "James Watt", lifespan: "1736 – 1819", contribution: "Aperfeiçoou a máquina a vapor, tornando-a comercialmente viável." },
      { name: "Sadi Carnot", lifespan: "1796 – 1832", contribution: "Pai da termodinâmica, definiu a eficiência máxima dos motores térmicos." },
      { name: "Michael Faraday", lifespan: "1791 – 1867", contribution: "Descobriu a indução eletromagnética, base do motor elétrico." }
    ],
    aiPersona: "James Watt, engenheiro escocês pioneiro da propulsão mecânica a vapor."
  },
  {
    id: "fisica-moderna",
    name: "Física Moderna (Relatividade & Quântica)",
    period: "Idade Contemporânea",
    dates: "c. Início do Século XX",
    yearStart: 1905,
    line: "Física & Astronomia",
    color: "violet",
    description: "A revolução teórica que desconstruiu a física clássica newtoniana em escalas atômicas e cosmológicas através do estudo da relatividade e da mecânica probabilística quântica.",
    context: "Descoberta da radioatividade, novos experimentos de luz e a necessidade de entender a física estelar e o átomo.",
    concept: "Relatividade do Espaço-Tempo: O tempo e o espaço não são absolutos; curvam-se na presença de gravidade e mudam dependendo da velocidade relativa.",
    quote: "A imaginação é mais importante que o conhecimento. O conhecimento é limitado, enquanto a imaginação abraça o mundo inteiro.",
    quoteAuthor: "Albert Einstein",
    philosophers: [
      { name: "Albert Einstein", lifespan: "1879 – 1955", contribution: "Desenvolveu as teorias da Relatividade Restrita e Geral e explicou o efeito fotoelétrico." },
      { name: "Niels Bohr", lifespan: "1885 – 1962", contribution: "Propôs o modelo atômico quântico e desenvolveu o princípio da complementaridade." },
      { name: "Marie Curie", lifespan: "1867 – 1934", contribution: "Pioneira na pesquisa sobre radioatividade, sendo a primeira pessoa a ganhar dois prêmios Nobel." }
    ],
    aiPersona: "Albert Einstein, físico teórico proponente das teorias da relatividade."
  },
  {
    id: "era-computacao",
    name: "A Era da Computação e Teoria da Informação",
    period: "Idade Contemporânea",
    dates: "c. Metade do Século XX",
    yearStart: 1936,
    line: "Computação & Digital",
    color: "cyan",
    description: "A formalização matemática do algoritmo, a invenção do computador eletrônico de propósito geral e a digitalização binária de dados e comunicações.",
    context: "Esforços de criptografia na Segunda Guerra Mundial e a posterior expansão da infraestrutura militar de redes para fins civis (Internet).",
    concept: "Máquina de Turing: O modelo teórico abstrato que define os limites e as capacidades de qualquer computador digital moderno.",
    quote: "Só podemos ver uma curta distância à frente, mas podemos ver claramente que há muito a ser feito.",
    quoteAuthor: "Alan Turing",
    philosophers: [
      { name: "Alan Turing", lifespan: "1912 – 1954", contribution: "Pai da ciência da computação teórica, formalizou os conceitos de algoritmo e computabilidade." },
      { name: "Ada Lovelace", lifespan: "1815 – 1852", contribution: "Escreveu o primeiro algoritmo da história humana projetado para a máquina analítica de Babbage." },
      { name: "Claude Shannon", lifespan: "1916 – 2001", contribution: "Fundador da Teoria da Informação, mapeou a lógica booleana nos circuitos eletrônicos." }
    ],
    aiPersona: "Alan Turing, matemático britânico criador dos alicerces lógicos da computação moderna."
  },
  {
    id: "inteligencia-artificial",
    name: "Inteligência Artificial & Era Cognitiva",
    period: "Idade Contemporânea",
    dates: "c. Fim do Século XX – Presente",
    yearStart: 1956,
    line: "Inteligência Artificial",
    color: "rose",
    description: "O desenvolvimento de softwares que aprendem de forma autônoma a partir de volumes massivos de dados, mimetizando e superando capacidades cognitivas humanas.",
    context: "Disponibilização da internet de banda larga, abundância de dados digitais (Big Data) e capacidade massiva de processamento por microchips modernos (GPUs).",
    concept: "Deep Learning (Aprendizado Profundo): Utilização de redes neurais artificiais com múltiplas camadas ocultas para aproximar funções complexas de cognição.",
    quote: "A inteligência é a capacidade de se adaptar às mudanças.",
    quoteAuthor: "Stephen Hawking",
    philosophers: [
      { name: "Geoffrey Hinton", lifespan: "1947 – Presente", contribution: "Pioneiro do algoritmo de retropropagação (backpropagation) e redes neurais profundas." },
      { name: "John McCarthy", lifespan: "1927 – 2011", contribution: "Cunhou o termo 'Inteligência Artificial' e inventou a linguagem de programação LISP." },
      { name: "Yann LeCun", lifespan: "1960 – Presente", contribution: "Criador das Redes Neurais Convolucionais essenciais para processamento de imagens." }
    ],
    aiPersona: "Geoffrey Hinton, cientista da computação conhecido como o 'padrinho da Inteligência Artificial profunda'."
  }
];

// Classes auxiliares para estilização por cores
const COLOR_CLASSES = {
  amber: { bg: 'rgba(245, 158, 11, 0.1)', text: 'hsl(35, 92%, 50%)', border: 'rgba(245, 158, 11, 0.25)' },
  violet: { bg: 'rgba(139, 92, 246, 0.1)', text: 'hsl(263, 90%, 65%)', border: 'rgba(139, 92, 246, 0.25)' },
  cyan: { bg: 'rgba(6, 182, 212, 0.1)', text: 'hsl(188, 86%, 53%)', border: 'rgba(6, 182, 212, 0.25)' },
  rose: { bg: 'rgba(244, 63, 94, 0.1)', text: 'hsl(343, 90%, 60%)', border: 'rgba(244, 63, 94, 0.25)' }
};

// ==========================================
// STATE MANAGEMENT & EVENT LISTENERS
// ==========================================
let activeMovement = SCIENCE_MOVEMENTS[0];
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
    const lines = ["Todos", "Tecnologias de Comunicação", "Física & Astronomia", "Mecânica & Termodinâmica", "Computação & Digital", "Inteligência Artificial"];

    const periodContainer = document.getElementById('period-filters');
    const lineContainer = document.getElementById('line-filters');

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

    const filtered = SCIENCE_MOVEMENTS.filter(item => {
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
        text.textContent = 'Nenhum marco científico encontrado para os filtros atuais.';
        emptyMsg.appendChild(text);

        container.appendChild(emptyMsg);
        return;
    }

    filtered.forEach(movement => {
        const isSelected = activeMovement.id === movement.id;
        
        const wrapper = document.createElement('div');
        wrapper.classList.add('timeline-card-wrapper');
        if (isSelected) wrapper.classList.add('active');

        const dot = document.createElement('span');
        dot.classList.add('timeline-card-dot');
        wrapper.appendChild(dot);

        const card = document.createElement('div');
        card.classList.add('timeline-interactive-card');
        card.addEventListener('click', () => selectMovement(movement.id));

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

        const colorCfg = COLOR_CLASSES[movement.color] || COLOR_CLASSES.cyan;
        const tag = document.createElement('span');
        tag.classList.add('timeline-card-period');
        tag.style.backgroundColor = colorCfg.bg;
        tag.style.color = colorCfg.text;
        tag.textContent = movement.period;
        header.appendChild(tag);

        card.appendChild(header);

        const title = document.createElement('h3');
        title.style.fontSize = '1rem';
        title.style.fontWeight = '700';
        title.textContent = movement.name;
        card.appendChild(title);

        const desc = document.createElement('p');
        desc.style.fontSize = '0.75rem';
        desc.style.marginTop = '0.5rem';
        desc.style.marginBottom = '0.5rem';
        desc.textContent = movement.description;
        card.appendChild(desc);

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
    const selected = SCIENCE_MOVEMENTS.find(m => m.id === id);
    if (!selected) return;

    activeMovement = selected;
    
    stopActiveAudio();
    renderTimeline();
    renderDetails();
}

/**
 * Render Right Detail Column (XSS Safe)
 */
function renderDetails() {
    const container = document.getElementById('detail-card');
    if (!container) return;

    container.replaceChildren();

    const colorCfg = COLOR_CLASSES[activeMovement.color] || COLOR_CLASSES.cyan;
    container.style.borderLeft = `4px solid ${colorCfg.text}`;

    const metaHeader = document.createElement('div');
    metaHeader.classList.add('timeline-card-header');
    metaHeader.style.marginBottom = '1rem';

    const tagLabel = document.createElement('span');
    tagLabel.style.fontSize = '0.7rem';
    tagLabel.style.fontWeight = '700';
    tagLabel.style.textTransform = 'uppercase';
    tagLabel.style.color = 'var(--text-tertiary)';
    tagLabel.textContent = 'Ficha de Estudo Científica';
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

    const title = document.createElement('h2');
    title.style.fontSize = '1.5rem';
    title.style.marginBottom = '1rem';
    title.textContent = activeMovement.name;
    container.appendChild(title);

    const desc = document.createElement('p');
    desc.style.fontSize = '0.9rem';
    desc.style.lineHeight = '1.6';
    desc.style.marginBottom = '1.5rem';
    desc.textContent = activeMovement.description;
    container.appendChild(desc);

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
    
    const conceptTitleText = document.createTextNode(' Descoberta / Tese');
    conceptTitle.appendChild(conceptTitleText);
    conceptBlock.appendChild(conceptTitle);

    const conceptDesc = document.createElement('p');
    conceptDesc.style.fontSize = '0.75rem';
    conceptDesc.style.fontFamily = 'monospace';
    conceptDesc.style.margin = '0';
    conceptDesc.textContent = activeMovement.concept;
    conceptBlock.appendChild(conceptDesc);
    container.appendChild(conceptBlock);

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

    const philTitle = document.createElement('h4');
    philTitle.style.fontSize = '0.9rem';
    philTitle.style.fontWeight = '700';
    philTitle.style.marginBottom = '0.75rem';
    philTitle.textContent = 'Cientistas de Destaque desta Era:';
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
        lifeSpan.style.padding = '0.1/rem 0.4rem';
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
    titleText.textContent = 'Diálogos com a Ciência';
    titleTextDiv.appendChild(titleText);
    
    const subText = document.createElement('p');
    subText.style.fontSize = '0.65rem';
    subText.style.color = 'var(--text-tertiary)';
    subText.style.margin = '0';
    subText.textContent = `Dialogue com o cientista do marco selecionado.`;
    titleTextDiv.appendChild(subText);
    titleWrapper.appendChild(titleTextDiv);
    header.appendChild(titleWrapper);

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

    const apiKey = getApiKey();
    if (!apiKey) {
        const warning = document.createElement('div');
        warning.classList.add('chat-warning');
        warning.textContent = 'Atenção: Configure sua Chave de API do Gemini no topo da página para iniciar um diálogo por Inteligência Artificial.';
        chatDiv.appendChild(warning);
    }

    const chatLog = document.createElement('div');
    chatLog.classList.add('chat-log');
    
    const mId = activeMovement.id;
    if (!chatMessages[mId]) {
        chatMessages[mId] = [
            { role: 'assistant', text: `Saudações, pesquisador. Sou a representação de ${activeMovement.aiPersona}. Que questionamento científico ou técnico gostaria de discutir hoje?` }
        ];
    }

    chatMessages[mId].forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('chat-msg');
        msgDiv.classList.add(msg.role === 'user' ? 'user' : 'assistant');

        const sender = document.createElement('span');
        sender.classList.add('chat-msg-sender');
        sender.textContent = msg.role === 'user' ? 'Você (Pesquisador)' : activeMovement.quoteAuthor;
        msgDiv.appendChild(sender);

        const bubble = document.createElement('div');
        bubble.classList.add('chat-msg-bubble');
        bubble.textContent = msg.text;
        msgDiv.appendChild(bubble);

        chatLog.appendChild(msgDiv);
    });
    chatDiv.appendChild(chatLog);

    setTimeout(() => {
        chatLog.scrollTop = chatLog.scrollHeight;
    }, 50);

    const form = document.createElement('form');
    form.classList.add('chat-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleChatSubmit(chatLog, form);
    });

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'chat-input';
    input.placeholder = apiKey ? 'Digite sua dúvida técnica...' : 'Insira a chave de API acima para digitar';
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
    chatMessages[mId].push({ role: 'user', text: userText });
    
    const userMsgDiv = document.createElement('div');
    userMsgDiv.classList.add('chat-msg', 'user');
    
    const sender = document.createElement('span');
    sender.classList.add('chat-msg-sender');
    sender.textContent = 'Você (Pesquisador)';
    userMsgDiv.appendChild(sender);

    const bubble = document.createElement('div');
    bubble.classList.add('chat-msg-bubble');
    bubble.textContent = userText;
    userMsgDiv.appendChild(bubble);
    chatLog.appendChild(userMsgDiv);
    
    chatLog.scrollTop = chatLog.scrollHeight;

    const typingDiv = document.createElement('div');
    typingDiv.classList.add('chat-msg', 'assistant');
    
    const assistantSender = document.createElement('span');
    assistantSender.classList.add('chat-msg-sender');
    assistantSender.textContent = `${activeMovement.quoteAuthor} está analisando...`;
    typingDiv.appendChild(assistantSender);

    const typingBubble = document.createElement('div');
    typingBubble.classList.add('chat-msg-bubble');
    typingBubble.style.color = 'var(--text-tertiary)';
    typingBubble.style.fontStyle = 'italic';
    typingBubble.textContent = 'Calculando variáveis e analisando hipóteses...';
    typingDiv.appendChild(typingBubble);
    
    chatLog.appendChild(typingDiv);
    chatLog.scrollTop = chatLog.scrollHeight;

    try {
        const apiKey = getApiKey();
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;
        
        const systemPrompt = `Você é o próprio cientista histórico/defensor de teoria científica: ${activeMovement.aiPersona}. 
O marco correspondente é: "${activeMovement.name}". 
Instruções:
1. Responda em português de maneira técnica, racional, analítica e de acordo com as teorias científicas vigentes na sua época (ou comentando com curiosidade as evoluções futuras).
2. Evite quebras de quarta parede. Você realmente é essa mente científica transcendendo as eras.
3. Se o usuário fizer uma pergunta sobre tecnologias modernas das quais você não fez parte, tente traduzir ou analisar isso pela ótica da física e mecânica fundamentais (por exemplo, analisando transistores como chaves mecânicas de elétrons).
4. Mantenha a resposta concisa, instrutiva e rica em conhecimento (máximo de 2 a 3 parágrafos).`;

        const promptPayload = {
            contents: [
                {
                    role: "user",
                    parts: [{ text: `Pergunta do pesquisador: "${userText}"` }]
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
        const aiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Meus cálculos de transmissão falharam. Tente enviar os dados novamente.";
        
        chatLog.removeChild(typingDiv);
        chatMessages[mId].push({ role: 'assistant', text: aiResponse });

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
        errBubble.textContent = `Falha na conexão com a inteligência artificial (${err.message}). Verifique se sua chave API é válida.`;
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
            contents: [{ parts: [{ text: `Diga de forma clara, científica e explicativa em português: ${textToSpeak}` }] }],
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
