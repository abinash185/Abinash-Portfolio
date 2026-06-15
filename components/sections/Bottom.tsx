const ACHIEVEMENTS = [
  { num: '350+', label: 'LeetCode Problems', sub: 'Active competitive programmer with consistent daily practice (abinash185)' },
  { num: '90+',  label: 'Open Source Repos', sub: '90+ repositories on GitHub with awesome projects and active OSS contributions' },
  { num: '7 PR', label: 'Hacktoberfest',     sub: '7 pull requests merged into different repos during DigitalOcean\'s Hacktoberfest' },
  { num: 'IEEE', label: 'Published Research', sub: '"Telecom Churn Prediction using Deep Learning Techniques" — published by IEEE' },
  { num: '⭐',   label: 'HackerRank Certified', sub: 'HackerRank problem-solving certificate — verified programming skills' },
  { num: '7.35', label: 'CGPA – B.Tech IT',  sub: 'Abdul Kalam Technical University — Information Technology, Lucknow, June 2024' },
]

const CERTS = [
  { icon: '🌊', text: 'Hacktoberfest (DigitalOcean) — 7 pull requests merged into different repositories', link: 'https://www.holopin.io/@abinash185#badges' },
  { icon: '⭐', text: 'HackerRank – Problem Solving Certificate — Verified competitive programming and algorithmic skills', link: 'https://www.hackerrank.com/certificates/iframe/a316e03b8c71' },
  { icon: '📰', text: 'IEEE Research Publication — "Telecom Churn Prediction using Deep Learning Techniques: A Comprehensive Survey"', link: 'https://ieeexplore.ieee.org/document/10459682' },
]

export function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="wrap">
        <div className="sec-hdr reveal">
          <span className="sec-icon si-amber">🏆</span>
          <span className="sec-label">Achievements &amp; Open Source</span>
        </div>
        <div className="grid3 stagger">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.label} className="ach-card">
              <div className="ach-num">{a.num}</div>
              <div>
                <div className="ach-label">{a.label}</div>
                <div className="ach-sub">{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Certificates() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-hdr reveal">
          <span className="sec-icon si-teal">📜</span>
          <span className="sec-label">Certificates</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }} className="stagger">
          {CERTS.map((c) => (
            <div key={c.icon} className="cert-row">
              <span className="cert-icon">{c.icon}</span>
              <span className="cert-text" dangerouslySetInnerHTML={{ __html: c.text }} />
              <a href={c.link} target="_blank" rel="noreferrer" className="cert-link">View ↗</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-hdr reveal">
          <span className="sec-icon si-blue">🎓</span>
          <span className="sec-label">Education</span>
        </div>
        <div className="reveal">
          <div className="edu-card">
            <div>
              <div className="edu-degree">B.Tech – Information Technology</div>
              <div className="edu-school">Abdul Kalam Technical University (AKTU) · Lucknow</div>
            </div>
            <div className="edu-right">
              <span className="tag t-teal">CGPA 7.35</span>
              <span className="tag t-blue">June 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="wrap">
        <h2 className="cta-heading reveal">Let&apos;s Build Something Amazing</h2>
        <p className="cta-sub reveal">
          Open to Full Stack, GenAI, and Frontend roles · Available for freelance projects · Let&apos;s connect!
        </p>
        <div className="cta-btns reveal">
          <a href="mailto:abinashkumar185@gmail.com" className="cta-primary">📧 Email Me</a>
          <a href="tel:7355027827" className="cta-secondary">📞 7355027827</a>
          <a href="https://leetcode.com/abinash185" target="_blank" rel="noreferrer" className="cta-secondary">🧩 LeetCode</a>
          <a href="https://github.com/abinash185" target="_blank" rel="noreferrer" className="cta-secondary">🐙 GitHub</a>
          <a href="https://www.linkedin.com/in/abinash-kumar-994544200/" target="_blank" rel="noreferrer" className="cta-secondary">💼 LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© Abinash Kumar 2024<span className="footer-dot" />Varanasi, UP</span>
        <span>Developed by<span className="footer-dot" />Abinash<span className="footer-dot" />❤️</span>
      </div>
    </footer>
  )
}