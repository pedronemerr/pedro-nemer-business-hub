import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, Workflow, ChartNoAxesCombined, Database, BookOpen, ShoppingBag, Instagram, Youtube, Linkedin, MessageCircle, Sparkles, Zap, Menu } from 'lucide-react';
import './styles.css';

const WHATSAPP = 'https://wa.me/5596984262026';
const links = {
  appsFlow: 'https://siteapice-liard.vercel.app/',
  alton: 'https://automcrm.com.br/',
  whatsapp: WHATSAPP,
  // Preencha as URLs oficiais das redes sociais quando desejar publicá-las.
  instagram: '',
  youtube: '',
  linkedin: '',
};

function ExternalLink({ href, children, className = '', label }) {
  if (!href) return <span className={`link-disabled ${className}`} title="Link será configurado posteriormente">{children}<small>Em breve</small></span>;
  return <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>;
}

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="grid-overlay" />
      <header className="topbar">
        <a href="#top" className="wordmark"><span className="wordmark-mark">PN</span><span>PEDRO NEMER<span className="wordmark-sub">BUSINESS HUB</span></span></a>
        <a className="top-cta" href={WHATSAPP} target="_blank" rel="noreferrer">Vamos conversar <ArrowUpRight size={15}/></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="status-line"><span className="pulse" /> MARKETING <i>·</i> TECNOLOGIA <i>·</i> NEGÓCIOS</div>
          <h1>Construindo negócios.<br/><span>Conectando oportunidades.</span></h1>
          <p className="hero-position">Empreendedor. Estrategista. Construtor de negócios.</p>
          <p className="hero-description">Ideias, marketing e tecnologia aplicados à construção de negócios e novas oportunidades.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#ecossistema">Conheça meu ecossistema <ArrowRight size={17}/></a>
            <a className="button button-ghost" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Falar comigo</a>
          </div>
          <div className="social-row">
            <ExternalLink href={links.instagram}><Instagram size={17}/> Instagram</ExternalLink>
            <ExternalLink href={links.youtube}><Youtube size={17}/> YouTube</ExternalLink>
            <ExternalLink href={links.linkedin}><Linkedin size={17}/> LinkedIn</ExternalLink>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="portrait-frame">
            <div className="portrait-placeholder"><span className="portrait-initials">PN</span><span className="portrait-note">SUA FOTO AQUI</span></div>
            <div className="portrait-glow"/>
          </div>
          <div className="floating-tag tag-top"><Sparkles size={14}/> Construindo o próximo</div>
          <div className="floating-tag tag-bottom"><span className="mini-dot"/> Business mindset</div>
          <div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">+</div>
        </div>
      </section>

      <section className="section service-section">
        <SectionHeading eyebrow="01 / SERVIÇOS" title="Estratégia para crescer." description="Marketing e aquisição para empresas que querem transformar atenção em oportunidades comerciais."/>
        <a className="featured-card" href={WHATSAPP} target="_blank" rel="noreferrer">
          <div className="featured-content">
            <span className="card-kicker"><ChartNoAxesCombined size={15}/> ÁPICE GROWTH MARKETING</span>
            <h3>Vamos acelerar<br/>seu negócio?</h3>
            <p>Estratégia, tráfego pago e crescimento empresarial com foco em aquisição e vendas.</p>
            <span className="card-action">Conhecer os serviços <ArrowUpRight size={17}/></span>
          </div>
          <div className="growth-graphic" aria-hidden="true"><div className="graph-ring ring-one"/><div className="graph-ring ring-two"/><div className="graph-line"/><div className="graph-label">GROWTH<br/><b>↑</b></div></div>
          <span className="card-index">01</span>
        </a>
      </section>

      <section className="section" id="ecossistema">
        <SectionHeading eyebrow="02 / TECNOLOGIA" title="Soluções que estou construindo." description="Produtos e plataformas que conectam tecnologia, processos e crescimento."/>
        <div className="product-grid">
          <ExternalLink href={links.appsFlow} className="product-card apps-card" label="Conhecer Apps Flow">
            <div className="product-top"><span className="product-icon"><Workflow size={23}/></span><span className="product-arrow"><ArrowUpRight size={18}/></span></div>
            <span className="card-kicker">AUTOMAÇÃO & PRODUTIVIDADE</span><h3>Apps Flow</h3>
            <p>Ferramentas e soluções digitais para simplificar processos e transformar ideias em operação.</p>
            <span className="text-link">Conhecer o produto <ArrowRight size={16}/></span>
            <div className="card-orb"/>
          </ExternalLink>
          <ExternalLink href={links.alton} className="product-card alton-card" label="Conhecer Alton CRM">
            <div className="product-top"><span className="product-icon"><Database size={23}/></span><span className="product-arrow"><ArrowUpRight size={18}/></span></div>
            <span className="card-kicker">GESTÃO COMERCIAL</span><h3>Alton CRM</h3>
            <p>Organização comercial para acompanhar oportunidades, processos e relacionamento com clientes.</p>
            <span className="text-link">Conhecer a plataforma <ArrowRight size={16}/></span>
            <div className="card-orb"/>
          </ExternalLink>
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="03 / CONHECIMENTO" title="Materiais para quem constrói." description="Guias, ferramentas e conteúdos práticos para empreendedores. Novos materiais serão adicionados aqui."/>
        <div className="resource-card">
          <div className="resource-icon"><BookOpen size={24}/></div>
          <div><span className="card-kicker">BIBLIOTECA DE CONTEÚDOS</span><h3>Aprenda. Aplique. Evolua.</h3><p>Materiais gratuitos, checklists e recursos para colocar boas ideias em prática.</p></div>
          <span className="coming-soon">NOVOS MATERIAIS EM BREVE</span>
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="04 / PRODUTOS DIGITAIS" title="Conhecimento que vira ação." description="Soluções digitais e produtos práticos organizados por desafios e necessidades."/>
        <div className="lowticket-card">
          <div className="lowticket-symbol"><ShoppingBag size={25}/></div>
          <div className="lowticket-copy"><span className="card-kicker">PRODUTOS & GUIAS</span><h3>Encontre uma solução para o seu próximo passo.</h3><p>Novos produtos digitais e materiais específicos por nicho serão apresentados aqui.</p></div>
          <span className="coming-soon">EM CONSTRUÇÃO</span>
        </div>
      </section>

      <section className="contact-panel">
        <div className="contact-spark"><Zap size={20}/></div>
        <span className="eyebrow">05 / CONTATO</span>
        <h2>Uma ideia, um projeto<br/><span>ou uma oportunidade?</span></h2>
        <p>Vamos conversar sobre o que podemos construir.</p>
        <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer">Falar pelo WhatsApp <ArrowUpRight size={17}/></a>
      </section>

      <footer className="footer">
        <a href="#top" className="wordmark"><span className="wordmark-mark">PN</span><span>PEDRO NEMER<span className="wordmark-sub">BUSINESS HUB</span></span></a>
        <span>Marketing. Tecnologia. Negócios.</span>
        <span>© {new Date().getFullYear()} Pedro Nemer</span>
      </footer>
      <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle size={22}/></a>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
