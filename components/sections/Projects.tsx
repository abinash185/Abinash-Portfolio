const PROJECTS = [
  {
    title: 'GTT Portal – Global Textile Platform',
    status: 'Live', sc: 'st-teal',
    desc: 'Multi-role platform with User, Seller, and Admin dashboards. Integrated Cashfree payments for secure transactions. Scalable multi-dashboard architecture with optimized business logic.',
    tags: [{ l: 'Node.js', c: 't-teal' }, { l: 'Express' }, { l: 'MongoDB' }, { l: 'REST APIs' }, { l: 'JWT' }, { l: 'Cashfree', c: 't-amber' }],
  },
  {
    title: 'Chimpola – Full-Stack Blockchain Platform',
    status: 'Web3', sc: 'st-purple',
    desc: 'Immersive Web3 UI for GameFi, VR, and governance. Blockchain staking, donations, token transactions. DeFi platform with real-time rewards and dVPN access, built with GSAP animations.',
    tags: [{ l: 'Blockchain', c: 't-purple' }, { l: 'React' }, { l: 'GSAP', c: 't-teal' }, { l: 'Web3.js' }, { l: 'DeFi' }],
  },
  {
    title: 'GenAI Web Application',
    status: 'AI-Powered', sc: 'st-amber',
    desc: 'Full-stack GenAI product integrating OpenAI / Claude APIs into Next.js. Features AI chat, document analysis, prompt engineering flows, and real-time streaming responses.',
    tags: [{ l: 'OpenAI', c: 't-amber' }, { l: 'Claude API' }, { l: 'Next.js' }, { l: 'PostgreSQL' }, { l: 'Streaming', c: 't-teal' }],
  },
  {
    title: 'WordPress Custom Theme & WooCommerce',
    status: 'Client Project', sc: 'st-blue',
    desc: 'Custom WordPress theme in PHP + Tailwind CSS (no page builder). WooCommerce store with custom checkout, payment gateway, optimized for Core Web Vitals and SEO.',
    tags: [{ l: 'WordPress', c: 't-blue' }, { l: 'PHP' }, { l: 'Tailwind CSS' }, { l: 'WooCommerce' }, { l: 'SEO' }],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="sec-hdr reveal">
          <span className="sec-icon si-teal">🚀</span>
          <span className="sec-label">Personal Projects</span>
        </div>
        <div className="proj-grid stagger">
          {PROJECTS.map((p) => (
            <div key={p.title} className="proj-card">
              <div className="card-top">
                <div className="card-title">{p.title}</div>
                <span className={`status ${p.sc}`}>{p.status}</span>
              </div>
              <div className="card-desc">{p.desc}</div>
              <div className="card-tags">
                {p.tags.map((t) => (
                  <span key={t.l} className={`tag ${t.c ?? ''}`}>{t.l}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
