
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBTJBBSC');




const BLOCKS = {
  1: { label:"Bloco 1 · Identificação",       title:"Quem é você",           desc:"Antes de qualquer análise, precisamos entender o contexto básico do seu negócio e de quem está à frente dele." },
  2: { label:"Bloco 2 · Momento do Negócio",  title:"Onde você está",         desc:"Agora vamos entender o estágio real da empresa, o que está travando e qual direção o negócio está tomando." },
  3: { label:"Bloco 3 · Direção",              title:"Para onde você vai",     desc:"Clareza de posicionamento e método de decisão. Aqui revelamos se existe uma bússola estratégica ou só intuição." },
  4: { label:"Bloco 4 · Vendas e Marketing",   title:"Como você cresce",       desc:"Processo comercial, presença digital e métricas. Vamos identificar onde estão os gargalos de receita." },
  5: { label:"Bloco 5 · Consciência",          title:"Por que agora",          desc:"As perguntas mais importantes do formulário. Aqui está a real intenção e o custo da inação." },

};

const QUESTIONS = [
  { id:1,       block:1, type:"text", label:"Nome completo", q:"Como você se chama?",                    sub:"",                                                                  placeholder:"Seu nome completo" },
  { id:"email",   block:1, type:"text", label:"E-mail",        q:"Qual é o seu melhor e-mail?",            sub:"Use um e-mail que você verifica com frequência. Ex: nome@gmail.com",  placeholder:"seuemail@email.com" },
  { id:"whatsapp",block:1, type:"text", label:"WhatsApp",      q:"Qual é o seu WhatsApp com DDD?",         sub:"Digite com DDD. Ex: (11) 99999-9999. Usaremos para entrar em contato.", placeholder:"(11) 99999-9999" },
  { id:2,  block:1, type:"text",    label:"Empresa",              q:"Qual é o nome da sua empresa?",                                                     sub:"",                                                                        placeholder:"Nome da empresa" },
  { id:3,  block:1, type:"text",    label:"Localização",          q:"Em qual cidade e estado você está?",                                                sub:"Ex: Belo Horizonte, MG · São Paulo, SP · Rio de Janeiro, RJ",             placeholder:"Ex: São Paulo, SP" },
  { id:4,  block:1, type:"text",    label:"Instagram",            q:"Qual o @ do Instagram da sua empresa?",                                             sub:"Se não tiver, escreva Não tenho.",                                        placeholder:"@suaempresa" },
  { id:5,  block:1, type:"choice",  label:"Site/LP",              q:"Tem site, landing page ou e-commerce?",                                             sub:"",                                                                        opts:["Sim","Não"] },
  { id:"5b", block:1, type:"text",   label:"Endereço do site",     q:"Qual é o endereço?",                                                                sub:"Cole o link completo. Ex: www.seusite.com.br",                            placeholder:"www.seusite.com.br", conditional:{ qId:5, value:"Sim" } },
  { id:6,  block:1, type:"choice",  label:"Tempo de empresa",     q:"Há quanto tempo sua empresa está ativa?",                                           sub:"",                                                                        opts:["Menos de 1 ano","1 a 3 anos","3 a 5 anos","5 anos ou mais"] },
  { id:7,  block:1, type:"choice",  label:"Faturamento",          q:"Qual é o faturamento médio mensal da empresa?",                                     sub:"Seja honesto. Isso é diagnóstico, não julgamento.",                       opts:["Até R$10.000","R$10.000 a R$30.000","R$30.000 a R$60.000","R$60.000 a R$100.000","Acima de R$100.000"] },
  { id:8,  block:1, type:"choice",  label:"Equipe",               q:"Quantas pessoas trabalham na empresa, incluindo você?",                             sub:"",                                                                        opts:["Só eu","2 a 5 pessoas","6 a 15 pessoas","Mais de 15"] },
  { id:9,  block:2, type:"multi",   label:"Principal desafio",    q:"Qual é o seu maior desafio hoje?",                                                  sub:"Escolha até 2 opções que mais representam sua realidade agora.",          opts:["Falta de clientes","Falta de clareza estratégica","Vendas inconsistentes","Gestão desorganizada","Escalar com estrutura"] },
  { id:10, block:2, type:"choice",  label:"Estágio atual",        q:"Como você descreveria o momento do seu negócio hoje?",                              sub:"",                                                                        opts:["Começando","Travado, sinto que não sai do lugar","Crescendo sem controle","Pronto para organizar e escalar"] },
  { id:11, block:3, type:"choice",  label:"Clareza de proposta",  q:"Você consegue explicar o que faz em uma frase clara e diferenciada?",               sub:"Não o que você vende, mas o que transforma na vida do seu cliente.",      opts:["Sim, de forma muito clara","Mais ou menos","Não, ainda é confuso"] },
  { id:12, block:3, type:"choice",  label:"Posicionamento",       q:"Seu posicionamento está definido: mercado, nicho, público-alvo e diferencial?",     sub:"",                                                                        opts:["Sim, está bem definido","Parcialmente","Não está definido"] },
  { id:13, block:3, type:"choice",  label:"Base das decisões",    q:"Como você toma decisões estratégicas hoje?",                                        sub:"",                                                                        opts:["Intuição","Experiência acumulada","Método estruturado","Uma mistura de tudo"] },
  { id:14, block:4, type:"choice",  label:"Processo comercial",   q:"Você tem um processo comercial definido, do lead ao fechamento?",                  sub:"Script, etapas, critérios de qualificação, follow-up.",                   opts:["Sim, estruturado","Existe, mas não funciona bem","Não existe"] },
  { id:15, block:4, type:"choice",  label:"Atendimento",          q:"Seu atendimento pelo WhatsApp é estruturado ou depende de quem responde?",          sub:"",                                                                        opts:["Estruturado, existe script e padrão","Depende da pessoa","Não há nenhuma estrutura"] },
  { id:16, block:4, type:"choice",  label:"Métricas",             q:"Você acompanha suas taxas de conversão no Instagram, WhatsApp e site?",             sub:"",                                                                        opts:["Sim, de forma sistemática","Mais ou menos","Não acompanho"] },
  { id:17, block:4, type:"choice",  label:"Conteúdo",             q:"Como você descreveria a sua produção de conteúdo hoje?",                            sub:"",                                                                        opts:["Estratégico e intencional","Consistente, mas sem direção clara","Improvisado ou inexistente"] },
  { id:18, block:5, type:"textarea",label:"Motivação",            q:"Por que você quer essa sessão estratégica agora?",                                  sub:"Seja direto. Não precisa impressionar, precisamos entender.",              placeholder:"O que te trouxe até aqui..." },
  { id:19, block:5, type:"textarea",label:"Custo da inação",      q:"Se nada mudar nos próximos 6 meses, o que isso vai custar para o seu negócio?",    sub:"Pense em dinheiro, tempo, oportunidades, equipe, saúde mental.",          placeholder:"O custo real de continuar igual..." },
  { id:20, block:5, type:"choice",  label:"Histórico",            q:"Você já investiu em consultoria, mentoria ou aceleração antes?",                   sub:"",                                                                        opts:["Sim","Não"] },
  { id:"20b", block:5, type:"textarea", label:"Aprendizado anterior", q:"Qual foi o principal aprendizado e o principal erro nessa experiência?",        sub:"Honestidade aqui nos ajuda a não repetir os mesmos erros.",               placeholder:"O que funcionou e o que não funcionou...", conditional:{ qId:20, value:"Sim" } },
  { id:21, block:5, type:"choice",  label:"Disposição",           q:"Se identificarmos um plano claro para organizar seu negócio, você estaria pronto para investir na estruturação?", sub:"Não há nenhum compromisso de compra. É só para entendermos o alinhamento.", opts:["Sim, estou pronto","Depende da proposta","Ainda não sei"] },
  { id:22, block:5, type:"choice",  label:"Faixa de investimento", q:"Qual faixa de investimento você considera possível hoje para estruturar seu negócio?", sub:"", opts:["Até R$3 mil","De R$3 mil à R$10 mil","Acima de R$10 mil","Prefiro não responder"] },
];

