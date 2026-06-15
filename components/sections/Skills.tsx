const SKILLS = [
  { icon: '⚛️', label: 'Frontend', color: 'si-teal',
    items: [{ l: 'React.js', c: 't-teal' }, { l: 'Next.js', c: 't-teal' }, { l: 'JavaScript' }, { l: 'TypeScript' }, { l: 'GSAP' }, { l: 'Three.js' }, { l: 'Tailwind CSS' }, { l: 'Redux' }, { l: 'Zustand' }, { l: 'Axios' }] },
  { icon: '⚙️', label: 'Backend', color: 'si-amber',
    items: [{ l: 'Node.js', c: 't-amber' }, { l: 'Express.js', c: 't-amber' }, { l: 'REST APIs' }, { l: 'JWT Auth' }, { l: 'Prisma ORM' }, { l: 'Liquid.js' }, { l: 'WebSockets' }] },
  { icon: '🗄️', label: 'Databases', color: 'si-blue',
    items: [{ l: 'MongoDB', c: 't-blue' }, { l: 'PostgreSQL', c: 't-blue' }, { l: 'MySQL' }, { l: 'Firebase' }, { l: 'Redis' }] },
  { icon: '🤖', label: 'GenAI & AI', color: 'si-purple',
    items: [{ l: 'OpenAI API', c: 't-purple' }, { l: 'Claude API', c: 't-purple' }, { l: 'Gemini API', c: 't-purple' }, { l: 'LangChain' }, { l: 'RAG Pipelines' }, { l: 'Prompt Engineering' }, { l: 'AI Agents' }] },
  { icon: '☁️', label: 'Cloud & DevOps', color: 'si-green',
    items: [{ l: 'AWS', c: 't-green' }, { l: 'GCP' }, { l: 'Docker' }, { l: 'CI/CD' }, { l: 'Firebase' }, { l: 'Git' }, { l: 'GitHub Actions' }] },
  { icon: '🌐', label: 'WordPress & CMS', color: 'si-amber',
    items: [{ l: 'WordPress', c: 't-amber' }, { l: 'PHP' }, { l: 'Custom Themes' }, { l: 'WooCommerce' }, { l: 'Elementor' }, { l: 'WP Rocket' }, { l: 'Shopify' }] },
]

const ADDITIONAL = ['Web3.js', 'Blockchain', 'Agile / Jira', 'SSR Optimization', 'Core Web Vitals', 'Performance Tuning', 'Figma', 'Postman']

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="sec-hdr reveal">
          <span className="sec-icon si-blue">🛠️</span>
          <span className="sec-label">Skills &amp; Technologies</span>
        </div>
        <div className="grid3 stagger">
          {SKILLS.map((s) => (
            <div key={s.label} className="skill-cat">
              <div className="skill-cat-head">
                <div className={`skill-cat-icon ${s.color}`}>{s.icon}</div>
                {s.label}
              </div>
              <div className="tags-row">
                {s.items.map((t) => (
                  <span key={t.l} className={`tag ${t.c ?? ''}`}>{t.l}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 22, paddingTop: 22, borderTop: '1px solid var(--border)' }} className="reveal">
          <div className="sec-hdr" style={{ marginBottom: 12 }}>
            <span className="sec-label">Additional</span>
          </div>
          <div className="tags-row">
            {ADDITIONAL.map((a) => <span key={a} className="tag">{a}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
