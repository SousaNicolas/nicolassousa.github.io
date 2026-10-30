(() => {
const pt={
 navHome:'Início',navTexts:'Textos',navResearch:'Pesquisa',navProjects:'Projetos',navAbout:'Sobre',
 eyebrow:'CIÊNCIA · TECNOLOGIA · REFLEXÕES',hero:'Explorando ideias,<br>conectando conhecimentos.',
 intro:'Sou Nicolas Sousa. Minha trajetória atravessa finanças, computação, física e matemática. Este é meu espaço para compartilhar pesquisas, textos e reflexões — sem limitar a curiosidade a uma única disciplina.',
 browse:'Conheça meus textos ↗',portrait:'Sua fotografia aqui',recent:'Textos recentes',all:'Ver todos ↗',
 tagA:'EPISTEMOLOGIA · DEMONSTRAÇÃO',articleA:'Por que representamos o conhecimento?',summaryA:'Ideias sobre conexões, grafos e a arquitetura do pensamento científico.',
 tagB:'PESQUISA · EM DESENVOLVIMENTO',articleB:'Representação do conhecimento em física',summaryB:'Perguntas sobre como representamos relações na literatura científica.',
 tagC:'TECNOLOGIA · PROJETOS',articleC:'Ferramentas e experimentos',summaryC:'Um espaço para compartilhar simulações e experiências de desenvolvimento.',
 read:'Ler texto ↗',explore:'Explorar ↗',explore2:'Explorar ↗',
 notice:'Protótipo inicial: textos de demonstração, ainda não publicados como trabalhos científicos.',
 tagWriting:'ESCRITA',textsTitle:'Textos e reflexões',textsIntro:'Ensaios, notas e ideias em desenvolvimento.',sample:'TEXTO DEMONSTRATIVO',
 articleA2:'Por que representamos o conhecimento?',summaryA2:'Ideias sobre conexões, grafos e a arquitetura do pensamento científico.',
 tagResearch:'INVESTIGAÇÃO',researchTitle:'Pesquisa',researchIntro:'Um espaço para perguntas, métodos e investigações em andamento.',
 researchCaution:'Projetos em andamento não são apresentados como resultados publicados.',
 tagProjects:'EXPERIMENTOS',projectsTitle:'Projetos',projectsIntro:'Ferramentas, visualizações e experiências que poderão ser compartilhadas futuramente.',
 tagAbout:'QUEM SOU',aboutTitle:'Sobre mim',
 aboutOne:'Sou Nicolas Sousa, de São Paulo, Brasil. Minha trajetória reúne experiência profissional na área financeira e estudos em contabilidade, engenharia, computação, física e matemática.',
 aboutTwo:'Gosto de aproximar disciplinas, investigar perguntas e registrar ideias. Este site é um espaço pessoal e independente para compartilhar esse processo.',
 disclaimer:'As opiniões apresentadas aqui são pessoais e não representam empregadores ou instituições.',
 back:'← Voltar aos textos',articleType:'EPISTEMOLOGIA · TEXTO DEMONSTRATIVO',articleTitle:'Por que representamos o conhecimento?',
 byline:'Nicolas Sousa · 30 de outubro de 2026',
 paragraph1:'Representar conhecimento é mais do que armazenar informações. Ao organizar conceitos e relações, percebemos conexões que seriam difíceis de identificar em uma lista linear.',
 paragraph2:'Um grafo pode representar ideias como nós e suas relações como arestas. Experimente selecionar um conceito para ver uma explicação diferente.',
 simTitle:'Experimente: rede conceitual',physics:'Física',math:'Matemática',computing:'Computação',
 paragraph3:'A interatividade não substitui a leitura: ela acrescenta uma maneira de compreender a mesma ideia.',
 demoDisclaimer:'Exemplo demonstrativo. Não é artigo científico, não passou por revisão por pares e não possui DOI.',
 researchList:['Representação computacional do conhecimento em física','Redes científicas e análise de grafos','Inteligência artificial aplicada a documentos','Modelagem matemática e explicações interativas'],
 projectList:['Simulações de física e matemática','Visualizações de grafos e dados','Experimentos com inteligência artificial e automação'],
 simTexts:['Física: descreve fenômenos e utiliza modelos matemáticos e computacionais.','Matemática: fornece estruturas para formalizar relações.','Computação: implementa modelos, simula e permite analisar redes.']
};
const en={
 navHome:'Home',navTexts:'Writing',navResearch:'Research',navProjects:'Projects',navAbout:'About',
 eyebrow:'SCIENCE · TECHNOLOGY · REFLECTIONS',hero:'Exploring ideas,<br>connecting knowledge.',
 intro:"I'm Nicolas Sousa. My path crosses finance, computing, physics and mathematics. This is my space to share research, writing and reflections — without limiting curiosity to a single discipline.",
 browse:'Explore my writing ↗',portrait:'Your portrait',recent:'Recent writing',all:'View all ↗',
 tagA:'EPISTEMOLOGY · SAMPLE',articleA:'Why do we represent knowledge?',summaryA:'Connections, graphs and the architecture of scientific thinking.',
 tagB:'RESEARCH · IN PROGRESS',articleB:'Knowledge representation in physics',summaryB:'Questions about representing relationships in scientific literature.',
 tagC:'TECHNOLOGY · PROJECTS',articleC:'Tools and experiments',summaryC:'A space for simulations and development experiences.',
 read:'Read article ↗',explore:'Explore ↗',explore2:'Explore ↗',
 notice:'Early prototype: sample texts have not been published as scientific papers.',
 tagWriting:'WRITING',textsTitle:'Writing and reflections',textsIntro:'Essays, notes and evolving ideas.',sample:'SAMPLE ARTICLE',
 articleA2:'Why do we represent knowledge?',summaryA2:'Connections, graphs and the architecture of scientific thinking.',
 tagResearch:'INQUIRY',researchTitle:'Research',researchIntro:'A space for questions, methods and investigations in progress.',
 researchCaution:'Work in progress is not presented as published research.',
 tagProjects:'EXPERIMENTS',projectsTitle:'Projects',projectsIntro:'Tools, visualizations and experiments that may be shared in the future.',
 tagAbout:'ABOUT',aboutTitle:'About me',
 aboutOne:"I'm Nicolas Sousa, from São Paulo, Brazil. My background combines professional experience in finance with studies in accounting, engineering, computing, physics and mathematics.",
 aboutTwo:'I enjoy connecting disciplines, investigating questions and documenting ideas. This is my independent space to share that process.',
 disclaimer:'Opinions expressed here are personal and do not represent employers or institutions.',
 back:'← Back to writing',articleType:'EPISTEMOLOGY · SAMPLE ARTICLE',articleTitle:'Why do we represent knowledge?',
 byline:'Nicolas Sousa · October 30, 2026',
 paragraph1:'Representing knowledge means more than storing information. Organizing concepts and relationships helps us notice connections that are hard to see in a linear list.',
 paragraph2:'A graph can represent ideas as nodes and relationships as edges. Select a concept to see a different explanation.',
 simTitle:'Try it: a conceptual network',physics:'Physics',math:'Mathematics',computing:'Computing',
 paragraph3:'Interactivity does not replace reading: it offers another way to understand an idea.',
 demoDisclaimer:'Demonstration only. This is not a scientific paper, has not undergone peer review and has no DOI.',
 researchList:['Computational knowledge representation in physics','Scientific networks and graph analysis','Artificial intelligence applied to documents','Mathematical modeling and interactive explanations'],
 projectList:['Physics and mathematics simulations','Graph and data visualizations','Artificial intelligence and automation experiments'],
 simTexts:['Physics: describes phenomena using mathematical and computational models.','Mathematics: provides structures to formalize relationships.','Computing: implements models, simulations and network analysis.']
};
let lang=localStorage.getItem('ns-lang');
if(lang!=='pt'&&lang!=='en'){lang=(navigator.languages||[navigator.language||'en']).some(x=>x.toLowerCase().startsWith('pt'))?'pt':'en';}
let current='inicio'; let concept=0;
function render(){
 const d=lang==='pt'?pt:en;
 document.documentElement.lang=lang==='pt'?'pt-BR':'en';
 document.querySelectorAll('[data-i]').forEach(el=>{
   const value=d[el.dataset.i]; if(value===undefined)return;
   if(el.dataset.i==='hero')el.innerHTML=value;else el.textContent=value;
 });
 const list=(id,items)=>{const ul=document.getElementById(id);ul.replaceChildren(...items.map(s=>{let li=document.createElement('li');li.textContent=s;return li}));};
 list('research-topics',d.researchList);list('project-topics',d.projectList);
 document.getElementById('language').textContent=lang==='pt'?'PT / EN':'EN / PT';
 document.getElementById('sim-text').textContent=d.simTexts[concept];
 document.querySelectorAll('[data-concept]').forEach(el=>el.classList.toggle('selected',Number(el.dataset.concept)===concept));
}
function navigate(section){
 current=section;
 document.querySelectorAll('.view').forEach(el=>el.classList.toggle('active',el.id===section));
 document.querySelectorAll('nav [data-nav]').forEach(el=>el.classList.toggle('current',el.dataset.nav===section));
 history.replaceState(null,'','#'+section);
 window.scrollTo({top:0,behavior:'instant'});
}
document.addEventListener('click',event=>{
 const el=event.target.closest('[data-nav],[data-article],[data-concept],#language,#theme');
 if(!el)return;
 if(el.id==='language'){lang=lang==='pt'?'en':'pt';localStorage.setItem('ns-lang',lang);render();}
 else if(el.id==='theme'){document.documentElement.classList.toggle('dark');let dark=document.documentElement.classList.contains('dark');localStorage.setItem('ns-theme',dark?'dark':'light');el.textContent=dark?'☀':'☾';}
 else if(el.dataset.nav){event.preventDefault();navigate(el.dataset.nav);}
 else if(el.dataset.article!==undefined){navigate('artigo');}
 else if(el.dataset.concept!==undefined){concept=Number(el.dataset.concept);render();}
});
if(localStorage.getItem('ns-theme')==='dark'){document.documentElement.classList.add('dark');document.getElementById('theme').textContent='☀';}
render();
const initial=location.hash.slice(1); if(document.getElementById(initial)?.classList.contains('view'))navigate(initial);
})();