let currentIndex = 0;
let visibleQuestions = [];
let answers = {};
let shownBlocks = new Set();

function getVisibleQuestions() {
  return QUESTIONS.filter(q => {
    if (!q.conditional) return true;
    return answers[q.conditional.qId] === q.conditional.value;
  });
}

function startForm() {
  visibleQuestions = getVisibleQuestions();
  currentIndex = 0;
  document.getElementById('progress-bar-wrap').style.display = 'block';
  document.getElementById('top-nav').style.display = 'flex';
  showBlock(visibleQuestions[0].block, () => showQuestion(0));
}

function showBlock(blockId, callback) {
  if (shownBlocks.has(blockId)) { callback(); return; }
  shownBlocks.add(blockId);
  const b = BLOCKS[blockId];
  document.getElementById('bt-num').textContent   = b.label;
  document.getElementById('bt-title').textContent = b.title;
  document.getElementById('bt-desc').textContent  = b.desc;
  _afterBlockDismiss = callback;
  transitionTo('screen-block');
}

let _afterBlockDismiss = null;
function dismissBlock() {
  if (_afterBlockDismiss) {
    const cb = _afterBlockDismiss;
    _afterBlockDismiss = null;
    transitionTo('screen-question', cb);
  }
}
function showQuestion(index) {
  currentIndex = index;
  visibleQuestions = getVisibleQuestions();
  const q = visibleQuestions[index];
  const pct = Math.round((index / visibleQuestions.length) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('nav-step-label').textContent = (index + 1) + ' / ' + visibleQuestions.length;
  document.getElementById('q-block-label').textContent = BLOCKS[q.block]?.label || '';
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('q-sub').textContent  = q.sub || '';
  document.getElementById('btn-back').style.display = index === 0 ? 'none' : '';
  renderInput(q);
  updateHint(q);
}

function renderInput(q) {
  const area = document.getElementById('q-input-area');
  area.innerHTML = '';
  const saved = answers[q.id];
  if (q.type === 'choice' || q.type === 'multi') {
    const list = document.createElement('div');
    list.className = 'options-list';
    const keys = ['A','B','C','D','E'];
    const savedArr = q.type === 'multi' ? (Array.isArray(saved) ? saved : []) : null;
    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      const isSelected = q.type === 'multi' ? savedArr.includes(opt) : saved === opt;
      btn.className = 'option-btn' + (isSelected ? ' selected' : '');
      btn.innerHTML = `<span class="option-key">${keys[i]}</span><span class="option-text">${opt}</span>`;
      btn.onclick = () => q.type === 'multi' ? selectMulti(q, opt, btn, list) : selectOption(q, opt, btn, list);
      list.appendChild(btn);
    });
    area.appendChild(list);
  } else if (q.type === 'textarea') {
    const ta = document.createElement('textarea');
    ta.className = 'q-textarea';
    ta.placeholder = q.placeholder || '';
    ta.value = saved || '';
    ta.oninput = () => { answers[q.id] = ta.value.trim(); updateNextBtn(q); };
    area.appendChild(ta);
  } else {
    const inp = document.createElement('input');
    inp.type = 'text'; inp.className = 'q-input';
    inp.placeholder = q.placeholder || '';
    inp.value = saved || '';
    inp.oninput = () => { answers[q.id] = inp.value.trim(); updateNextBtn(q); };
    inp.onkeydown = (e) => { if (e.key === 'Enter') goNext(); };
    area.appendChild(inp);
    setTimeout(() => inp.focus(), 80);
  }
  updateNextBtn(q);
}

