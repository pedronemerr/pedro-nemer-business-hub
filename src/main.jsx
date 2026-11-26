import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const WHATSAPP = 'https://wa.me/5596984262026';
const LINKS = {
  apice: WHATSAPP,
  autom: 'https://automcrm.com.br/',
  apiceFlow: 'https://siteapice-liard.vercel.app/'
};

function Arrow({ light = false }) {
  return <span className={`arrow ${light ? 'arrow-light' : ''}`} aria-hidden="true">↗</span>;
}

function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand-compact' : ''}`} href="#inicio" aria-label="Pedro Nemer, início">
      <span className="brand-mark">PN</span>
      <span className="brand-name">PEDRO NEMER<small>BUSINESS HUB</small></span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="topbar">
      <Brand />
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
        <span /><span />
      </button>
      <nav className={menuOpen ? 'nav-open' : ''}>
        <a href="#apice" onClick={() => setMenuOpen(false)}>Ápice</a>
        <a href="#autom" onClick={() => setMenuOpen(false)}>Autom CRM</a>
        <a href="#apiceflow" onClick={() => setMenuOpen(false)}>Ápice Flow</a>
        <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
        <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer">Vamos conversar <Arrow /></a>
      </nav>
    </header>
  );
}

function SectionTag({ children }) {
  return <div className="section-tag"><span />{children}</div>;
}

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      nodes.forEach(node => observer.observe(node));
      window.__pnRevealObserver = observer;
    }

    // Movimento ambiente acompanha o mouse de forma sutil, sem interferir nos cliques.
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = null;
    const handlePointerMove = (event) => {
      if (!finePointer || reducedMotion) return;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = event.clientX / Math.max(window.innerWidth, 1);
        const y = event.clientY / Math.max(window.innerHeight, 1);
        document.documentElement.style.setProperty('--pointer-x', `${x * 100}%`);
        document.documentElement.style.setProperty('--pointer-y', `${y * 100}%`);
        document.documentElement.style.setProperty('--pointer-shift-x', `${(x - 0.5) * 16}px`);
        document.documentElement.style.setProperty('--pointer-shift-y', `${(y - 0.5) * 16}px`);
      });
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frame) cancelAnimationFrame(frame);
      window.__pnRevealObserver?.disconnect();
      delete window.__pnRevealObserver;
    };
  }, []);

  return (
    <main>
      <div className="ambient-background" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-orb ambient-orb-three" />
        <span className="ambient-grid" />
      </div>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Header />

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <SectionTag>MARKETING · VENDAS · TECNOLOGIA</SectionTag>
          <p className="hero-kicker">UM POUCO SOBRE MIM</p>
          <h1>Ideias que viram negócios<span>.</span></h1>
          <p className="hero-position">Empreendedor. Estrategista. Construtor de negócios.</p>
          <p className="hero-intro">Compartilho experiências, construo soluções e conecto estratégia, marketing, vendas e tecnologia para transformar oportunidades em negócios.</p>
          <div className="hero-actions">
            <a className="button button-white" href="#ecossistema">Conheça meu ecossistema <Arrow /></a>
            <a className="button button-ghost" href={WHATSAPP} target="_blank" rel="noreferrer">Fale comigo</a>
          </div>
          <div className="hero-foot"><span>EMPREENDEDORISMO NA PRÁTICA</span><a href="#ecossistema">DESLIZE PARA EXPLORAR ↓</a></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame"><img src="/pedro-nemer.jpg" alt="Pedro Nemer em retrato profissional" /></div>
          <div className="portrait-note"><span>CONSTRUINDO O PRÓXIMO</span><strong>PEDRO NEMER</strong></div>
          <div className="hero-index">01 <i>/ 08</i></div>
        </div>
      </section>

      <section className="manifesto" id="ecossistema">
        <span className="eyebrow">UM ECOSSISTEMA EM MOVIMENTO</span>
        <p>Não é sobre falar de negócios. É sobre <em>construir, testar, aprender e evoluir</em> — e compartilhar o que acontece no caminho.</p>
      </section>

      <section className="apice-section" id="apice">
        <div className="content-width">
          <div className="section-topline"><span>02 / PERFORMANCE & CRESCIMENTO</span><span>ÁPICE GROWTH MARKETING</span></div>
          <div className="apice-layout">
            <div className="apice-copy reveal">
              <div className="apice-wordmark"><span className="apice-symbol">Á</span><span>ÁPICE <b>GROWTH MARKETING</b></span></div>
              <p className="overline">PERFORMANCE QUE MOVE NEGÓCIOS</p>
              <h2>Crescimento não acontece por acaso<span>.</span></h2>
              <p className="section-description">A ÁPICE GROWTH MARKETING atua na construção de operações de crescimento, conectando aquisição de clientes, estrutura comercial e vendas.</p>
              <a className="button button-white" href={LINKS.apice} target="_blank" rel="noreferrer">Falar com a Ápice <Arrow /></a>
            </div>
            <div className="apice-pillars reveal">
              <article className="pillar"><span>01</span><div><h3>Tráfego pago</h3><p>Aquisição e geração de oportunidades para o negócio.</p></div><b>↗</b></article>
              <article className="pillar"><span>02</span><div><h3>Estruturação comercial</h3><p>Organização e desenvolvimento de times de vendas.</p></div><b>↗</b></article>
              <article className="pillar"><span>03</span><div><h3>Estratégia de vendas</h3><p>Processos e ações para melhorar atendimento e conversão.</p></div><b>↗</b></article>
              <div className="apice-note">AQUISIÇÃO <i>×</i> PROCESSO <i>×</i> CONVERSÃO</div>
            </div>
          </div>
        </div>
      </section>

      <section className="autom-section" id="autom">
        <div className="content-width">
          <div className="section-topline"><span>03 / TECNOLOGIA · CRM</span><span>SOFTWARE & GESTÃO COMERCIAL</span></div>
          <div className="product-layout">
            <Reveal className="product-copy">
              <div className="autom-logo-wrap"><img src="/autom-logo.png" alt="Autom CRM" /></div>
              <p className="overline">ORGANIZAÇÃO PARA VENDER MELHOR</p>
              <h2>Seu comercial, em outro nível<span>.</span></h2>
              <p className="section-description">O AUTOM CRM é uma plataforma para apoiar a organização da operação comercial, acompanhar oportunidades e dar mais clareza ao relacionamento com clientes.</p>
              <a className="button button-autom" href={LINKS.autom} target="_blank" rel="noreferrer">Conhecer o AUTOM CRM <Arrow /></a>
            </Reveal>
            <Reveal className="autom-visual">
              <div className="crm-window">
                <div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>AUTOM CRM / VISÃO GERAL</span><b>●</b></div>
                <div className="crm-content"><aside><b>A</b><i/><i/><i/><i/><i/></aside><div className="crm-main"><div className="crm-heading"><span>Visão geral</span><small>PAINEL COMERCIAL</small></div><div className="crm-metrics"><div><small>OPORTUNIDADES</small><b>+<i>+</i></b></div><div><small>ACOMPANHAMENTO</small><b>●</b></div><div><small>RESULTADOS</small><b>↗</b></div></div><div className="crm-chart"><div className="chart-label"><span>Atividade comercial</span><small>VISUALIZAÇÃO ILUSTRATIVA</small></div><div className="chart-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div><div className="crm-bottom"><i/><i/><i/></div></div></div>
              </div>
              <span className="visual-caption">PROCESSOS · CLIENTES · OPORTUNIDADES</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="flow-section" id="apiceflow">
        <div className="content-width">
          <div className="section-topline"><span>04 / TECNOLOGIA · SOLUÇÕES DIGITAIS</span><span>PLATAFORMA</span></div>
          <div className="product-layout flow-layout">
            <Reveal className="flow-visual">
              <div className="flow-orbit orbit-one"/><div className="flow-orbit orbit-two"/>
              <div className="flow-center"><img src="/apiceflow-logo.png" alt="Ápice Flow" /></div>
              <div className="flow-chip chip-one">IDEIAS</div><div className="flow-chip chip-two">PROCESSOS</div><div className="flow-chip chip-three">SOLUÇÕES</div>
              <span className="visual-caption">CONECTAR · AUTOMATIZAR · EVOLUIR</span>
            </Reveal>
            <Reveal className="product-copy flow-copy">
              <div className="flow-logo-lockup"><img src="/apiceflow-logo.png" alt=""/><span>ÁPICE<br/><b>FLOW</b></span></div>
              <p className="overline">TECNOLOGIA PARA TIRAR IDEIAS DO PAPEL</p>
              <h2>Transformando processos em possibilidades<span>.</span></h2>
              <p className="section-description">O ÁPICE FLOW reúne a frente de tecnologia e soluções digitais do ecossistema, com foco em criar ferramentas e simplificar processos.</p>
              <a className="button button-flow" href={LINKS.apiceFlow} target="_blank" rel="noreferrer">Conhecer o ÁPICE FLOW <Arrow /></a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="resources-section" id="projetos">
        <div className="content-width">
          <div className="section-topline"><span>05 / CONHECIMENTO & PRODUTOS</span><span>IDEIAS APLICÁVEIS</span></div>
          <div className="resources-heading reveal"><div><p className="overline">CONTEÚDO QUE SAI DO PAPEL</p><h2>Conhecimento para<br/><em>colocar em prática.</em></h2></div><p>Materiais e ferramentas para quem empreende, vende, organiza e quer fazer acontecer.</p></div>
          <div className="resource-grid">
            <Reveal className="resource-card"><div className="mockup mockup-guide"><div className="mockup-top">GUIA PRÁTICO <span>01</span></div><div className="mockup-art"><b>MARKETING<br/>DIGITAL</b><i>DA ESTRATÉGIA À AÇÃO</i></div><div className="mockup-bottom">PEDRO NEMER / PLAYBOOK</div></div><h3>Guias visuais</h3><p>Conteúdos objetivos, organizados para aplicar no dia a dia.</p></Reveal>
            <Reveal className="resource-card"><div className="mockup mockup-sheet"><div className="sheet-head"><span>PLANILHA</span><b>GESTÃO<br/>NA PRÁTICA</b><i>ORGANIZE. ACOMPANHE. DECIDA.</i></div><div className="sheet-grid"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div><h3>Planilhas e ferramentas</h3><p>Recursos para organizar processos, números e decisões.</p></Reveal>
            <Reveal className="resource-card"><div className="mockup mockup-ebook"><div className="ebook-device"><div><span>E-BOOK</span><b>VENDAS<br/>& AQUISIÇÃO</b><i>IDEIAS QUE VIRAM AÇÃO</i></div></div><div className="ebook-phone"><i/><b>GUIA</b><span>30D</span></div></div><h3>E-books e materiais</h3><p>Conhecimento em formatos simples, visuais e acessíveis.</p></Reveal>
          </div>
          <p className="coming-note">NOVOS MATERIAIS E PRODUTOS SERÃO ADICIONADOS AQUI.</p>
        </div>
      </section>

      <section className="academy-section">
        <div className="content-width academy-layout">
          <Reveal className="academy-copy"><p className="overline">06 / PROJETO EM DESENVOLVIMENTO</p><span className="academy-label">APRENDIZADO · GESTÃO · EXECUÇÃO</span><h2>Academia do<br/><em>Empreendedor.</em></h2><p className="section-description">Um projeto para compartilhar conhecimento, experiências e ferramentas que ajudem empreendedores a construir negócios melhores.</p><span className="status-pill"><i/> NO RADAR</span></Reveal>
          <Reveal className="academy-art"><div className="academy-stack"><div className="academy-card card-back">APRENDER</div><div className="academy-card card-mid">APLICAR</div><div className="academy-card card-front"><span>ACADEMIA DO</span><b>EMPREENDEDOR</b><i>APRENDER. APLICAR. EVOLUIR.</i></div></div></Reveal>
        </div>
      </section>

      <section className="future-section">
        <div className="content-width future-inner reveal"><span className="overline">07 / EM CONSTANTE CONSTRUÇÃO</span><h2>Tem sempre algo<br/><em>novo saindo do papel.</em></h2><p>Novos projetos, ferramentas e iniciativas poderão ganhar espaço por aqui. O Business Hub cresce junto com o ecossistema.</p><span className="future-stamp">IDEIAS EM MOVIMENTO <b>✳</b></span></div>
      </section>

      <section className="contact-section" id="contato">
        <div className="content-width reveal"><span className="overline">08 / CONEXÕES</span><h2>Vamos construir<br/><em>alguma coisa juntos?</em></h2><p>Se você tem uma ideia, um negócio ou uma oportunidade, vamos conversar.</p><a className="button button-white" href={WHATSAPP} target="_blank" rel="noreferrer">Chamar no WhatsApp <Arrow /></a><div className="social-note">NEGÓCIOS · TECNOLOGIA · OPORTUNIDADES</div></div>
      </section>

      <footer className="footer"><div className="content-width footer-inner"><Brand compact/><span>Um ecossistema de ideias, negócios e tecnologia.</span><span>© {new Date().getFullYear()} PEDRO NEMER</span></div></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