function selectOption(q, value, btn, list) {
  list.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  answers[q.id] = value;
  updateNextBtn(q);
  setTimeout(() => goNext(), 320);
}

function selectMulti(q, value, btn, list) {
  const current = Array.isArray(answers[q.id]) ? [...answers[q.id]] : [];
  if (current.includes(value)) {
    const idx = current.indexOf(value);
    current.splice(idx, 1);
    btn.classList.remove('selected');
  } else {
    if (current.length >= 2) return; // max 2
    current.push(value);
    btn.classList.add('selected');
  }
  answers[q.id] = current;
  updateNextBtn(q);
}

function updateNextBtn(q) {
  const val = answers[q.id];
  if (q.type === 'multi') {
    document.getElementById('btn-next').disabled = !(Array.isArray(val) && val.length > 0);
    return;
  }
  const str = (val || '').toString().trim();
  let valid = str.length > 0;
  if (q.id === 'email') {
    valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  }
  if (q.id === 'whatsapp') {
    valid = str.replace(/\D/g,'').length >= 10;
  }
  document.getElementById('btn-next').disabled = !valid;
  // Show hint if invalid format
  const hint = document.getElementById('nav-hint');
  if (q.id === 'email' && str.length > 0 && !valid) hint.textContent = 'Digite um e-mail válido com @';
  else if (q.id === 'whatsapp' && str.length > 0 && !valid) hint.textContent = 'Digite o DDD + número (mínimo 10 dígitos)';
}

function updateHint(q) {
  const hint = document.getElementById('nav-hint');
  if (q.type === 'text') hint.textContent = 'Pressione Enter para continuar';
  else if (q.type === 'choice') hint.textContent = 'Ou pressione A, B, C...';
  else if (q.type === 'multi') hint.textContent = 'Selecione até 2 opções e clique Continuar';
  else hint.textContent = '';
}

function goNext() {
  const q = visibleQuestions[currentIndex];
  const val = answers[q.id];
  if (q.type === 'multi') {
    if (!Array.isArray(val) || val.length === 0) return;
  } else if (!val || val.toString().trim() === '') return;
  visibleQuestions = getVisibleQuestions();
  const nextIndex = currentIndex + 1;
  if (nextIndex >= visibleQuestions.length) {
    document.getElementById('progress-bar').style.width = '100%';
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'lead' });
    submitForm();
    return;
  }
  const nextQ = visibleQuestions[nextIndex];
  if (nextQ.block !== q.block) {
    showBlock(nextQ.block, () => transitionTo('screen-question', () => showQuestion(nextIndex)));
  } else {
    showQuestion(nextIndex);
  }
}


function goBack() {
  if (currentIndex === 0) { transitionTo('screen-intro'); return; }
  const prevIndex = currentIndex - 1;
  const prevQ = visibleQuestions[prevIndex];
  const curQ  = visibleQuestions[currentIndex];
  if (prevQ.block !== curQ.block) {
    showBlock(prevQ.block, () => transitionTo('screen-question', () => showQuestion(prevIndex)));
  } else {
    showQuestion(prevIndex);
  }
}

function transitionTo(screenId, callback) {
  const current = document.querySelector('.screen.active');
  const next    = document.getElementById(screenId);
  if (!next || current === next) { if (callback) callback(); return; }
  current.classList.add('exiting');
  setTimeout(() => {
    current.classList.remove('active','exiting');
    next.classList.add('active');
    if (callback) callback();
  }, 320);
}

document.addEventListener('keydown', (e) => {
  const qScreen = document.getElementById('screen-question');
  if (!qScreen.classList.contains('active')) return;
  const q = visibleQuestions[currentIndex];
  if (!q || q.type !== 'choice') return;
  const keys = { a:0, b:1, c:2, d:3, e:4 };
  const k = e.key.toLowerCase();
  if (keys[k] !== undefined && keys[k] < q.opts.length) {
    const list = document.querySelector('.options-list');
    const btns = list?.querySelectorAll('.option-btn');
    if (btns?.[keys[k]]) selectOption(q, q.opts[keys[k]], btns[keys[k]], list);
  }
  if (e.key === 'Enter') goNext();
});


// ═══════════════════════════════════════
// SUBMIT TO NEON via Vercel API
// ═══════════════════════════════════════
async function submitForm() {
  const payload = {
    nome:               answers[1]        || null,
    email:              answers['email']   || null,
    whatsapp:           answers['whatsapp']|| null,
    empresa:            answers[2]        || null,
    cidade_estado:      answers[3]     || null,
    instagram:          answers[4]     || null,
    site:               answers[5]     || null,
    site_url:           answers['5b']  || null,
    tempo_empresa:      answers[6]     || null,
    faturamento:        answers[7]     || null,
    equipe:             answers[8]     || null,
    desafio:            Array.isArray(answers[9]) ? answers[9].join(', ') : (answers[9] || null),
    estagio:            answers[10]    || null,
    clareza_proposta:   answers[11]    || null,
    posicionamento:     answers[12]    || null,
    decisoes:           answers[13]    || null,
    processo_comercial: answers[14]    || null,
    atendimento:        answers[15]    || null,
    metricas:           answers[16]    || null,
    conteudo:           answers[17]    || null,
    motivacao:          answers[18]    || null,
    custo_inacao:       answers[19]    || null,
    historico:          answers[20]    || null,
    aprendizado:        answers['20b'] || null,
    disposicao:         answers[21]    || null,
    faixa_investimento: answers[22]    || null,
  };

  // Mostra a tela final imediatamente (otimista)
  transitionTo('screen-final');

  try {
    const res = await fetch('/api/submit', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
    });
    if (!res.ok) console.error('Erro ao salvar:', res.status);
  } catch (err) {
    console.error('Erro de rede:', err);
  }
}